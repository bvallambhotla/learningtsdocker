"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const customers_1 = require("../services/customers");
const utilities_1 = require("../utilities");
class CustomerRoutingDefinition {
    constructor() {
        this.customerService = new customers_1.CustomerService();
        this.router = express.Router();
        this.initializeRouter();
    }
    initializeRouter() {
        this.router.get('/', async (request, response) => {
            try {
                let customers = await this.customerService.getCustomers();
                response.status(utilities_1.HttpStatusCodes.OK).send(customers);
            }
            catch (error) {
                throw error;
            }
        });
        this.router.get('/:customerId', async (request, response) => {
            try {
                let customerId = parseInt(request.params.customerId);
                let filteredCustomer = await this.customerService.getCustomerDetail(customerId);
                if (!filteredCustomer) {
                    response.status(utilities_1.HttpStatusCodes.NOT_FOUND);
                    return;
                }
                response.status(utilities_1.HttpStatusCodes.OK).send(filteredCustomer);
            }
            catch (error) {
                throw error;
            }
        });
        this.router.get('/search/:customerName', async (request, response) => {
            try {
                let searchString = request.params.customerName;
                let filteredCustomers = await this.customerService.filterCustomers(searchString);
                response.status(utilities_1.HttpStatusCodes.OK).send(filteredCustomers);
            }
            catch (error) {
                throw error;
            }
        });
    }
    get Router() {
        return this.router;
    }
}
exports.default = CustomerRoutingDefinition;
//# sourceMappingURL=customer-routing.js.map