import { ClientsInterface } from "../../../global/interface/clients";
import { AddressInterface } from "../../../global/interface/address";

export default interface ClientInformationInterface {
    client: ClientsInterface;
    address: AddressInterface;
    paymentAddress: AddressInterface;
}
