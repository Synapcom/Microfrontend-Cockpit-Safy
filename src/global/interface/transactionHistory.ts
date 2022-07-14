import { StatusInterface } from './status';
import { TransactionsResponseInterface } from './transactionsResponse';

export interface TransactionsHistoryInterface {
    createdAt: Date|string;
    status: StatusInterface;
}
