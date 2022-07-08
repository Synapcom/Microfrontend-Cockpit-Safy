import React from 'react';
import SearchTransactionInterface from './interface';
import Div from './style';
import { GoSearch } from 'react-icons/go';

const TransactionsSearch: React.FC<SearchTransactionInterface> = ({ transactionSearch, setTransactionSearch, setCurrentPage }) => {
    const timeoutRef: any = React.useRef();

    function handleChange(search: string) {
        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setTransactionSearch(search);
            setCurrentPage(1);
        }, 0);
    }

    return (
        <Div>
            <GoSearch className='searchIcon' />
            <input
                type='text'
                placeholder='Busca'
                value={transactionSearch}
                onChange={e => handleChange(e.target.value)} />
        </Div>
    );
};

export default TransactionsSearch;
