import { TransactionsResponseInterface } from '../../../global/interface/transactionsResponse';

export interface TransactionTabInterface {
    tabIndex: number;
    setTabIndex: React.Dispatch<React.SetStateAction<number>>;
    setTabStatus: React.Dispatch<React.SetStateAction<number>>;
    transactions: Array<TransactionsResponseInterface>;
    setExpress: React.Dispatch<React.SetStateAction<boolean>>;
    setTotalPages: React.Dispatch<React.SetStateAction<number>>;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    limit: number;
}

export interface TransactionTabStyleInterface {
    tabIndex: number;
}

export interface countStatusInterface {
    total: number;
    express: number;
    queue: number;
    inAnalisys: number;
    scheduled: number;
}
