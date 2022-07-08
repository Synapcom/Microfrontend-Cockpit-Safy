import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderDetails from '../../components/transactionDetails/HeaderDetails';
import AsideMenu from '../../components/transactionDetails/AsideMenu';
import Transactions from '../../components/transactionDetails/Transactions';
import { Container, Loading } from './style';
import ClientInformation from '../../components/transactionDetails/ClientInformation';
import StatusTransaction from '../../components/transactionDetails/StatusTransaction';
import RegisterData from '../../components/transactionDetails/RegisterData';
import StorePolitics from '../../components/transactionDetails/StorePolitics';
import Modal from '../../components/transactionDetails/Modal';
import api from '../../api/api';
import { TransactionsResponseInterface } from '../../global/interface/transactionsResponse';
import { ClientsInterface } from '../../global/interface/clients';
import { StoresInterface } from '../../global/interface/stores';
import Main from '../../templates/Main';
import ControlButtons from '../../components/transactionDetails/ControlButtons';
import LoadingCircle from '../../assets/img/loading.gif';
import { AddressInterface } from '../../global/interface/address';

const TransactionDetails: React.FC = () => {

    const [ tab, setTab ] = React.useState(0);
    const [ acceptOrder, setAcceptOrder ] = React.useState(null);
    const [ showModal, setShowModal ] = React.useState(false);
    const [ transaction, setTransaction ] = React.useState<TransactionsResponseInterface>(null);
    const [ client, setClient ] = React.useState<ClientsInterface>(null);
    const [ store, setStore ] = React.useState<StoresInterface>(null);
    const [ address, setAddress ] = React.useState<AddressInterface>(null);
    const [ shippingAddress, setShippingAddress ] = React.useState<AddressInterface>(null);
    const [ orderBy, setOrderBy ] = React.useState('t.orderDate');

    const params = useParams();

    const syncOrder = async () => {
        const response = await api.get<TransactionsResponseInterface>(`/transactions/${params.orderNumber}`);

        const responseAddress = await api.get(`/transactionAddress/${response.data.transactionId}`);

        // setTransaction(response.data);
        // setClient(response.data.client);
        // setStore(response.data.store);
    };

    const defineViewContent = (index = 0) => {
        const views = [
            <Transactions setOrderBy={setOrderBy} clientId={1} key={0} />,
            <Transactions setOrderBy={setOrderBy} limitOrdersRequest={15} clientId={1} key={1} />,
            <StatusTransaction transactionId={1} key={2} />,
            <RegisterData client={null} key={3} />,
            <StorePolitics politics={'lorem ipsum'} key={4} />,
        ];

        return views[index];
    };

    React.useLayoutEffect(() => {
        syncOrder();
    }, [orderBy]);

    const render = () => {
        /*if (transaction === null || client === null || store === null) {
            return (
                <Loading>
                    <img src={LoadingCircle} alt="Loading circle..." />
                </Loading>
            );
        }*/

        return (
            <Main
                breadcrumbTextPaths={['Pagina inicial', 'Cockpit', 'Pedido']}
                breadcrumbURLPaths={['/', '/', '/']}
                titleText={`Pedido ${params.orderNumber}`}
                previousURL={'/'}
                controls={
                    <ControlButtons
                        accepted={acceptOrder}
                        setAccepted={setAcceptOrder}
                        setShowModal={setShowModal}
                        showModal={showModal}
                    />
                }
            >
                <Container>
                    <Modal accepted={acceptOrder} show={showModal} setShowModal={setShowModal} />
                    <div className='headerInformation'>
                        {transaction ? <HeaderDetails transaction={transaction} /> :<></>}
                    </div>
                    <div className='content'>
                        <AsideMenu tab={tab} setTab={setTab} />

                        {defineViewContent(tab)}

                        <ClientInformation
                            shippingAddress={shippingAddress}
                            address={address}
                            client={client}
                        />
                    </div>
                </Container>
            </Main>
        );
    };

    return render();
};

export default TransactionDetails;
