import { Customer } from '../../models';
interface ICustomerService {
    getCustomers(): Promise<Customer[]>;
    filterCustomers(customerName: string): Promise<Customer[]>;
    getCustomerDetail(customerId: number): Promise<Customer>;
}
export default ICustomerService;
