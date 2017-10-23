declare class Customer {
    customerId: number;
    customerName: string;
    address: string;
    creditLimit: number;
    activeStatus: boolean;
    remarks: string;
    constructor(customerId: number, customerName: string, address: string, creditLimit: number, activeStatus: boolean, remarks: string);
    toString(): string;
}
export default Customer;
