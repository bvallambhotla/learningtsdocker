import { ObjectFormatter } from '../utilities';

class Customer {
    constructor(public customerId: number, public customerName: string,
        public address: string, public creditLimit: number, public activeStatus: boolean, public remarks: string) { }

    toString() {
        return ObjectFormatter.format(this);
    }
}

export default Customer;