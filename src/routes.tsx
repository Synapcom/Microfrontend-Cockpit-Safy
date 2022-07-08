import React from 'react';
import { BrowserRouter, Routes as SwitchRoutes, Route } from 'react-router-dom';
import Transactions from './views/Transactions';
import TransactionDetails from './views/TransactionDetails';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <SwitchRoutes>
                <Route path='/safy' element={<Transactions />} />
                <Route path='/safy/order/details/:orderNumber' element={<TransactionDetails />} />
            </SwitchRoutes>
        </BrowserRouter>
    );
};

export default Routes;
