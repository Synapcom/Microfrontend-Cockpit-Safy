import React from 'react';
import Div from './style';
import { TransactionsInAnalisysInterface } from './interface';

const TransactionsInAnalisys: React.FC<TransactionsInAnalisysInterface> = ({ transactionsInAnalisys }) => {
    return(
        <Div>
            <p>
                <span></span>
                {`${transactionsInAnalisys} `}
                {`${(transactionsInAnalisys >= 1) ? 'pedidos sendo analisados' : 'pedido sendo analisado'}`}
            </p>
        </Div>
    );
};

export default TransactionsInAnalisys;
