"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../../utilities");
const models_1 = require("../../models");
const SEARCH_STR_LENGTH = 3;
const BAD_WORDS = ['bad', 'worse', 'not good'];
const INVALID_ARGUMENTS = 'Invalid Argument(s) Specified!';
const MIN_SEARCH_INDEX = 0;
const FIRST_INDEX = 0;
const REGISTERED_CUSTOMERS = [
    new models_1.Customer(11, 'Northwind Traders', 'Bangalore', 10000, true, 'Simple Customer Record'),
    new models_1.Customer(12, 'Southwind Traders', 'Bangalore', 10000, true, 'Simple Customer Record'),
    new models_1.Customer(13, 'Westwind Traders', 'Bangalore', 10000, true, 'Simple Customer Record'),
    new models_1.Customer(14, 'Eastwind Traders', 'Bangalore', 10000, false, 'Simple Customer Record'),
    new models_1.Customer(15, 'Oxyrich Traders', 'Bangalore', 10000, true, 'Simple Customer Record'),
    new models_1.Customer(16, 'Adventureworks', 'Bangalore', 30000, false, 'Simple Customer Record'),
    new models_1.Customer(17, 'Footmart', 'Bangalore', 10000, true, 'Simple Customer Record'),
    new models_1.Customer(18, 'Citizen Kane', 'Mysore', 20000, true, 'Simple Customer Record'),
    new models_1.Customer(19, 'ePublishers', 'Mangalore', 10000, true, 'Simple Customer Record')
];
class CustomerService {
    getCustomers() {
        let promise = new Promise((resolve, reject) => {
            resolve(REGISTERED_CUSTOMERS);
        });
        return promise;
    }
    filterCustomers(customerName) {
        let promise = new Promise((resolve, reject) => {
            let validation = customerName && customerName.length >= SEARCH_STR_LENGTH &&
                !utilities_1.ArrayUtilities.isExist(BAD_WORDS, customerName);
            if (!validation) {
                reject({
                    error: INVALID_ARGUMENTS
                });
                return;
            }
            var filteredCustomers = REGISTERED_CUSTOMERS.filter(customerRecord => customerRecord.customerName.indexOf(customerName) >= MIN_SEARCH_INDEX);
            resolve(filteredCustomers);
        });
        return promise;
    }
    getCustomerDetail(customerId) {
        let promise = new Promise((resolve, reject) => {
            let filteredCustomer = REGISTERED_CUSTOMERS.filter(customerRecord => customerRecord.customerId === customerId)[FIRST_INDEX];
            resolve(filteredCustomer);
        });
        return promise;
    }
}
exports.default = CustomerService;
//# sourceMappingURL=customer-service.js.map