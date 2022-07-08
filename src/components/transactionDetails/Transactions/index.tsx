import React from 'react';
import Container from './style';
import Infra from '../../../assets/img/icons/Infra.svg';
import { TransactionsInterface } from './interface';
import api from '../../../api/api';
import { TransactionsResponseInterface } from '../../../global/interface/transactionsResponse';

const Transactions: React.FC<TransactionsInterface> = ({ limitOrdersRequest = null, clientId, setOrderBy }) => {

    const [clientTransactions, setClientTransactions] = React.useState<TransactionsResponseInterface[]>([]);

    React.useLayoutEffect(() => {
        getClientTransactions();
    }, [clientId]);

    const getClientTransactions = async () => {
        if (clientId !== null || clientId !== 0) {
            const response = await api.get(`/transactions/client/${clientId}`, {
                headers: {
                    limit: limitOrdersRequest
                }
            });

            setClientTransactions(response.data);
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
                <li className='card'>
                    <section className='cardId'>
                        <figure className='companyLogo'>
                            <img src={Infra} alt='company-logo' />
                        </figure>
                        <div>
                            <h2># 11111111</h2>
                            <h2>10:30 - 00:00</h2>
                        </div>
                    </section>
                    <section className='cardInfo'>
                        <div>
                            <h2><b>Canal:</b> Infrashop</h2>
                            <h2>
                                <b>Entrega: </b>
                            </h2>
                            <h2><b>Total: </b> R$ 120.00</h2>
                        </div>
                        <div>
                            <span className={'Aprovado'}>
                                Aprovado
                            </span>
                        </div>
                    </section>
                </li>

                {/*clientTransactions.map(transaction => (
                    <li className='card' key={transaction.reference}>
                        <section className='cardId'>
                            <figure className='companyLogo'>
                                <img src={Infra} alt='company-logo' />
                            </figure>
                            <div>
                                <h2># {transaction.reference}</h2>
                                <h2>{formatDateTime(transaction.orderDate)}</h2>
                            </div>
                        </section>
                        <section className='cardInfo'>
                            <div>
                                <h2><b>Canal:</b> {transaction.store.name}</h2>
                                <h2>
                                    <b>Entrega: </b>
                                </h2>
                                <h2><b>Total: </b> R$ {formatValue(transaction.value)}</h2>
                                { }
                            </div>
                            <div>
                                <span className={returnStatusClassName(transaction.status.statusId)}>
                                    {statusFormat(transaction.status.statusId)}
                                </span>
                            </div>
                        </section>
                    </li>
                ))*/}

            </ul>
        </Container>
    );
};

export default Transactions;
