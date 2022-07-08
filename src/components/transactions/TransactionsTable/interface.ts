import { TransactionsResponseInterface } from '../../../global/interface/transactionsResponse';

export interface TransactionsTableInterface {
    transactions: Array<TransactionsResponseInterface>;
}
export interface TransactionStyleInterface {
    isExpress?: boolean;
}
