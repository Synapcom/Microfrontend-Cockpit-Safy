import styled from 'styled-components';
import { blue, redDark, greenDark, greyLighter } from '../../../global/style/variables';

const Status = styled.main`
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 30px;

    h1 {
        margin-bottom: 30px;
    }

    .step {
        display: flex;
        align-items: flex-start;
        margin: 15px 0px;
    }

    .step > div {
        display: flex;
        flex-direction: column;
        margin-left: 15px;
    }

    .step > div > p {
        margin: 5px 0px;
    }

    .step > span {
        position: relative;
        left: 13.1px;
        top: 11px;
        height: 110%;
        border-left: solid ${greyLighter} 2px;
    }

    .orderStatusApproved {
        color: ${greenDark}
    }

    .orderStatusDenied {
        color: ${redDark}
    }

    .orderStatusWaiting {
        color: ${blue}
    }

`;

export default Status;
