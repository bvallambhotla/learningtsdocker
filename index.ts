import * as minimist from 'minimist';
import { CRMSystemHosting } from './hosting';

const DEFAULT_PORT: number = 9090;

class MainClass {
    static run() {
        let parsedArguments = minimist(process.argv.slice(2), {
            boolean: true
        });

        let portNumber = parsedArguments['port-number'] || DEFAULT_PORT;
        let hosting = new CRMSystemHosting(portNumber);

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
