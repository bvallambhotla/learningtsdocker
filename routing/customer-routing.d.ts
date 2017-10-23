/// <reference types="express" />
import * as express from 'express';
declare class CustomerRoutingDefinition {
    private router;
    private customerService;
    constructor();
    private initializeRouter();
    readonly Router: express.Router;
}
export default CustomerRoutingDefinition;
