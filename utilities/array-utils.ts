class ArrayUtilities {
    static isExist(arrayOfValues: any[], item: any): boolean {
        let status: boolean = false;

        for (let arrayItem of arrayOfValues) {
            if (arrayItem === item) {
                status = true;
                break;
            }
        }

        return status;
    }
}

export default ArrayUtilities;
