import styled from 'styled-components';
import { greenMoss, grey,  redDark } from '../../../global/style/variables';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    button {
        margin: 0px 10px;
        padding: 10px;
        cursor: pointer;
        border: solid 1px ${grey};
        border-radius: 5px;
    }

    .btnSchedule {
        background-color: #fff;
    }

    .btnReproved {
        background-color: ${redDark};
        color: #fff;
    }

    .btnApproved {
        background-color: ${greenMoss};
        color: #fff;
    }
`;

export default Container;
