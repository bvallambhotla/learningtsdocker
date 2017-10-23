"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DELIMITER = ', ';
const NO_TRAIL_CHARACTERS = 2;
class ObjectFormatter {
    static format(object) {
        let formattedMessage = '';
        if (object) {
            for (let property in object) {
                if (typeof object[property] !== 'function') {
                    formattedMessage += `${object[property]}${DELIMITER}`;
                }
            }
        }
        return formattedMessage;
    }
}
exports.default = ObjectFormatter;
//# sourceMappingURL=object-formatter.js.map