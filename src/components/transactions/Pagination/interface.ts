export interface PaginationInterface {
    pageQuantity: number;
    itemsPerPage: number;
    setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface PaginationStyleInterface {
    currentPage: number;
}
