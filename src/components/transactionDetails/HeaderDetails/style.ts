import styled from 'styled-components';
import { greyLighter, grey } from '../../../global/style/variables';

const Header = styled.header`

    border-bottom: solid 1px ${greyLighter};
    padding: 30px 0px;

    ul {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        list-style-type: none;
    }


    ul > li {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 30px;
    }

    ul > li > div:nth-child(1) {
        display:flex;
        align-items: center;
        justify-content: center;
        background-color: ${greyLighter};
        padding: 8px;
        margin-right: 6px;
        border-radius: 30px;
    }

    ul > li > div:nth-child(2) {
        display: flex;
        flex-direction: column;
    }

    ul > li > div > small {
        color: ${grey}
    }

    ul > .orderNumberStyle > span {
        font-weight: bold;
        margin-left: 5px;
    }

    strong {
        font-size: 10pt;
    }

`;

export default Header;
