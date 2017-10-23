declare class Order {
    orderId: number;
    orderDate: Date;
    customerId: number;
    billingAddress: string;
    shippingAddress: string;
    units: number;
    amount: number;
    remarks: string;
    constructor(orderId: number, orderDate: Date, customerId: number, billingAddress: string, shippingAddress: string, units: number, amount: number, remarks: string);
    toString(): string;
}
export default Order;
