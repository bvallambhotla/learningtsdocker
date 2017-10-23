"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayUtilities {
    static isExist(arrayOfValues, item) {
        let status = false;
        for (let arrayItem of arrayOfValues) {
            if (arrayItem === item) {
                status = true;
                break;
            }
        }
        return status;
    }
}
exports.default = ArrayUtilities;
//# sourceMappingURL=array-utils.js.map