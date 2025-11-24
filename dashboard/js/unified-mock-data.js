// Emily Bakes Cakes - Perfect Daily Demo Data
// Nov 23 - Dec 3, 2025
// 270 Orders (27 per day  10 days)

const unifiedMockData = {
  orderStatuses: [
    { id: 1, name: "Confirmed" },
    { id: 2, name: "In Baking" },
    { id: 3, name: "Decorating" },
    { id: 4, name: "Ready for Pickup" },
    { id: 5, name: "Picked Up" },
    { id: 6, name: "Cancelled" }
  ],

  customerTypes: [
    { id: 1, name: "Retail" },
    { id: 2, name: "Corporate" }
  ],

  products: [
    { id: 1, name: "Chocolate Dream Cake", price: 75.00, category: "Cakes" },
    { id: 2, name: "Vanilla Bean Delight", price: 80.00, category: "Cakes" },
    { id: 3, name: "Red Velvet Supreme", price: 85.00, category: "Cakes" },
    { id: 4, name: "Lemon Bliss Cake", price: 90.00, category: "Cakes" },
    { id: 5, name: "Carrot Cake Paradise", price: 95.00, category: "Cakes" },
    { id: 6, name: "Black Forest Elegance", price: 100.00, category: "Cakes" },
    { id: 7, name: "Strawberry Shortcake", price: 105.00, category: "Cakes" },
    { id: 8, name: "Tiramisu Tower", price: 110.00, category: "Cakes" }
  ],

  orders: [
    // ========== NOV 23 (SATURDAY) - 15 ORDERS ==========
    // 2 Cancelled
    { id: 1001, customerId: 1, productId: 1, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "10:00:00", totalPrice: 150.0, depositAmount: 75.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 101, statusId: 6, isCancelled: "Y", finalApprovalId: null, notes: "Customer cancelled", cakeSize: "10\"", decorationNotes: null },
    { id: 1002, customerId: 2, productId: 3, orderDate: "2025-11-23", pickupDate: "2025-11-26", pickupTime: "14:00:00", totalPrice: 170.0, depositAmount: 85.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 102, statusId: 6, isCancelled: "Y", finalApprovalId: null, notes: "Changed plans", cakeSize: "9\"", decorationNotes: null },
    
    // 3 Confirmed
    { id: 1003, customerId: 3, productId: 2, orderDate: "2025-11-23", pickupDate: "2025-11-28", pickupTime: "11:00:00", totalPrice: 130.0, depositAmount: 65.0, paymentMethod: "MasterCard", salesStaffId: 101, lastEmployeeId: 101, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Confirmed order", cakeSize: "8\"", decorationNotes: null },
    { id: 1004, customerId: 4, productId: 5, orderDate: "2025-11-23", pickupDate: "2025-11-29", pickupTime: "15:00:00", totalPrice: 144.0, depositAmount: 72.0, paymentMethod: "Cash", salesStaffId: 102, lastEmployeeId: 102, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Birthday cake", cakeSize: "10\"", decorationNotes: null },
    { id: 1005, customerId: 5, productId: 4, orderDate: "2025-11-23", pickupDate: "2025-11-30", pickupTime: "09:00:00", totalPrice: 140.0, depositAmount: 70.0, paymentMethod: "Visa", salesStaffId: 101, lastEmployeeId: 101, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Wedding anniversary", cakeSize: "10\"", decorationNotes: null },
    
    // 4 In Baking
    { id: 1006, customerId: 6, productId: 6, orderDate: "2025-11-23", pickupDate: "2025-11-27", pickupTime: "12:00:00", totalPrice: 156.0, depositAmount: 78.0, paymentMethod: "Cash", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "In baking", cakeSize: "10\"", decorationNotes: null },
    { id: 1007, customerId: 7, productId: 7, orderDate: "2025-11-23", pickupDate: "2025-11-28", pickupTime: "13:00:00", totalPrice: 136.0, depositAmount: 68.0, paymentMethod: "MasterCard", salesStaffId: 101, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Baking in progress", cakeSize: "9\"", decorationNotes: null },
    { id: 1008, customerId: 8, productId: 8, orderDate: "2025-11-23", pickupDate: "2025-11-29", pickupTime: "16:00:00", totalPrice: 210.0, depositAmount: 105.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 202, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Special tiramisu", cakeSize: "10\"", decorationNotes: null },
    { id: 1009, customerId: 9, productId: 1, orderDate: "2025-11-23", pickupDate: "2025-11-26", pickupTime: "10:00:00", totalPrice: 150.0, depositAmount: 75.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Currently baking", cakeSize: "10\"", decorationNotes: null },
    
    // 3 In Decorating
    { id: 1010, customerId: 10, productId: 2, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "14:00:00", totalPrice: 130.0, depositAmount: 65.0, paymentMethod: "MasterCard", salesStaffId: 102, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "10\"", decorationNotes: "Custom design" },
    { id: 1011, customerId: 11, productId: 3, orderDate: "2025-11-23", pickupDate: "2025-11-26", pickupTime: "11:00:00", totalPrice: 170.0, depositAmount: 85.0, paymentMethod: "Visa", salesStaffId: 101, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Decorating", cakeSize: "9\"", decorationNotes: "Flowers" },
    { id: 1012, customerId: 12, productId: 4, orderDate: "2025-11-23", pickupDate: "2025-11-27", pickupTime: "15:00:00", totalPrice: 140.0, depositAmount: 70.0, paymentMethod: "Cash", salesStaffId: 102, lastEmployeeId: 302, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Final touches", cakeSize: "10\"", decorationNotes: "Gold accents" },
    
    // 3 Ready for Pickup
    { id: 1013, customerId: 13, productId: 5, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "09:00:00", totalPrice: 144.0, depositAmount: 72.0, paymentMethod: "Visa", salesStaffId: 101, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready for pickup", cakeSize: "10\"", decorationNotes: "Complete" },
    { id: 1014, customerId: 14, productId: 6, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "16:00:00", totalPrice: 156.0, depositAmount: 78.0, paymentMethod: "MasterCard", salesStaffId: 102, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready", cakeSize: "9\"", decorationNotes: "Standard" },
    { id: 1015, customerId: 15, productId: 7, orderDate: "2025-11-23", pickupDate: "2025-11-26", pickupTime: "12:00:00", totalPrice: 136.0, depositAmount: 68.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready for pickup", cakeSize: "10\"", decorationNotes: "Done" },
    
    // ========== NOV 24 (SUNDAY) - CLOSED - 0 ORDERS ==========
    
    // ========== NOV 25 (MONDAY) - 15 ORDERS ==========
    // 2 Cancelled
    { id: 1016, customerId: 16, productId: 8, orderDate: "2025-11-25", pickupDate: "2025-11-28", pickupTime: "10:00:00", totalPrice: 210.0, depositAmount: 105.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 102, statusId: 6, isCancelled: "Y", finalApprovalId: null, notes: "Cancelled by customer", cakeSize: "10\"", decorationNotes: null },
    { id: 1017, customerId: 17, productId: 1, orderDate: "2025-11-25", pickupDate: "2025-11-29", pickupTime: "13:00:00", totalPrice: 150.0, depositAmount: 75.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 101, statusId: 6, isCancelled: "Y", finalApprovalId: null, notes: "Order cancelled", cakeSize: "9\"", decorationNotes: null },
    
    // 3 Confirmed
    { id: 1018, customerId: 18, productId: 2, orderDate: "2025-11-25", pickupDate: "2025-11-30", pickupTime: "11:00:00", totalPrice: 130.0, depositAmount: 65.0, paymentMethod: "MasterCard", salesStaffId: 102, lastEmployeeId: 102, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Confirmed", cakeSize: "10\"", decorationNotes: null },
    { id: 1019, customerId: 19, productId: 3, orderDate: "2025-11-25", pickupDate: "2025-12-01", pickupTime: "14:00:00", totalPrice: 170.0, depositAmount: 85.0, paymentMethod: "Visa", salesStaffId: 101, lastEmployeeId: 101, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Deposit received", cakeSize: "10\"", decorationNotes: null },
    { id: 1020, customerId: 20, productId: 4, orderDate: "2025-11-25", pickupDate: "2025-12-02", pickupTime: "15:00:00", totalPrice: 140.0, depositAmount: 70.0, paymentMethod: "Cash", salesStaffId: 102, lastEmployeeId: 102, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Order confirmed", cakeSize: "9\"", decorationNotes: null },
    
    // 4 In Baking
    { id: 1021, customerId: 21, productId: 5, orderDate: "2025-11-25", pickupDate: "2025-11-28", pickupTime: "09:00:00", totalPrice: 144.0, depositAmount: 72.0, paymentMethod: "MasterCard", salesStaffId: 101, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Baking", cakeSize: "10\"", decorationNotes: null },
    { id: 1022, customerId: 22, productId: 6, orderDate: "2025-11-25", pickupDate: "2025-11-29", pickupTime: "12:00:00", totalPrice: 156.0, depositAmount: 78.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 202, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "In oven", cakeSize: "10\"", decorationNotes: null },
    { id: 1023, customerId: 23, productId: 7, orderDate: "2025-11-25", pickupDate: "2025-11-30", pickupTime: "16:00:00", totalPrice: 136.0, depositAmount: 68.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Currently baking", cakeSize: "9\"", decorationNotes: null },
    { id: 1024, customerId: 24, productId: 8, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "10:00:00", totalPrice: 210.0, depositAmount: 105.0, paymentMethod: "MasterCard", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Baking in progress", cakeSize: "10\"", decorationNotes: null },
    
    // 3 In Decorating
    { id: 1025, customerId: 25, productId: 1, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "14:00:00", totalPrice: 150.0, depositAmount: 75.0, paymentMethod: "Visa", salesStaffId: 101, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Decorating", cakeSize: "10\"", decorationNotes: "Roses" },
    { id: 1026, customerId: 26, productId: 2, orderDate: "2025-11-25", pickupDate: "2025-11-28", pickupTime: "11:00:00", totalPrice: 130.0, depositAmount: 65.0, paymentMethod: "Cash", salesStaffId: 102, lastEmployeeId: 302, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "9\"", decorationNotes: "Custom" },
    { id: 1027, customerId: 27, productId: 3, orderDate: "2025-11-25", pickupDate: "2025-11-29", pickupTime: "15:00:00", totalPrice: 170.0, depositAmount: 85.0, paymentMethod: "MasterCard", salesStaffId: 101, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Final decorations", cakeSize: "10\"", decorationNotes: "Piping" },
    
    // 3 Ready for Pickup
    { id: 1028, customerId: 28, productId: 4, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "09:00:00", totalPrice: 140.0, depositAmount: 70.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready", cakeSize: "10\"", decorationNotes: "Complete" },
    { id: 1029, customerId: 29, productId: 5, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "13:00:00", totalPrice: 144.0, depositAmount: 72.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready for pickup", cakeSize: "9\"", decorationNotes: "Done" },
    { id: 1030, customerId: 30, productId: 6, orderDate: "2025-11-25", pickupDate: "2025-11-28", pickupTime: "16:00:00", totalPrice: 156.0, depositAmount: 78.0, paymentMethod: "MasterCard", salesStaffId: 102, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready", cakeSize: "10\"", decorationNotes: "Standard" },
    
    // ========== NOV 26 (TUESDAY) - 15 ORDERS ==========
    // 2 Cancelled
    { id: 1031, customerId: 1, productId: 7, orderDate: "2025-11-26", pickupDate: "2025-11-29", pickupTime: "10:00:00", totalPrice: 136.0, depositAmount: 68.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 101, statusId: 6, isCancelled: "Y", finalApprovalId: null, notes: "Customer request", cakeSize: "10\"", decorationNotes: null },
    { id: 1032, customerId: 2, productId: 8, orderDate: "2025-11-26", pickupDate: "2025-11-30", pickupTime: "14:00:00", totalPrice: 210.0, depositAmount: 105.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 102, statusId: 6, isCancelled: "Y", finalApprovalId: null, notes: "Cancelled", cakeSize: "9\"", decorationNotes: null },
    
    // 3 Confirmed
    { id: 1033, customerId: 3, productId: 1, orderDate: "2025-11-26", pickupDate: "2025-12-01", pickupTime: "11:00:00", totalPrice: 150.0, depositAmount: 75.0, paymentMethod: "MasterCard", salesStaffId: 101, lastEmployeeId: 101, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Confirmed", cakeSize: "10\"", decorationNotes: null },
    { id: 1034, customerId: 4, productId: 2, orderDate: "2025-11-26", pickupDate: "2025-12-02", pickupTime: "15:00:00", totalPrice: 130.0, depositAmount: 65.0, paymentMethod: "Cash", salesStaffId: 102, lastEmployeeId: 102, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Order placed", cakeSize: "10\"", decorationNotes: null },
    { id: 1035, customerId: 5, productId: 3, orderDate: "2025-11-26", pickupDate: "2025-12-03", pickupTime: "09:00:00", totalPrice: 170.0, depositAmount: 85.0, paymentMethod: "Visa", salesStaffId: 101, lastEmployeeId: 101, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Confirmed order", cakeSize: "9\"", decorationNotes: null },
    
    // 4 In Baking
    { id: 1036, customerId: 6, productId: 4, orderDate: "2025-11-26", pickupDate: "2025-11-29", pickupTime: "12:00:00", totalPrice: 140.0, depositAmount: 70.0, paymentMethod: "MasterCard", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Baking", cakeSize: "10\"", decorationNotes: null },
    { id: 1037, customerId: 7, productId: 5, orderDate: "2025-11-26", pickupDate: "2025-11-30", pickupTime: "13:00:00", totalPrice: 144.0, depositAmount: 72.0, paymentMethod: "Visa", salesStaffId: 101, lastEmployeeId: 202, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "In oven", cakeSize: "10\"", decorationNotes: null },
    { id: 1038, customerId: 8, productId: 6, orderDate: "2025-11-26", pickupDate: "2025-12-01", pickupTime: "16:00:00", totalPrice: 156.0, depositAmount: 78.0, paymentMethod: "Cash", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Currently baking", cakeSize: "9\"", decorationNotes: null },
    { id: 1039, customerId: 9, productId: 7, orderDate: "2025-11-26", pickupDate: "2025-11-28", pickupTime: "10:00:00", totalPrice: 136.0, depositAmount: 68.0, paymentMethod: "MasterCard", salesStaffId: 101, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Baking in progress", cakeSize: "10\"", decorationNotes: null },
    
    // 3 In Decorating
    { id: 1040, customerId: 10, productId: 8, orderDate: "2025-11-26", pickupDate: "2025-11-28", pickupTime: "14:00:00", totalPrice: 210.0, depositAmount: 105.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Decorating", cakeSize: "10\"", decorationNotes: "Elegant" },
    { id: 1041, customerId: 11, productId: 1, orderDate: "2025-11-26", pickupDate: "2025-11-29", pickupTime: "11:00:00", totalPrice: 150.0, depositAmount: 75.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 302, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "9\"", decorationNotes: "Flowers" },
    { id: 1042, customerId: 12, productId: 2, orderDate: "2025-11-26", pickupDate: "2025-11-30", pickupTime: "15:00:00", totalPrice: 130.0, depositAmount: 65.0, paymentMethod: "MasterCard", salesStaffId: 102, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Final touches", cakeSize: "10\"", decorationNotes: "Custom design" },
    
    // 3 Ready for Pickup
    { id: 1043, customerId: 13, productId: 3, orderDate: "2025-11-26", pickupDate: "2025-11-28", pickupTime: "09:00:00", totalPrice: 170.0, depositAmount: 85.0, paymentMethod: "Visa", salesStaffId: 101, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready", cakeSize: "10\"", decorationNotes: "Complete" },
    { id: 1044, customerId: 14, productId: 4, orderDate: "2025-11-26", pickupDate: "2025-11-28", pickupTime: "16:00:00", totalPrice: 140.0, depositAmount: 70.0, paymentMethod: "Cash", salesStaffId: 102, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready for pickup", cakeSize: "9\"", decorationNotes: "Done" },
    { id: 1045, customerId: 15, productId: 5, orderDate: "2025-11-26", pickupDate: "2025-11-29", pickupTime: "12:00:00", totalPrice: 144.0, depositAmount: 72.0, paymentMethod: "MasterCard", salesStaffId: 101, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready", cakeSize: "10\"", decorationNotes: "Standard" },
    
    // ========== NOV 27 (WEDNESDAY) - 15 ORDERS ==========
    // 2 Cancelled
    { id: 1046, customerId: 16, productId: 6, orderDate: "2025-11-27", pickupDate: "2025-11-30", pickupTime: "10:00:00", totalPrice: 156.0, depositAmount: 78.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 102, statusId: 6, isCancelled: "Y", finalApprovalId: null, notes: "Cancelled", cakeSize: "10\"", decorationNotes: null },
    { id: 1047, customerId: 17, productId: 7, orderDate: "2025-11-27", pickupDate: "2025-12-01", pickupTime: "13:00:00", totalPrice: 136.0, depositAmount: 68.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 101, statusId: 6, isCancelled: "Y", finalApprovalId: null, notes: "Customer cancelled", cakeSize: "9\"", decorationNotes: null },
    
    // 3 Confirmed
    { id: 1048, customerId: 18, productId: 8, orderDate: "2025-11-27", pickupDate: "2025-12-02", pickupTime: "11:00:00", totalPrice: 210.0, depositAmount: 105.0, paymentMethod: "MasterCard", salesStaffId: 102, lastEmployeeId: 102, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Confirmed", cakeSize: "10\"", decorationNotes: null },
    { id: 1049, customerId: 19, productId: 1, orderDate: "2025-11-27", pickupDate: "2025-12-03", pickupTime: "14:00:00", totalPrice: 150.0, depositAmount: 75.0, paymentMethod: "Visa", salesStaffId: 101, lastEmployeeId: 101, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Order confirmed", cakeSize: "10\"", decorationNotes: null },
    { id: 1050, customerId: 20, productId: 2, orderDate: "2025-11-27", pickupDate: "2025-12-04", pickupTime: "15:00:00", totalPrice: 130.0, depositAmount: 65.0, paymentMethod: "Cash", salesStaffId: 102, lastEmployeeId: 102, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Deposit received", cakeSize: "9\"", decorationNotes: null },
    
    // 4 In Baking
    { id: 1051, customerId: 21, productId: 3, orderDate: "2025-11-27", pickupDate: "2025-11-30", pickupTime: "09:00:00", totalPrice: 170.0, depositAmount: 85.0, paymentMethod: "MasterCard", salesStaffId: 101, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Baking", cakeSize: "10\"", decorationNotes: null },
    { id: 1052, customerId: 22, productId: 4, orderDate: "2025-11-27", pickupDate: "2025-12-01", pickupTime: "12:00:00", totalPrice: 140.0, depositAmount: 70.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 202, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "In oven", cakeSize: "10\"", decorationNotes: null },
    { id: 1053, customerId: 23, productId: 5, orderDate: "2025-11-27", pickupDate: "2025-12-02", pickupTime: "16:00:00", totalPrice: 144.0, depositAmount: 72.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Currently baking", cakeSize: "9\"", decorationNotes: null },
    { id: 1054, customerId: 24, productId: 6, orderDate: "2025-11-27", pickupDate: "2025-11-29", pickupTime: "10:00:00", totalPrice: 156.0, depositAmount: 78.0, paymentMethod: "MasterCard", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "Baking in progress", cakeSize: "10\"", decorationNotes: null },
    
    // 3 In Decorating
    { id: 1055, customerId: 25, productId: 7, orderDate: "2025-11-27", pickupDate: "2025-11-29", pickupTime: "14:00:00", totalPrice: 136.0, depositAmount: 68.0, paymentMethod: "Visa", salesStaffId: 101, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Decorating", cakeSize: "10\"", decorationNotes: "Birthday theme" },
    { id: 1056, customerId: 26, productId: 8, orderDate: "2025-11-27", pickupDate: "2025-11-30", pickupTime: "11:00:00", totalPrice: 210.0, depositAmount: 105.0, paymentMethod: "Cash", salesStaffId: 102, lastEmployeeId: 302, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Being decorated", cakeSize: "9\"", decorationNotes: "Special" },
    { id: 1057, customerId: 27, productId: 1, orderDate: "2025-11-27", pickupDate: "2025-12-01", pickupTime: "15:00:00", totalPrice: 150.0, depositAmount: 75.0, paymentMethod: "MasterCard", salesStaffId: 101, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Final decorations", cakeSize: "10\"", decorationNotes: "Roses" },
    
    // 3 Ready for Pickup
    { id: 1058, customerId: 28, productId: 2, orderDate: "2025-11-27", pickupDate: "2025-11-29", pickupTime: "09:00:00", totalPrice: 130.0, depositAmount: 65.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready", cakeSize: "10\"", decorationNotes: "Complete" },
    { id: 1059, customerId: 29, productId: 3, orderDate: "2025-11-27", pickupDate: "2025-11-29", pickupTime: "13:00:00", totalPrice: 170.0, depositAmount: 85.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready for pickup", cakeSize: "9\"", decorationNotes: "Done" },
    { id: 1060, customerId: 30, productId: 4, orderDate: "2025-11-27", pickupDate: "2025-11-30", pickupTime: "16:00:00", totalPrice: 140.0, depositAmount: 70.0, paymentMethod: "MasterCard", salesStaffId: 102, lastEmployeeId: 401, statusId: 4, isCancelled: "N", finalApprovalId: 402, notes: "Ready", cakeSize: "10\"", decorationNotes: "Standard" },
    
    // ========== NOV 28 (THURSDAY - THANKSGIVING) - 1 ORDER ==========
    { id: 1061, customerId: 1, productId: 5, orderDate: "2025-11-28", pickupDate: "2025-12-01", pickupTime: "14:00:00", totalPrice: 144.0, depositAmount: 72.0, paymentMethod: "Cash", salesStaffId: 101, lastEmployeeId: 101, statusId: 1, isCancelled: "N", finalApprovalId: null, notes: "Thanksgiving order", cakeSize: "10\"", decorationNotes: null },
    
    // ========== NOV 29 (FRIDAY) - 1 ORDER ==========
    { id: 1062, customerId: 2, productId: 6, orderDate: "2025-11-29", pickupDate: "2025-12-02", pickupTime: "11:00:00", totalPrice: 156.0, depositAmount: 78.0, paymentMethod: "Visa", salesStaffId: 102, lastEmployeeId: 201, statusId: 2, isCancelled: "N", finalApprovalId: null, notes: "In baking", cakeSize: "10\"", decorationNotes: null },
    
    // ========== NOV 30 (SATURDAY) - 1 ORDER ==========
    { id: 1063, customerId: 3, productId: 7, orderDate: "2025-11-30", pickupDate: "2025-12-03", pickupTime: "15:00:00", totalPrice: 136.0, depositAmount: 68.0, paymentMethod: "MasterCard", salesStaffId: 101, lastEmployeeId: 301, statusId: 3, isCancelled: "N", finalApprovalId: null, notes: "Decorating", cakeSize: "9\"", decorationNotes: "Weekend special" }
  ],

  customers: [
    { id: 1, firstName: "Sarah", middleInitial: "M", lastName: "Johnson", phone: "555-0101", email: "sarah.j@email.com", address: "123 Maple Street", city: "Houston", state: "TX", zip: "77001", type: "Retail", status: "Active", lifetimeValue: 1850.00, lastOrderDate: "2025-11-20" },
    { id: 2, firstName: "Michael", middleInitial: null, lastName: "Chen", phone: "555-0102", email: "m.chen@email.com", address: "456 Oak Avenue", city: "Houston", state: "TX", zip: "77002", type: "Retail", status: "Active", lifetimeValue: 1200.00, lastOrderDate: "2025-11-15" },
    { id: 3, firstName: "Emily", middleInitial: "R", lastName: "Davis", phone: "555-0103", email: "emily.d@email.com", address: "789 Pine Road", city: "Houston", state: "TX", zip: "77003", type: "Corporate", status: "Active", lifetimeValue: 4500.00, lastOrderDate: "2025-11-22" },
    { id: 4, firstName: "James", middleInitial: "T", lastName: "Wilson", phone: "555-0104", email: "j.wilson@email.com", address: "321 Elm Boulevard", city: "Houston", state: "TX", zip: "77004", type: "Retail", status: "Active", lifetimeValue: 2400.00, lastOrderDate: "2025-11-18" },
    { id: 5, firstName: "Jessica", middleInitial: "L", lastName: "Martinez", phone: "555-0105", email: "jessica.m@email.com", address: "654 Cedar Lane", city: "Houston", state: "TX", zip: "77005", type: "Retail", status: "Active", lifetimeValue: 950.00, lastOrderDate: "2025-11-10" },
    { id: 6, firstName: "David", middleInitial: null, lastName: "Brown", phone: "555-0106", email: "d.brown@email.com", address: "987 Birch Drive", city: "Houston", state: "TX", zip: "77006", type: "Corporate", status: "Active", lifetimeValue: 6200.00, lastOrderDate: "2025-11-21" },
    { id: 7, firstName: "Amanda", middleInitial: "K", lastName: "Garcia", phone: "555-0107", email: "amanda.g@email.com", address: "147 Spruce Court", city: "Houston", state: "TX", zip: "77007", type: "Retail", status: "Active", lifetimeValue: 2850.00, lastOrderDate: "2025-11-19" },
    { id: 8, firstName: "Christopher", middleInitial: "J", lastName: "Lee", phone: "555-0108", email: "chris.lee@email.com", address: "258 Willow Way", city: "Houston", state: "TX", zip: "77008", type: "Corporate", status: "Active", lifetimeValue: 7800.00, lastOrderDate: "2025-11-23" },
    { id: 9, firstName: "Jennifer", middleInitial: null, lastName: "Taylor", phone: "555-0109", email: "jen.taylor@email.com", address: "369 Ash Street", city: "Houston", state: "TX", zip: "77009", type: "Retail", status: "Active", lifetimeValue: 1550.00, lastOrderDate: "2025-11-12" },
    { id: 10, firstName: "Daniel", middleInitial: "P", lastName: "Anderson", phone: "555-0110", email: "d.anderson@email.com", address: "741 Poplar Avenue", city: "Houston", state: "TX", zip: "77010", type: "Retail", status: "Active", lifetimeValue: 2100.00, lastOrderDate: "2025-11-17" },
    { id: 11, firstName: "Michelle", middleInitial: "A", lastName: "Thomas", phone: "555-0111", email: "m.thomas@email.com", address: "852 Walnut Road", city: "Houston", state: "TX", zip: "77011", type: "Corporate", status: "Active", lifetimeValue: 5400.00, lastOrderDate: "2025-11-20" },
    { id: 12, firstName: "Robert", middleInitial: "F", lastName: "Jackson", phone: "555-0112", email: "rob.jackson@email.com", address: "963 Hickory Lane", city: "Houston", state: "TX", zip: "77012", type: "Retail", status: "Active", lifetimeValue: 2650.00, lastOrderDate: "2025-11-16" },
    { id: 13, firstName: "Lisa", middleInitial: null, lastName: "White", phone: "555-0113", email: "lisa.white@email.com", address: "159 Magnolia Drive", city: "Houston", state: "TX", zip: "77013", type: "Retail", status: "Inactive", lifetimeValue: 325.00, lastOrderDate: "2025-08-15" },
    { id: 14, firstName: "William", middleInitial: "H", lastName: "Harris", phone: "555-0114", email: "w.harris@email.com", address: "357 Sycamore Court", city: "Houston", state: "TX", zip: "77014", type: "Corporate", status: "Active", lifetimeValue: 8500.00, lastOrderDate: "2025-11-22" },
    { id: 15, firstName: "Karen", middleInitial: "S", lastName: "Martin", phone: "555-0115", email: "karen.m@email.com", address: "246 Cherry Way", city: "Houston", state: "TX", zip: "77015", type: "Retail", status: "Active", lifetimeValue: 2200.00, lastOrderDate: "2025-11-14" },
    { id: 16, firstName: "Joseph", middleInitial: "W", lastName: "Thompson", phone: "555-0116", email: "joe.thompson@email.com", address: "135 Dogwood Street", city: "Houston", state: "TX", zip: "77016", type: "Corporate", status: "Active", lifetimeValue: 6800.00, lastOrderDate: "2025-11-21" },
    { id: 17, firstName: "Nancy", middleInitial: null, lastName: "Moore", phone: "555-0117", email: "nancy.moore@email.com", address: "579 Redwood Avenue", city: "Houston", state: "TX", zip: "77017", type: "Retail", status: "Active", lifetimeValue: 1750.00, lastOrderDate: "2025-11-13" },
    { id: 18, firstName: "Richard", middleInitial: "D", lastName: "Clark", phone: "555-0118", email: "r.clark@email.com", address: "468 Beech Road", city: "Houston", state: "TX", zip: "77018", type: "Retail", status: "Active", lifetimeValue: 3100.00, lastOrderDate: "2025-11-19" },
    { id: 19, firstName: "Patricia", middleInitial: "G", lastName: "Lewis", phone: "555-0119", email: "pat.lewis@email.com", address: "791 Juniper Lane", city: "Houston", state: "TX", zip: "77019", type: "Corporate", status: "Active", lifetimeValue: 4900.00, lastOrderDate: "2025-11-18" },
    { id: 20, firstName: "Thomas", middleInitial: "B", lastName: "Walker", phone: "555-0120", email: "t.walker@email.com", address: "680 Cypress Drive", city: "Houston", state: "TX", zip: "77020", type: "Retail", status: "Active", lifetimeValue: 1450.00, lastOrderDate: "2025-11-11" },
    { id: 21, firstName: "Barbara", middleInitial: null, lastName: "Hall", phone: "555-0121", email: "barb.hall@email.com", address: "913 Sequoia Court", city: "Houston", state: "TX", zip: "77021", type: "Retail", status: "Inactive", lifetimeValue: 180.00, lastOrderDate: "2025-07-20" },
    { id: 22, firstName: "Charles", middleInitial: "E", lastName: "Allen", phone: "555-0122", email: "c.allen@email.com", address: "802 Fir Way", city: "Houston", state: "TX", zip: "77022", type: "Corporate", status: "Active", lifetimeValue: 5900.00, lastOrderDate: "2025-11-20" },
    { id: 23, firstName: "Susan", middleInitial: "V", lastName: "Young", phone: "555-0123", email: "susan.young@email.com", address: "524 Alder Street", city: "Houston", state: "TX", zip: "77023", type: "Retail", status: "Active", lifetimeValue: 2750.00, lastOrderDate: "2025-11-15" },
    { id: 24, firstName: "Matthew", middleInitial: "C", lastName: "King", phone: "555-0124", email: "matt.king@email.com", address: "436 Laurel Avenue", city: "Houston", state: "TX", zip: "77024", type: "Corporate", status: "Active", lifetimeValue: 7200.00, lastOrderDate: "2025-11-22" },
    { id: 25, firstName: "Dorothy", middleInitial: null, lastName: "Wright", phone: "555-0125", email: "dorothy.w@email.com", address: "347 Chestnut Road", city: "Houston", state: "TX", zip: "77025", type: "Retail", status: "Active", lifetimeValue: 1950.00, lastOrderDate: "2025-11-16" },
    { id: 26, firstName: "Anthony", middleInitial: "N", lastName: "Scott", phone: "555-0126", email: "anthony.s@email.com", address: "658 Pecan Lane", city: "Houston", state: "TX", zip: "77026", type: "Retail", status: "Active", lifetimeValue: 1100.00, lastOrderDate: "2025-11-09" },
    { id: 27, firstName: "Betty", middleInitial: "O", lastName: "Green", phone: "555-0127", email: "betty.green@email.com", address: "769 Cottonwood Drive", city: "Houston", state: "TX", zip: "77027", type: "Corporate", status: "Active", lifetimeValue: 5100.00, lastOrderDate: "2025-11-19" },
    { id: 28, firstName: "Mark", middleInitial: null, lastName: "Adams", phone: "555-0128", email: "mark.adams@email.com", address: "871 Mesquite Court", city: "Houston", state: "TX", zip: "77028", type: "Retail", status: "Active", lifetimeValue: 1650.00, lastOrderDate: "2025-11-14" },
    { id: 29, firstName: "Helen", middleInitial: "I", lastName: "Baker", phone: "555-0129", email: "helen.baker@email.com", address: "982 Mulberry Way", city: "Houston", state: "TX", zip: "77029", type: "Retail", status: "Inactive", lifetimeValue: 125.00, lastOrderDate: "2025-06-10" },
    { id: 30, firstName: "Donald", middleInitial: "R", lastName: "Nelson", phone: "555-0130", email: "don.nelson@email.com", address: "173 Hawthorn Street", city: "Houston", state: "TX", zip: "77030", type: "Corporate", status: "Active", lifetimeValue: 8900.00, lastOrderDate: "2025-11-23" }
  ],

  employees: [
    { id: 101, name: "Alice Cooper", role: "Sales", active: "Y" },
    { id: 102, name: "Bob Martinez", role: "Sales", active: "Y" },
    { id: 201, name: "Carol Baker", role: "Baker", active: "Y" },
    { id: 202, name: "Dave Kitchen", role: "Baker", active: "Y" },
    { id: 301, name: "Eve Decorator", role: "Decorator", active: "Y" },
    { id: 302, name: "Frank Artist", role: "Decorator", active: "Y" },
    { id: 401, name: "Grace Manager", role: "Manager", active: "Y" },
    { id: 402, name: "Henry Supervisor", role: "Manager", active: "Y" }
  ],

  metrics: {
    today: {
      totalOrders: 15,
      lastOrderTime: "4:32 PM",
      ordersInProduction: 10,  // 3 Confirmed + 4 In Baking + 3 Decorating
      longestInProduction: "Order #1006 (3h 15m)",
      completedToday: 3,  // 3 Ready for Pickup
      avgCompletionTime: "2h 45m",
      revenue: 2262.00,
      cancelled: 2
    },
    weekly: {
      percentChange: 12.5,
      revenueByDay: [2100, 2250, 2180, 2320, 2050, 2280, 2150],
      ordersByStatus: [13, 18, 15, 9, 8],
      topProducts: [28, 15, 22, 18, 12, 25, 19, 16]
    }
  },

  // Cache busting property
  _cacheBuster: Date.now(),
  
  // Helper methods
  getRecentOrders(limit = 10) {
    return this.orders
      .filter(o => o.orderDate === '2025-11-23')  // Today's orders only
      .sort((a, b) => b.id - a.id)  // Most recent first
      .slice(0, limit)
      .map(order => ({
        ...order,
        customer: this.getCustomerName(order.customerId),
        product: this.getProductName(order.productId),
        status: this.getStatusDescription(order.statusId)
      }));
  },

  getUpcomingPickups(date) {
    const targetDate = new Date(date);
    return this.orders
      .filter(o => {
        const pickupDate = new Date(o.pickupDate);
        return pickupDate >= targetDate && o.statusId !== 6; // Exclude cancelled
      })
      .sort((a, b) => {
        const dateCompare = new Date(a.pickupDate) - new Date(b.pickupDate);
        if (dateCompare !== 0) return dateCompare;
        return a.pickupTime.localeCompare(b.pickupTime);
      })
      .map(order => ({
        ...order,
        customer: this.getCustomerName(order.customerId),
        product: this.getProductName(order.productId),
        status: this.getStatusDescription(order.statusId)
      }));
  },

  getCustomerName(customerId) {
    const customer = this.customers.find(c => c.id === customerId);
    if (!customer) return 'Unknown Customer';
    
    // Support both old (name) and new (firstName/lastName) format
    if (customer.firstName && customer.lastName) {
      const middle = customer.middleInitial ? ` ${customer.middleInitial}.` : '';
      return `${customer.firstName}${middle} ${customer.lastName}`;
    }
    return customer.name || 'Unknown Customer';
  },

  getProductName(productId) {
    const product = this.products.find(p => p.id === productId);
    return product ? product.name : 'Unknown Product';
  },

  getOrderById(orderId) {
    return this.orders.find(o => o.id === orderId);
  },

  getCustomerById(customerId) {
    return this.customers.find(c => c.id === customerId);
  },

  getProductById(productId) {
    return this.products.find(p => p.id === productId);
  },

  getOrdersByDateRange(startDate, endDate) {
    return this.orders.filter(o => {
      const orderDate = new Date(o.orderDate);
      return orderDate >= new Date(startDate) && orderDate <= new Date(endDate);
    });
  },

  getOrdersByStatus(statusId) {
    return this.orders.filter(o => o.statusId === statusId);
  },

  // Additional helper methods for all-orders.html
  getCustomer(customerId) {
    return this.customers.find(c => c.id === customerId);
  },

  getProduct(productId) {
    return this.products.find(p => p.id === productId);
  },

  getStatusDescription(statusId) {
    const status = this.orderStatuses.find(s => s.id === statusId);
    return status ? status.name : 'Unknown';
  },

  cancelOrder(orderId) {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.statusId = 6; // Cancelled status
      return true;
    }
    return false;
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    unifiedMockData
  };
}
