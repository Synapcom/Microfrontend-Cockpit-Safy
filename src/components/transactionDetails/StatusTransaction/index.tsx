import React from 'react';
import Status from './style';
import { StatusTransactionInterface } from './interface';
import api from '../../../api/api';
import { TransactionsHistoryInterface } from '../../../global/interface/transactionHistory';
import { CompareStatusId } from '../../../global/utils/status';
import { formatDate } from '../../../global/utils/timeFormat';
import { CgShapeCircle } from 'react-icons/cg';
import datamock from '../../../assets/datamock.json';

const StatusOrder: React.FC<StatusTransactionInterface> = ({ transactionId }) => {
    const [statusHistory, setStatusHistory] = React.useState<TransactionsHistoryInterface[]>([]);

    const getStatusHistory = async () => {
        const transactionFiltred = datamock.transactions.find(transaction => transaction.transactionId === transactionId);

        setStatusHistory(transactionFiltred.history);
    };

    React.useEffect(() => {
        getStatusHistory();
    }, []);

    return (
        <Status>
            <h1>{statusHistory.length} status</h1>
            <ul>
                {statusHistory.map(status => (
                    <li className='step' key={status.createdAt.toString()}>
                        <figure>
                            <CgShapeCircle
                                fontSize={24}
                                className={CompareStatusId(status.status.statusId).className} />
                        </figure>
                        <div>
                            <p>
                                {status.status.statusName}
                            </p>
                            <p>
                                {formatDate(status.createdAt.toString())}
                            </p>
                        </div>
                        <span></span>
                    </li>
                ))}
            </ul>
        </Status>
    );
};

export default StatusOrder;
