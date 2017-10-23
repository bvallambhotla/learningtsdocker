import { ArrayUtilities } from '../../utilities';
import { Customer } from '../../models';
import ICustomerService from './icustomerservice';

const SEARCH_STR_LENGTH = 3;
const BAD_WORDS: string[] = ['bad', 'worse', 'not good'];
const INVALID_ARGUMENTS: string = 'Invalid Argument(s) Specified!';
const MIN_SEARCH_INDEX = 0;
const FIRST_INDEX = 0;

const REGISTERED_CUSTOMERS =
    [
        new Customer(11, 'Northwind Traders', 'Bangalore', 10000, true, 'Simple Customer Record'),
        new Customer(12, 'Southwind Traders', 'Bangalore', 10000, true, 'Simple Customer Record'),
        new Customer(13, 'Westwind Traders', 'Bangalore', 10000, true, 'Simple Customer Record'),
        new Customer(14, 'Eastwind Traders', 'Bangalore', 10000, false, 'Simple Customer Record'),
        new Customer(15, 'Oxyrich Traders', 'Bangalore', 10000, true, 'Simple Customer Record'),
        new Customer(16, 'Adventureworks', 'Bangalore', 30000, false, 'Simple Customer Record'),
        new Customer(17, 'Footmart', 'Bangalore', 10000, true, 'Simple Customer Record'),
        new Customer(18, 'Citizen Kane', 'Mysore', 20000, true, 'Simple Customer Record'),
        new Customer(19, 'ePublishers', 'Mangalore', 10000, true, 'Simple Customer Record')
    ];

class CustomerService implements ICustomerService {
    getCustomers(): Promise<Customer[]> {
        let promise = new Promise<Customer[]>(
            (resolve, reject) => {
                resolve(REGISTERED_CUSTOMERS);
            });

        return promise;
    }

    filterCustomers(customerName: string): Promise<Customer[]> {
        let promise = new Promise<Customer[]>(
            (resolve, reject) => {
                let validation = customerName && customerName.length >= SEARCH_STR_LENGTH &&
                    !ArrayUtilities.isExist(BAD_WORDS, customerName);

                if (!validation) {
                    reject({
                        error: INVALID_ARGUMENTS
                    });

                    return;
                }

                var filteredCustomers = REGISTERED_CUSTOMERS.filter(
                    customerRecord => customerRecord.customerName.indexOf(customerName) >= MIN_SEARCH_INDEX);

                resolve(filteredCustomers);
            });

        return promise;
    }

    getCustomerDetail(customerId: number): Promise<Customer> {
        let promise = new Promise<Customer>(
            (resolve, reject) => {
                let filteredCustomer = REGISTERED_CUSTOMERS.filter(
                    customerRecord => customerRecord.customerId === customerId)[FIRST_INDEX];

                resolve(filteredCustomer);
            });

        return promise;
    }
}

export default CustomerService;
