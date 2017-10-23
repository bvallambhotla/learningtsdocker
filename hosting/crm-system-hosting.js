"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const routing_1 = require("../routing");
const MIN_PORT_NUMBER = 1000;
const INVALID_ARGUMENTS = 'Invalid Argument(s) Specified!';
class CRMSystemHosting {
    constructor(portNumber) {
        this.portNumber = portNumber;
        let validation = portNumber && portNumber >= MIN_PORT_NUMBER;
        if (!validation)
            throw new Error(INVALID_ARGUMENTS);
        this.customerRoutingDefinition = new routing_1.CustomerRoutingDefinition();
        this.expressApp = express();
        this.httpServer = http.createServer(this.expressApp);
        this.expressApp.use(this.handleCors);
        this.expressApp.use(bodyParser.json());
        this.expressApp.use('/api/customers', this.customerRoutingDefinition.Router);
    }
    handleCors(request, response, next) {
        let validation = request && response && next;
        if (validation) {
            response.header('Access-Control-Allow-Credentials', 'true');
            response.header('Access-Control-Allow-Origin', '*');
            response.header('Access-Control-Allow-Methods', '*');
            response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        }
        next();
    }
    startServer() {
        let promise = new Promise((resolve, reject) => {
            this.httpServer.listen(this.portNumber, () => {
                resolve(true);
            });
        });
        return promise;
    }
    stopServer() {
        let promise = new Promise((resolve, reject) => {
            this.httpServer.close(() => resolve(true));
        });
        return promise;
    }
}
exports.default = CRMSystemHosting;
//# sourceMappingURL=crm-system-hosting.js.map