export interface FilterStyleInterface {
    showModalBox: boolean;
}

export interface FilterInterface {
    showFilterModal: boolean;

    setShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIdStore: React.Dispatch<React.SetStateAction<number>>;
    setDateStoreFilter: React.Dispatch<any>;
}
