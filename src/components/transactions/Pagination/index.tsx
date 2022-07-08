import React from 'react';
import Container from './style';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { PaginationInterface } from './interface';

const Pagination: React.FC<PaginationInterface> = ({ itemsPerPage, pageQuantity, setItemsPerPage, currentPage, setCurrentPage }) => {
    const renderPaginationButtons = (): React.ReactNode => {
        const helper = [];

        for (let index = 1; index <= pageQuantity; index++) {
            helper.push(
                <button
                    onClick={() => setCurrentPage(index)}
                    className={`page${index}`}
                    key={`page${index}`} >
                    {index}
                </button>
            );
        }

        return helper.map(buttonTag => buttonTag);
    };

    const renderLimitButtons = () => {
        const limitOptions = [];

        for (let i = 1; i < 11; i++) {
            limitOptions.push(
                <option value={i} key={`optionLimit - ${i}`}>{i}</option>
            );
        }

        return limitOptions;
    }

    return (
        <Container currentPage={currentPage}>
            <div>
                <label>Linhas por páginas </label>
                <select
                    value={itemsPerPage}
                    onChange={event => setItemsPerPage(Number(event.target.value))} >
                        {renderLimitButtons()}
                </select>
            </div>
            <div>
                {
                    currentPage <= 1 ?
                    <></> :
                    <button onClick={() => setCurrentPage(currentPage - 1)}>
                        <HiOutlineArrowNarrowLeft />
                    </button>
                }
                {renderPaginationButtons()}
                {
                    currentPage === pageQuantity ?
                    <></> :
                    <button onClick={() => setCurrentPage(currentPage + 1)}>
                        <HiOutlineArrowNarrowRight />
                    </button>
                }
            </div>
        </Container>
    );
};

export default Pagination;
