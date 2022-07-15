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
import { AddressInterface } from '../../global/interface/address';
import datamock from '../../assets/datamock.json';
import LoadingCircle from '../../assets/img/loading.gif';

const TransactionDetails: React.FC = () => {

    const [ tab, setTab ] = React.useState(0);
    const [ acceptOrder, setAcceptOrder ] = React.useState(null);
    const [ showModal, setShowModal ] = React.useState(false);
    const [ transaction, setTransaction ] = React.useState<TransactionsResponseInterface>(null);
    const [ client, setClient ] = React.useState<ClientsInterface>(null);
    const [ store, setStore ] = React.useState<StoresInterface>(null);
    const [ address, setAddress ] = React.useState<AddressInterface>(null);
    const [ paymentAddress, setPaymentAddress ] = React.useState<AddressInterface>(null);
    const [ orderBy, setOrderBy ] = React.useState('t.orderDate');

    const params = useParams();

    const syncOrder = async () => {
        // const response = await api.get<TransactionsResponseInterface>(`/transactions/${params.orderNumber}`);

        // const responseAddress = await api.get(`/transactionAddress/${response.data.transactionId}`);

        // console.log(params);

        console.debug(params);

        const transactionFiltred = datamock
        .transactions
        .find(transaction => transaction.transactionId === Number(params.transactionId));

        setClient(transactionFiltred.client);
        setStore(transactionFiltred.store);
        setTransaction(transactionFiltred);
        setAddress(transactionFiltred.address.deliveryAddress);
        setPaymentAddress(transactionFiltred.address.paymentAddress);
    };

    const defineViewContent = (index = 0) => {
        const views = [
            <Transactions deliveryAddress={address} setOrderBy={setOrderBy} clientId={client.clientId} key={0} />,
            <Transactions deliveryAddress={address} setOrderBy={setOrderBy} limitOrdersRequest={15} clientId={client.clientId} key={1} />,
            <StatusTransaction transactionId={transaction.transactionId} key={2} />,
            <RegisterData client={client} key={3} />,
            <StorePolitics politics={store.politics} key={4} />,
        ];

        return views[index];
    };

    React.useLayoutEffect(() => {
        syncOrder();
    }, [orderBy]);

    const render = () => {
        if (transaction === null || client === null || store === null) {
            return (
                <Loading>
                    <img src={LoadingCircle} alt="Loading circle..." />
                </Loading>
            );
        }

        return (
            <Main
                breadcrumbTextPaths={['Pagina inicial', 'Cockpit', 'Pedido']}
                breadcrumbURLPaths={['/', '/', '/']}
                titleText={`Pedido ${transaction.reference}`}
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
                            paymentAddress={paymentAddress}
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
