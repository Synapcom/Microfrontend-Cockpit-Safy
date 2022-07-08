export interface ControlButtonInterface {
    showModal: boolean;
    setShowModal:  React.Dispatch<React.SetStateAction<boolean>>;
    setAccepted: React.Dispatch<React.SetStateAction<boolean>>;
    accepted: boolean;
}
