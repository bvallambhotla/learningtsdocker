"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DEFAULT_MINIMUM = 1;
const DEFAULT_MAXIMUM = 100000000;
class RandomGenerator {
    static generate(minimum = DEFAULT_MINIMUM, maximum = DEFAULT_MAXIMUM) {
        let generatedRandomNumber = Math.floor(Math.random() * (maximum - minimum) + minimum);
        return generatedRandomNumber;
    }
}
exports.default = RandomGenerator;
//# sourceMappingURL=random-generator.js.map