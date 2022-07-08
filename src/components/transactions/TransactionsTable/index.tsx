import React from 'react';
import { Container, TableRow } from './style';
import { TransactionsTableInterface } from './interface';
import { useNavigate } from 'react-router-dom';
import { formatDateTime, formatTime } from '../../../global/utils/timeFormat';
import { formatValue } from '../../../global/utils/valueFormat';

const TransactionsTable: React.FC<TransactionsTableInterface> = ({ transactions }) => {
    const navigate = useNavigate();

    const formatDateTimeTag = (dateTime: string) => {
        const [date, time] = formatDateTime(dateTime);

        return (
            <React.Fragment>
                <span>{date}</span>
                <span className="onlyTime">{formatTime(time)}</span>
            </React.Fragment>
        );
    };

    function getStatusName(status: number, express: boolean): string {
        return (express) ? 'Fila expressa' : ((status === 6) ? 'Aguardando análise' : 'Agendado');
    }

    const homolog = () => {
            return (
                <>
                    <TableRow
                        onClick={() => navigate(`/safy/order/details/120`)}
                        key='123'
                        isExpress={true} >
                        <td>
                            <p>#111111111</p>
                        </td>
                        <td>
                            <p>20/12/2022</p>
                        </td>
                        <td>
                            <p>Samsung</p>
                        </td>
                        <td>
                            <p>120.00 R$</p>
                        </td>
                        <td>
                            <p>
                                Gustavo Melo
                                <br></br>
                                gustavo@mail.com
                            </p>
                        </td>
                        <td>
                            <p>120.00 R$</p>
                        </td>
                        <td>
                            <p>320</p>
                        </td>
                        <td>
                            <p className="status">Aprovado</p>
                        </td>
                    </TableRow>
                    <TableRow
                        onClick={() => navigate(`/safy/order/details/120`)}
                        key='123'
                        isExpress={true} >
                        <td>
                            <p>#111111111</p>
                        </td>
                        <td>
                            <p>20/12/2022</p>
                        </td>
                        <td>
                            <p>Samsung</p>
                        </td>
                        <td>
                            <p>120.00 R$</p>
                        </td>
                        <td>
                            <p>
                                Gustavo Melo
                                <br></br>
                                gustavo@mail.com
                            </p>
                        </td>
                        <td>
                            <p>120.00 R$</p>
                        </td>
                        <td>
                            <p>320</p>
                        </td>
                        <td>
                            <p className="status">Aprovado</p>
                        </td>
                    </TableRow>

                    <TableRow
                        onClick={() => navigate(`/safy/order/details/120`)}
                        key='123'
                        isExpress={true} >
                        <td>
                            <p>#111111111</p>
                        </td>
                        <td>
                            <p>20/12/2022</p>
                        </td>
                        <td>
                            <p>Samsung</p>
                        </td>
                        <td>
                            <p>120.00 R$</p>
                        </td>
                        <td>
                            <p>
                                Gustavo Melo
                                <br></br>
                                gustavo@mail.com
                            </p>
                        </td>
                        <td>
                            <p>120.00 R$</p>
                        </td>
                        <td>
                            <p>320</p>
                        </td>
                        <td>
                            <p className="status">Aprovado</p>
                        </td>
                    </TableRow>

                    <TableRow
                        onClick={() => navigate(`/safy/order/details/120`)}
                        key='123'
                        isExpress={true} >
                        <td>
                            <p>#111111111</p>
                        </td>
                        <td>
                            <p>20/12/2022</p>
                        </td>
                        <td>
                            <p>Samsung</p>
                        </td>
                        <td>
                            <p>120.00 R$</p>
                        </td>
                        <td>
                            <p>
                                Gustavo Melo
                                <br></br>
                                gustavo@mail.com
                            </p>
                        </td>
                        <td>
                            <p>120.00 R$</p>
                        </td>
                        <td>
                            <p>320</p>
                        </td>
                        <td>
                            <p className="status">Aprovado</p>
                        </td>
                    </TableRow>

                    <TableRow
                        onClick={() => navigate(`/safy/order/details/120`)}
                        key='123'
                        isExpress={true} >
                        <td>
                            <p>#111111111</p>
                        </td>
                        <td>
                            <p>20/12/2022</p>
                        </td>
                        <td>
                            <p>Samsung</p>
                        </td>
                        <td>
                            <p>120.00 R$</p>
                        </td>
                        <td>
                            <p>
                                Gustavo Melo
                                <br></br>
                                gustavo@mail.com
                            </p>
                        </td>
                        <td>
                            <p>120.00 R$</p>
                        </td>
                        <td>
                            <p>320</p>
                        </td>
                        <td>
                            <p className="status">Aprovado</p>
                        </td>
                    </TableRow>

                    <TableRow
                        onClick={() => navigate(`/safy/order/details/120`)}
                        key='123'
                        isExpress={true} >
                        <td>
                            <p>#111111111</p>
                        </td>
                        <td>
                            <p>20/12/2022</p>
                        </td>
                        <td>
                            <p>Samsung</p>
                        </td>
                        <td>
                            <p>120.00 R$</p>
                        </td>
                        <td>
                            <p>
                                Gustavo Melo
                                <br></br>
                                gustavo@mail.com
                            </p>
                        </td>
                        <td>
                            <p>120.00 R$</p>
                        </td>
                        <td>
                            <p>320</p>
                        </td>
                        <td>
                            <p className="status">Aprovado</p>
                        </td>
                    </TableRow>

                    <TableRow
                        onClick={() => navigate(`/safy/order/details/120`)}
                        key='123'
                        isExpress={true} >
                        <td>
                            <p>#111111111</p>
                        </td>
                        <td>
                            <p>20/12/2022</p>
                        </td>
                        <td>
                            <p>Samsung</p>
                        </td>
                        <td>
                            <p>120.00 R$</p>
                        </td>
                        <td>
                            <p>
                                Gustavo Melo
                                <br></br>
                                gustavo@mail.com
                            </p>
                        </td>
                        <td>
                            <p>120.00 R$</p>
                        </td>
                        <td>
                            <p>320</p>
                        </td>
                        <td>
                            <p className="status">Aprovado</p>
                        </td>
                    </TableRow>
                </>
            );
    }

    return (
        <Container>
            <thead>
                <tr>
                    <th>Pedido</th>
                    <th>Atualização</th>
                    <th>Loja</th>
                    <th>Valor</th>
                    <th>Cliente</th>
                    <th>Ticket Médio</th>
                    <th>Score</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {/*transactions.map(transaction => (
                    <TableRow
                        onClick={() => navigate(`/order/details/${transaction.reference}`)}
                        key={transaction.reference}
                        isExpress={transaction.store.express} >
                        <td>
                            <p>{transaction.reference}</p>
                        </td>
                        <td>
                            <p>{formatDateTimeTag(transaction.orderDate)}</p>
                        </td>
                        <td>
                            <p>{transaction.store.name}</p>
                        </td>
                        <td>
                            <p>{formatValue(transaction.value)}</p>
                        </td>
                        <td>
                            <p>{`${transaction.client.firstName}
                                    ${transaction.client.lastName}`}
                                <br></br>
                                {transaction.client.email}
                            </p>
                        </td>
                        <td>
                            <p>{formatValue(transaction.value)}</p>
                        </td>
                        <td>
                            <p>{transaction.score}</p>
                        </td>
                        <td>
                            <p className="status">{getStatusName(transaction.status.statusId, transaction.store.express)}</p>
                        </td>
                    </TableRow>
                ))*/}
                {homolog()}
            </tbody>
        </Container>
    );
};

export default TransactionsTable;
