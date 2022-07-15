import { AddressInterface } from "../../../global/interface/address";

export interface TransactionsInterface {
    limitOrdersRequest?: number;
    clientId: number;
    setOrderBy: React.Dispatch<React.SetStateAction<string>>;
    deliveryAddress: AddressInterface;
}
