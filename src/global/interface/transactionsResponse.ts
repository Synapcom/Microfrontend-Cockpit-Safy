import { StoresInterface } from './stores';
import { ClientsInterface } from './clients';
import { StatusInterface } from './status';

export interface TransactionsResponseInterface {
    transactionId: number;
    reference: string;
    orderDate: string;
    client: ClientsInterface;
    store: StoresInterface;
    value: number;
    status: StatusInterface;
    score: number;
}
