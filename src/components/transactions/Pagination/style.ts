import styled from 'styled-components';
import { greenDark, greyLight } from '../../../global/style/variables';
import { PaginationStyleInterface } from './interface';

const Container = styled.main<PaginationStyleInterface>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    div > select, div > button {
        padding: 9px;
        border: solid 1px ${greyLight};
        margin: 0px 8px;
        cursor: pointer;
        transition: 0.3s;
    }

    div > button:hover, div > .page${props => props.currentPage} {
        border: solid 1px ${greenDark};
        color: ${greenDark};
    }
`;

export default Container;
