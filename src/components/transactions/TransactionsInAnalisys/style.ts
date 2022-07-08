import styled from 'styled-components';
import { grey, yellow } from '../../../global/style/variables';

const Div = styled.div`
    display: flex;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    margin-top: 15px;

    p {
        color: ${grey}
    }

    span {
        position: relative;
    }

    span::before {
        position: absolute;
        top: -5px;
        bottom: 0;
        left: -15px;
        margin: auto;
        content: '•';
        font-size: 1.5rem;
        color: ${yellow};
    }
`;

export default Div;
