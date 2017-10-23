import * as http from 'http';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import { CustomerRoutingDefinition } from '../routing';

const MIN_PORT_NUMBER = 1000;
const INVALID_ARGUMENTS = 'Invalid Argument(s) Specified!';

class CRMSystemHosting {
    private expressApp: express.Express;
    private customerRoutingDefinition: CustomerRoutingDefinition;
    private httpServer: http.Server;

    constructor(private portNumber: number) {
        let validation = portNumber && portNumber >= MIN_PORT_NUMBER;

        if (!validation)
            throw new Error(INVALID_ARGUMENTS);

        this.customerRoutingDefinition = new CustomerRoutingDefinition();
        this.expressApp = express();
        this.httpServer = http.createServer(this.expressApp);
        this.expressApp.use(this.handleCors);
        this.expressApp.use(bodyParser.json());
        this.expressApp.use('/api/customers', this.customerRoutingDefinition.Router);
    }

    private handleCors(request: express.Request, response: express.Response, next: express.NextFunction) {
        let validation = request && response && next;

        if (validation) {
            response.header('Access-Control-Allow-Credentials', 'true');
            response.header('Access-Control-Allow-Origin', '*');
            response.header('Access-Control-Allow-Methods', '*');
            response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');    
        }

        next();
    }

    public startServer(): Promise<boolean> {
        let promise = new Promise<boolean>(
            (resolve, reject) => {
                this.httpServer.listen(this.portNumber, () => {
                    resolve(true);
                });
            });

        return promise;
    }

    public stopServer(): Promise<boolean> {
        let promise = new Promise<boolean>(
            (resolve, reject) => {
                this.httpServer.close(() => resolve(true));
            });

        return promise;
    }
}

export default CRMSystemHosting;
