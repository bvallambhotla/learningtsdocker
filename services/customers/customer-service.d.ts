import { Customer } from '../../models';
import ICustomerService from './icustomerservice';
declare class CustomerService implements ICustomerService {
    getCustomers(): Promise<Customer[]>;
    filterCustomers(customerName: string): Promise<Customer[]>;
    getCustomerDetail(customerId: number): Promise<Customer>;
}
export default CustomerService;
