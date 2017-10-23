"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minimist = require("minimist");
const hosting_1 = require("./hosting");
const DEFAULT_PORT = 9090;
class MainClass {
    static run() {
        let parsedArguments = minimist(process.argv.slice(2), {
            boolean: true
        });
        let portNumber = parsedArguments['port-number'] || DEFAULT_PORT;
        let hosting = new hosting_1.CRMSystemHosting(portNumber);
        hosting.startServer()
            .then(result => console.log(`REST Service Started Successfully ... Status ${result}`));
        process.on('SIGINT', () => {
            hosting.stopServer()
                .then(() => {
                console.log('REST Service Stopped Successfully ... ');
                process.exit();
            });
        });
    }
}
MainClass.run();
//# sourceMappingURL=index.js.map