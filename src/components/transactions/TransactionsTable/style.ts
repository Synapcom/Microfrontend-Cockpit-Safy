import styled from 'styled-components';
import { TransactionStyleInterface } from './interface';
import { green, greenDark, grey, greyLight, greyLighter } from '../../../global/style/variables';

export const Container = styled.table`
    width: 100%;
    text-align: left;
    border-collapse: separate;
    border-spacing: 0 15px;

    thead tr th {
        padding-right: 15px;
        font-weight: normal;
        color: ${greyLight};
    }

    tbody tr td {
        padding: 10px 0;
        border-bottom: 1px solid ${greyLighter};
    }

    .onlyTime {
        margin-left: 5px;
        color: ${grey};
    }
`;

export const TableRow = styled.tr<TransactionStyleInterface>`
    cursor: pointer;
    padding: 450px;
    border-radius: 5px;
    transition: 0.25s;

    :hover{
        background-color: ${greyLighter};
        transition: 0.25s;
    }

    .status {
        margin: 0 10px;
        padding: 8px;
        text-align: center;
        background-color: ${green};
        color: ${greenDark};
        border-radius: 180px;
    }

    .info-icon {
        padding: 5px;
        align-items: center;
        justify-content: center;
    }
`;
