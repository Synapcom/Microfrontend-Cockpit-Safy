export interface ModalInterface {
    accepted: boolean;
    show: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ModalStyleInterface {
    show: boolean;
}
