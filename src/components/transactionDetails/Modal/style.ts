import styled from 'styled-components';
import { ModalStyleInterface } from './interface';
import { blue, greenDark, redDark } from '../../../global/style/variables';

const Container = styled.div<ModalStyleInterface>`
    padding: 30px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    background-color: #7070709a;
    z-index: 100;
    display: ${props => props.show ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
        background-color: #fff;
        padding: 30px;
        width: 50%;
        height: 60%;
    }

    div > form {
        display: flex;
        flex-direction: column;
    }

    div > h1 {
        font-size: 21px;
        margin-bottom: 15px;
    }

    div > form > select {
        padding: 5px;
    }

    div > form > label {
        font-size: 16px;
        font-weight: bold;
        margin: 15px 0px;
    }

    div > form > textarea {
        resize: none;
        height: 140px;
        padding: 10px;
    }

    div > form > span {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .btnCancel, .btnAccept, .btnReproved {
        cursor: pointer;
        padding: 10px;
        font-weight: bold;
    }

    .btnCancel {
        background-color: #fff;
        border: solid 1px ${blue};
        color: ${blue};
    }

    .btnAccept {
        background-color: ${greenDark};
        border: solid 1px ${greenDark};
        color: #fff;
    }

    .btnReproved {
        color: #fff;
        background-color: ${redDark};
        border: solid 1px ${redDark};
    }
`;

export default Container;
