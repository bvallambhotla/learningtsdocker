import { ObjectFormatter } from '../utilities';

class Order {
    constructor(public orderId: number, public orderDate: Date = new Date(),
        public customerId: number, public billingAddress: string, public shippingAddress: string,
        public units: number, public amount: number, public remarks: string) { }

    toString() {
        return ObjectFormatter.format(this);
    }
}

export default Order;
