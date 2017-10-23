"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
class Order {
    constructor(orderId, orderDate = new Date(), customerId, billingAddress, shippingAddress, units, amount, remarks) {
        this.orderId = orderId;
        this.orderDate = orderDate;
        this.customerId = customerId;
        this.billingAddress = billingAddress;
        this.shippingAddress = shippingAddress;
        this.units = units;
        this.amount = amount;
        this.remarks = remarks;
    }
    toString() {
        return utilities_1.ObjectFormatter.format(this);
    }
}
exports.default = Order;
//# sourceMappingURL=order.js.map