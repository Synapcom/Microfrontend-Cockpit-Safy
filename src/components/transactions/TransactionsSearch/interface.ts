export default interface SearchTransactionInterface {
    transactionSearch: string;
    setTransactionSearch: React.Dispatch<React.SetStateAction<string>>;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
