"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
class Customer {
    constructor(customerId, customerName, address, creditLimit, activeStatus, remarks) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.address = address;
        this.creditLimit = creditLimit;
        this.activeStatus = activeStatus;
        this.remarks = remarks;
    }
    toString() {
        return utilities_1.ObjectFormatter.format(this);
    }
}
exports.default = Customer;
//# sourceMappingURL=customer.js.map