import { StoresInterface } from './stores';
import { ClientsInterface } from './clients';
import { StatusInterface } from './status';

export interface TransactionsResponseInterface {
    transactionId: number;
    reference: number;
    orderDate: string;
    client: ClientsInterface;
    store: StoresInterface;
    value: number;
    status: StatusInterface;
    requestJson: JSON;
    score: number;
}
