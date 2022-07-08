import styled from 'styled-components';
import { white02, grey, redDark, greenDark, blue } from '../../../global/style/variables';

const Container = styled.aside`
    width: 25%;

    h2 {
        margin-top: 10px;
    }

    article {
        border-radius: 5px;
        padding: 15px 15px;
        background-color: ${white02};
    }

    hr {
        margin: 10px 0px;
        color: ${grey};
    }

    section {
        margin-top: 15px;
    }

    section > h2, section > div > span > h2 {
        font-size: 8pt;
        color: ${grey};
        font-weight: bold;
    }

    section > p, section > div > span > p {
        font-size: 9pt;
        font-weight: bold;
    }

    section > div{
        display: flex;
        margin-top: 15px;
        justify-content: space-between;
        align-items: initial;
    }

    section > div > span:nth-child(2) {
        margin: 0px 10px;
    }

    div > button {
        border: none;
        margin: 5px;
        cursor: pointer;
        padding: 5px;
        text-transform: uppercase;
        font-weight: 500;
        color: #fff;
    }

    div > .btnDisapprove {
        background-color: ${redDark};
    }

    div > .btnApprove {
        background-color: ${greenDark};
    }

    div > .btnSchedule {
        background-color: ${blue};
    }
`;

export default Container;
