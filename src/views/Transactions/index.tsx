import React from 'react';
import FilterButton from '../../components/common/FilterButton';
import TransactionsFilters from '../../components/transactions/TransactionsFilters';
import TransactionsTab from '../../components/transactions/TransactionsTab';
import TransactionsTable from '../../components/transactions/TransactionsTable';
import TransactionsSearch from '../../components/transactions/TransactionsSearch';
import api from '../../components/../api/api';
import Container from './style';
import Filter from '../../components/transactions/Filter';
import Pagination from '../../components/transactions/Pagination';
import Main from '../../templates/Main';
import datamock from '../../assets/datamock.json';

const Transactions: React.FC = () => {

    const [ idStore, setIdStore ] = React.useState(0);

    const [ transactions, setTransactions ] = React.useState([]);

    const [ transactionSearch, setTransactionSearch ] = React.useState('');

    const [ tabIndex, setTabIndex ] = React.useState(1);

    const [ tabStatus, setTabStatus ] = React.useState(0);

    const [ showFilterModal, setShowFilterModal ] = React.useState(false);

    const [ dateStoreFilter, setDateStoreFilter ] = React.useState<Date>(null);

    const [ itemsPerPage, setItemsPerPage ] = React.useState(10);

    const [ currentPage, setCurrentPage ] = React.useState(1);

    const [ totalPages, setTotalPages ] = React.useState(1);

    const [ express, setExpress ] = React.useState<boolean>(false);

     const getTransactions = async() => {
        const httpConfig = {
            params: {
                'idStatus': tabStatus ? tabStatus : '',
                'idStore': idStore ? idStore : '',
                'search': transactionSearch ? transactionSearch : '',
                'date': dateStoreFilter ? dateStoreFilter : '',
                'page': currentPage ? currentPage : 1,
                'total': totalPages ? totalPages : '',
                'limit': itemsPerPage ? itemsPerPage : 10,
                'express': express ? express : '',
            }
        };

        //const request = await api.get('/transactions', httpConfig);

        //setTransactions(request.data.items);
        //setItemsPerPage(request.data.meta.itemsPerPage);
        //setTotalPages(request.data.meta.totalPages);
        //request.data.meta.currentPage < currentPage ? setCurrentPage(1) : setCurrentPage(request.data.meta.currentPage);

        setTransactions(datamock.transactions);
        setItemsPerPage(10);
        setTotalPages(1);
    }

    React.useEffect(() => {
        getTransactions();
    },
        [
            idStore,
            transactionSearch,
            tabStatus,
            totalPages,
            itemsPerPage,
            currentPage,
            express
        ]
    );

    return (
        <Main
            breadcrumbTextPaths={['Pagina inicial', 'Cockpit']}
            breadcrumbURLPaths={['/', '/']}
            titleText={'Cockpit de pedidos'}
        >
            <Container>
                <Filter
                    setDateStoreFilter={setDateStoreFilter}
                    setIdStore={setIdStore}
                    showFilterModal={showFilterModal}
                    setShowFilterModal={setShowFilterModal} />

                <section>
                    {transactions ? <TransactionsTab
                        setTabIndex={setTabIndex}
                        setTabStatus={setTabStatus}
                        tabIndex={tabIndex}
                        transactions={transactions}
                        setExpress={setExpress}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        setTotalPages={setTotalPages}
                        limit={itemsPerPage} /> : <></>}

                    <TransactionsFilters>
                        <span className='inputSearch'>
                            <TransactionsSearch
                                transactionSearch={transactionSearch}
                                setTransactionSearch={setTransactionSearch}
                                setCurrentPage={setCurrentPage} />
                        </span>
                        <span className='filterButton'>
                            <FilterButton
                                showFilterModal={showFilterModal}
                                setShowFilterModal={setShowFilterModal} />
                        </span>
                    </TransactionsFilters>

                    {/*(transactions.length > 0) ?
                        <TransactionsTable transactions={transactions} /> :
                    <Loading />*/}
                    {<TransactionsTable transactions={transactions} />}
                    <Pagination
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        setItemsPerPage={setItemsPerPage}
                        pageQuantity={totalPages}
                        setCurrentPage={setCurrentPage}
                    />
                </section>
            </Container>
        </Main>
    );
};

export default Transactions;
