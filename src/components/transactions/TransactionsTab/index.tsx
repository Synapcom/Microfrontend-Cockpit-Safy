import React from 'react';
import List from './style';
import { countStatusInterface, TransactionTabInterface } from "./interface";
import TransactionsInAnalisys from '../TransactionsInAnalisys';
import api from '../../../api/api';

const TransactionsTab: React.FC<TransactionTabInterface> = ({setTabIndex, setTabStatus, tabIndex, transactions, setExpress, setTotalPages, currentPage, setCurrentPage, limit}) => {

    const [ countTransactions, setCountTransactions ] = React.useState(0);
    const [ countAnalisy, setCountAnalisy ] = React.useState(0);
    const [ countQueue, setCountQueue ] = React.useState(0);
    const [ countScheduled, setCountScheduled ] = React.useState(0);
    const [ countExpressQueue, setCountExpressQueue ] = React.useState(0);

    const handleChangeTab = (index: number, status: number, express = false) => {
        setTabStatus(status);
        setTabIndex(index);
        setExpress(express);
    };

    const getTabCounter = async () => {
        const response = await api.get<countStatusInterface>('/status/counter');
        const { express, inAnalisys, queue, scheduled, total } = response.data;

        const totalPages = Math.ceil(total / limit);

        // if (currentPage < totalPages) setCurrentPage(0);

        setTotalPages(totalPages);
        setCountTransactions(total);
        setCountQueue(queue);
        setCountAnalisy(inAnalisys);
        setCountScheduled(scheduled);
        setCountExpressQueue(express);
    };

    React.useEffect(() => {
        getTabCounter();
    }, [transactions]);

    return (
        <List tabIndex={tabIndex}>
            <ul>
                <li onClick={() => handleChangeTab(1, 0)}>
                    <p>
                        <span> {countTransactions} </span>
                        Todos os pedidos
                    </p>
                </li>
                <li onClick={() => handleChangeTab(2, 6)}>
                    <p>
                        <span> {countQueue} </span>
                        Na fila
                    </p>
                </li>
                <li onClick={() => handleChangeTab(3, 0, true)}>
                    <p>
                        <span> {countExpressQueue} </span>
                        Fila expressa
                    </p>
                </li>
                <li onClick={() => handleChangeTab(4, 8)}>
                    <p>
                        <span> {countScheduled} </span>
                        Agendado
                    </p>
                </li>
            </ul>

            <TransactionsInAnalisys
                transactionsInAnalisys={countAnalisy} />
        </List>
    );
};

export default TransactionsTab;
