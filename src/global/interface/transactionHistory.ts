import { StatusInterface } from './status';
import { TransactionsResponseInterface } from './transactionsResponse';

export interface TransactionsHistoryInterface {
    id: number;
    createdAt: Date;
    status: StatusInterface;
    transactions: TransactionsResponseInterface;
}
