import React from 'react';
import Container from './style';
import FilterButtonInterface from './interface';
import { BiFilterAlt } from 'react-icons/bi';

const FilterButton: React.FC<FilterButtonInterface> = ({ showFilterModal, setShowFilterModal }) => {

    return (
        <Container>
            <button onClick={() => setShowFilterModal(!showFilterModal)}>
                <BiFilterAlt /> Filtro
            </button>
        </Container>
    );

};

export default FilterButton;
