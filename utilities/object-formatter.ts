const DELIMITER = ', ';
const NO_TRAIL_CHARACTERS = 2;

class ObjectFormatter {
    static format(object: any): string {
        let formattedMessage:string = '';

        if(object) {
            for(let property in object) {
                if(typeof object[property] !== 'function') {
                    formattedMessage += `${object[property]}${DELIMITER}`;
                }
            }
        }

        return formattedMessage;
    }
}

export default ObjectFormatter;
