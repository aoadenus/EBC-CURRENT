// Client-side forgot password flow
// Behavior:
// - User submits an email; we generate a 6-digit code and store it in localStorage with a short TTL
// - Attempt a fetch POST to /send-reset-code (optional server integration) with {email, code}
// - Show UI for entering the code and new password; verify against stored code

(function() {
  const requestForm = document.getElementById('requestForm');
  const resetEmail = document.getElementById('resetEmail');
  const sendCodeBtn = document.getElementById('sendCodeBtn');
  const sentNotice = document.getElementById('sentNotice');
  const sentEmail = document.getElementById('sentEmail');
  const showVerifyBtn = document.getElementById('showVerifyBtn');
  const verifySection = document.getElementById('verifySection');
  const codeInput = document.getElementById('codeInput');
  const newPassword = document.getElementById('newPassword');
  const verifyBtn = document.getElementById('verifyBtn');
  const resultMessage = document.getElementById('resultMessage');

  const STORAGE_KEY = 'ebc_reset';
  const CODE_TTL_MS = 1000 * 60 * 15; // 15 minutes

  function genCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  function saveCode(email, code) {
    const payload = { email: email.toLowerCase(), code, created: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }

  function readCode() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch (e) { return null; }
  }

  function clearCode() {
    localStorage.removeItem(STORAGE_KEY);
  }

  async function sendToServer(email, code) {
    // Optional: if you have a backend, it can POST to an endpoint that sends the email.
    // This is a no-op if no server exists. We still return a resolved Promise so UI continues.
    try {
      await fetch('/send-reset-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code })
      });
    } catch (err) {
      // network errors ignored; we'll still simulate success client-side
      console.debug('No backend or network error sending code:', err.message || err);
    }
  }

  requestForm.addEventListener('submit', async function(ev) {
    ev.preventDefault();
    const email = resetEmail.value.trim();
    if (!email) return;
    sendCodeBtn.disabled = true;
    sendCodeBtn.textContent = 'Sending...';

    const code = genCode();
    saveCode(email, code);

    // Try to send to server (if present). We still show the UI even if this fails.
    await sendToServer(email, code);

    sentEmail.textContent = email;
    sentNotice.style.display = 'block';
    showVerifyBtn.focus();

    // For demo purposes: show the generated code in console and as a gentle hint in the message area
    console.info('Generated reset code for', email, code);
    resultMessage.style.display = 'block';
    resultMessage.style.background = '#F8EBD7';
    resultMessage.style.color = '#2B2B2B';
    resultMessage.textContent = 'For demo: your verification code is ' + code + ' (expires in 15 minutes).';

    sendCodeBtn.disabled = false;
    sendCodeBtn.textContent = 'Send verification code';
  });

  showVerifyBtn.addEventListener('click', function() {
    verifySection.style.display = 'block';
    verifySection.scrollIntoView({ behavior: 'smooth' });
  });

  verifyBtn.addEventListener('click', function(ev) {
    ev.preventDefault();
    const entry = readCode();
    if (!entry) {
      resultMessage.style.display = 'block';
      resultMessage.style.background = '#FFECEC';
      resultMessage.style.color = '#9B2C2C';
      resultMessage.textContent = 'No verification request found. Please request a code first.';
      return;
    }

    const now = Date.now();
    if (now - entry.created > CODE_TTL_MS) {
      resultMessage.style.display = 'block';
      resultMessage.style.background = '#FFECEC';
      resultMessage.style.color = '#9B2C2C';
      resultMessage.textContent = 'Verification code expired. Please request a new code.';
      clearCode();
      return;
    }

    const provided = (codeInput.value || '').trim();
    if (provided !== entry.code) {
      resultMessage.style.display = 'block';
      resultMessage.style.background = '#FFECEC';
      resultMessage.style.color = '#9B2C2C';
      resultMessage.textContent = 'Incorrect code. Please check the code and try again.';
      return;
    }

    const pwd = (newPassword.value || '').trim();
    if (pwd.length < 4) {
      resultMessage.style.display = 'block';
      resultMessage.style.background = '#FFECEC';
      resultMessage.style.color = '#9B2C2C';
      resultMessage.textContent = 'Please choose a stronger password (at least 4 characters for demo).';
      return;
    }

    // Demo: store a hashed-ish password in localStorage keyed by email (NOT for production)
    const userKey = 'ebc_user_' + entry.email;
    const stored = { email: entry.email, password: btoa(pwd), updated: Date.now() };
    localStorage.setItem(userKey, JSON.stringify(stored));

    clearCode();

    resultMessage.style.display = 'block';
    resultMessage.style.background = '#E6FFED';
    resultMessage.style.color = '#065F46';
    resultMessage.textContent = 'Password reset successful. You can now return to the login page.';

    // Optionally redirect back to login after a short delay
    setTimeout(() => {
      window.location.href = 'staff-login.html';
    }, 2200);
  });

})();
