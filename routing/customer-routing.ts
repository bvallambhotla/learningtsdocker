import * as express from 'express';
import { CustomerService } from '../services/customers';
import { HttpStatusCodes } from '../utilities';

class CustomerRoutingDefinition {
    private router: express.Router;
    private customerService: CustomerService;

    constructor() {
        this.customerService = new CustomerService();
        this.router = express.Router();

        this.initializeRouter();
    }

    private initializeRouter() {
        this.router.get('/', async (request, response) => {
            try {
                let customers = await this.customerService.getCustomers();

                response.status(HttpStatusCodes.OK).send(customers);
            } catch (error) {
                throw error;
            }
        });

        this.router.get('/:customerId', async (request, response) => {
            try {
                let customerId = parseInt(request.params.customerId);
                let filteredCustomer = await this.customerService.getCustomerDetail(customerId);

                if (!filteredCustomer) {
                    response.status(HttpStatusCodes.NOT_FOUND);
                    return;
                }

                response.status(HttpStatusCodes.OK).send(filteredCustomer);
            } catch (error) {
                throw error;
            }
        });

        this.router.get('/search/:customerName', async (request, response) => {
            try {
                let searchString = request.params.customerName;
                let filteredCustomers = await this.customerService.filterCustomers(searchString);

                response.status(HttpStatusCodes.OK).send(filteredCustomers);
            } catch (error) {
                throw error;
            }
        });
    }

    get Router() {
        return this.router;
    }
}

export default CustomerRoutingDefinition;
