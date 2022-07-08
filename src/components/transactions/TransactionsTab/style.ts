import styled from 'styled-components';
import { greyDark, greyLighter, greenDark, green } from '../../../global/style/variables';
import { TransactionTabStyleInterface } from './interface';

const List = styled.div<TransactionTabStyleInterface>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        margin-top: 30px;
        padding-bottom: 0px;
    }

    li {
        color: ${greyDark};
        font-weight: bold;
        margin: 0px 20px 10px 0px;
        transition: 0.25s;
    }

    li:nth-child(${props => props.tabIndex}) {
        color: ${greenDark};
        border-bottom: solid 2px ${greenDark};
        margin-bottom: 0px;
    }

    li:nth-child(${props => props.tabIndex}) > p > span {
        background-color: ${green};
    }

    li:hover {
        color: ${greenDark};
        transition: 0.25s;
        cursor: pointer;
    }

    li > p, li > p > span {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    li > p > span {
        background-color: ${greyLighter};
        border-radius: 180px;
        padding: 0px 10px;
        margin-right: 5px;
    }
`;

export default List;
