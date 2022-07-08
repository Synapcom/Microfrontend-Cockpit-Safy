import styled from 'styled-components';
import { greyLighter, grey, green, greenDark } from '../../../global/style/variables';
import { AsideMenuStyleInterface } from './interface';

const Aside = styled.aside<AsideMenuStyleInterface>`
    border-right: solid 2px ${greyLighter};

    h1 {
        font-size: 16px;
        margin: 15px 0px;
        color: ${grey};
        font-weight: bold;
    }

    ul {
        list-style-type: none;
    }

    ul > li {
        padding: 15px 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        transition: 0.15s;
        font-weight: 700;
        font-size: 16px;
    }

    ul > li:hover {
        transition: 0.15s;
        background-color: #f5f5f5;
    }

    ul > li > div {
        display:flex;
        align-items: center;
        justify-content: center;
        background-color: ${greyLighter};
        padding: 5px;
        margin-right: 6px;
        border-radius: 30px;
        color: ${grey}
    }

    .option${props => props.tab} {
        border-right: solid ${greenDark} 2px;
        color: ${greenDark};
    }

    .option${props => props.tab} > div {
        background-color: ${green};
        color: ${greenDark};
    }
`;

export default Aside;
