import styled from 'styled-components';
import { greyDark } from '../../../global/style/variables';

const Div = styled.div`
    display: flex;
    border: 1.5px solid ${greyDark};
    width: 100%;

    svg {
        margin: 10px;
        color: black;
    }

    input {
        margin-left: 5px;
        padding: 10px 0;
        border: none;
        width: 100%;
    }

    input:focus {
        outline: none;
    }

`;
export default Div;
