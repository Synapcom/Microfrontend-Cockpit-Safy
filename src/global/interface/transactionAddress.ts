import { TransactionsResponseInterface } from "./transactionsResponse";
import { AddressInterface } from './address';

export interface TransactionAddressInterface {
    transactionAddressId: number;
    addressTypeId: number;
    transaction: TransactionsResponseInterface;
    address: AddressInterface;
}
