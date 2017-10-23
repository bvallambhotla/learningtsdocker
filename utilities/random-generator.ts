const DEFAULT_MINIMUM: number = 1;
const DEFAULT_MAXIMUM: number = 100000000;

class RandomGenerator {
    static generate(minimum = DEFAULT_MINIMUM, maximum = DEFAULT_MAXIMUM) {
        let generatedRandomNumber = Math.floor(
            Math.random() * (maximum - minimum) + minimum);

        return generatedRandomNumber;
    }
}

export default RandomGenerator;
