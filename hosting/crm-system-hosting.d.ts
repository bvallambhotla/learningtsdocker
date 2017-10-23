declare class CRMSystemHosting {
    private portNumber;
    private expressApp;
    private customerRoutingDefinition;
    private httpServer;
    constructor(portNumber: number);
    private handleCors(request, response, next);
    startServer(): Promise<boolean>;
    stopServer(): Promise<boolean>;
}
export default CRMSystemHosting;
