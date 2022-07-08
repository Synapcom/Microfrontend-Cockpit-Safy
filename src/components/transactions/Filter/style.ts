import styled from 'styled-components';
import { greenLight, greyLight } from '../../../global/style/variables';
import { FilterStyleInterface } from './interface';

const Container = styled.div<FilterStyleInterface>`
    display: ${props => props.showModalBox ? 'flex' : 'none'};
    width: 100%;
    height: 100%;
    background-color: #00000040;
    z-index: 5;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: row;

    span, div {
        padding: 20px;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    span {
        width: 65%;
    }

    div {
        width: 35%;
        background-color: #fff;
    }

    div > header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-bottom: solid 1px ${greyLight};
    }

    div > header > div {
        width: 50%;
        display: flex;
        flex-direction: row;
    }

    div > header > div > p {
        margin: 0px 5px;
        cursor: pointer;
    }

    div > header > .buttonActions > button {
        margin: 0px 10px;
        width: 300px;
        cursor: pointer;
        padding: 5px;
        border-radius: 5px;
        border: solid 1px ${greyLight};
    }

    div > header > .buttonActions > .btnSave {
        background-color: ${greenLight};
        border: none;
        color: #fff;
    }

    div > section {
        display: flex;
        flex-direction: column;
    }

    div > section > label {
        font-weight: bold;
    }

    div > section > input, div > section > select {
        margin-bottom: 20px;
        margin-top: 5px;
        padding: 5px;
        border: solid 1px ${greyLight};
        border-radius: 5px;
        cursor: pointer;
    }
`;

export default Container;
