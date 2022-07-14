import React from 'react';
import Container from './style';
import Infra from '../../../assets/img/icons/Infra.svg';
import { TransactionsInterface } from './interface';
import api from '../../../api/api';
import { TransactionsResponseInterface } from '../../../global/interface/transactionsResponse';
import { formatValue } from '../../../global/utils/valueFormat';
import { CompareStatusId } from '../../../global/utils/status';
import { returnStatusClassName } from '../../../global/utils/statusFormatter';
import datamock from '../../../assets/datamock.json';

const Transactions: React.FC<TransactionsInterface> = ({ limitOrdersRequest = null, clientId, setOrderBy, deliveryAddress }) => {

    const [clientTransactions, setClientTransactions] = React.useState<TransactionsResponseInterface[]>([]);

    React.useLayoutEffect(() => {
        getClientTransactions();
    }, [clientId]);

    const getClientTransactions = () => {
        if (clientId !== null || clientId !== 0) {
            const transactionFiltred = datamock
            .transactions
            .filter(transaction => transaction.client.clientId === clientId);

            //console.debug(transactionFiltred);

            setClientTransactions(transactionFiltred);
        }
    };

    return (
        <Container>
            <div className='topInformations'>
                <h1>
                    Ultimos
                    {limitOrdersRequest !== null ? ` ${limitOrdersRequest} ` : ' '}
                    pedidos
                </h1>
                <div>
                    <label>Ordernar por: </label>
                    <select onChange={event => setOrderBy(event.target.value)}>
                        <option value='t.orderDate'>Mais recente</option>
                        <option value='t.value'>Maior preço</option>
                    </select>
                </div>
            </div>
            <ul className='cardList'>
                {clientTransactions.map(transaction => (
                    <li className='card' key={transaction.reference}>
                        <section className='cardId'>
                            <figure className='companyLogo'>
                                <img src={Infra} alt='company-logo' />
                            </figure>
                            <div>
                                <h2># {transaction.reference}</h2>
                                <h2>{transaction.orderDate}</h2>
                            </div>
                        </section>
                        <section className='cardInfo'>
                            <div>
                                <h2><b>Canal:</b> {transaction.store.name}</h2>
                                <h2>
                                    <b>Entrega: </b> {`${deliveryAddress.street}, ${deliveryAddress.number} - ${deliveryAddress.neighborhood} - ${deliveryAddress.complement} - ${deliveryAddress.postalCode} `}
                                </h2>
                                <h2><b>Total: </b> R$ {formatValue(transaction.value)}</h2>
                                { }
                            </div>
                            <div>
                                <span className={'orderStatusApproved'}>
                                    Aprovado
                                </span>
                            </div>
                        </section>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default Transactions;
