# 🎂 Emily Bakes Cakes - Navigation Guide

**Last Updated:** November 23, 2025

---

## ✅ CURRENT ACTIVE FORMS

### 🎯 **Order Creation Form**
- **New Wizard (USE THIS):** `order-form-wizard.html`
- **Location:** Root folder (`c:\Users\adere\Desktop\EBCWIP\order-form-wizard.html`)
- **Features:**
  - 4-step wizard with progress indicator
  - Customer lookup/search or inline add
  - UNLIMITED dynamic cake layers
  - Live price calculation
  - Reference photo upload with thumbnails
  - Full responsive design

### 👤 **Customer Creation Form**
- **New Form (USE THIS):** `dashboard/new-customer.html`
- **Location:** `c:\Users\adere\Desktop\EBCWIP\dashboard\new-customer.html`
- **Features:**
  - All 50 US states dropdown
  - Phone auto-formatting
  - Country-specific ZIP validation (US/Canada/Mexico)
  - Live duplicate customer detection
  - Toast notifications
  - Database schema compliant (all maxlength attributes)

---

## 🔄 REDIRECTED OLD FILES

### ⚠️ **Old Order Form (AUTO-REDIRECTS)**
- `order-form.html` → Redirects to `order-form-wizard.html`
- `Emily-Bakes-Cakes-/order-form.html` → Redirects to `../order-form-wizard.html`

These files now show a redirect page with automatic forwarding to the new wizard.

---

## 🗺️ NAVIGATION LINKS UPDATED

All dashboard "Create New Order" buttons now point to `order-form-wizard.html`:

### ✅ Updated Dashboard Files:
1. `dashboard/index.html` (Main Dashboard)
   - Quick Action button: `../order-form-wizard.html`
   - Sidebar link: `../order-form-wizard.html`

2. `dashboard/baker-dashboard.html`
   - Action button: `../order-form-wizard.html`

3. `dashboard/decorator-dashboard.html`
   - Action button: `../order-form-wizard.html`

4. `dashboard/all-orders.html`
   - Create button: `../order-form-wizard.html`

5. `dashboard/manager-dashboard.html`
   - Action button: `../order-form-wizard.html`

6. `dashboard/sales-dashboard.html`
   - Action button: `../order-form-wizard.html`

7. `dashboard/accountant-dashboard.html`
   - Action button: `../order-form-wizard.html`

### ✅ Customer Form Links (Already Correct):
All "Add Customer" buttons point to `dashboard/new-customer.html`:
- `dashboard/index.html`
- `dashboard/all-customers.html`
- `dashboard/manager-dashboard.html`
- `dashboard/sales-dashboard.html`

---

## 🚀 HOW TO ACCESS

### From Staff Login:
1. Navigate to `staff-login.html`
2. Click "Demo Credentials" toggle
3. Select any role (Manager, Baker, Decorator, etc.)
4. Click "Login"
5. On dashboard, click **"+ Create New Order"** → Goes to wizard
6. On dashboard, click **"+ Add Customer"** → Goes to new customer form

### Direct URLs:
- **Order Wizard:** Open `order-form-wizard.html` in browser
- **Customer Form:** Open `dashboard/new-customer.html` in browser

---

## 🔧 TROUBLESHOOTING

### If you see old forms:

1. **Clear Browser Cache:**
   - Chrome: `Ctrl + Shift + Delete` → Clear cache
   - Edge: `Ctrl + Shift + Delete` → Clear cache
   - Firefox: `Ctrl + Shift + Delete` → Clear cache

2. **Hard Refresh:**
   - `Ctrl + F5` (Windows)
   - `Cmd + Shift + R` (Mac)

3. **Incognito/Private Mode:**
   - Open browser in private/incognito mode to test

4. **Check File Path:**
   - Ensure you're accessing from: `c:\Users\adere\Desktop\EBCWIP\`
   - NOT from: `c:\Users\adere\Desktop\EBCWIP\Emily-Bakes-Cakes-\` (old subfolder)

---

## 📊 FILE STRUCTURE

```
EBCWIP/
├── order-form-wizard.html          ← NEW ORDER WIZARD (USE THIS)
├── order-form.html                 ← REDIRECTS TO WIZARD
├── staff-login.html
├── index.html
├── dashboard/
│   ├── new-customer.html           ← NEW CUSTOMER FORM (USE THIS)
│   ├── index.html                  ← Main Dashboard
│   ├── baker-dashboard.html
│   ├── decorator-dashboard.html
│   ├── all-orders.html
│   ├── all-customers.html
│   ├── manager-dashboard.html
│   ├── sales-dashboard.html
│   ├── accountant-dashboard.html
│   └── js/
│       └── unified-mock-data.js    ← Central data store
└── Emily-Bakes-Cakes-/             ← OLD SUBFOLDER (avoid)
    └── order-form.html             ← REDIRECTS TO ../order-form-wizard.html
```

---

## ✅ VERIFICATION CHECKLIST

- [x] All order buttons point to `order-form-wizard.html`
- [x] All customer buttons point to `dashboard/new-customer.html`
- [x] Old `order-form.html` files redirect to wizard
- [x] New wizard has 4-step progress indicator
- [x] New wizard allows unlimited layers
- [x] New wizard has live pricing
- [x] Customer form has duplicate detection
- [x] Customer form has ZIP validation
- [x] Customer form has toast notifications

---

## 🎯 NEXT STEPS

1. **Clear your browser cache completely**
2. **Open:** `c:\Users\adere\Desktop\EBCWIP\staff-login.html`
3. **Login** with any demo credentials
4. **Click** "Create New Order" → Should see 4-step wizard
5. **Click** "Add Customer" → Should see updated customer form

---

**All navigation updated and ready to use!** 🎉
