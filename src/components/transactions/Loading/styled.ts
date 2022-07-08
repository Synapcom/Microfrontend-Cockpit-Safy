import styled from "styled-components";
import { greenDark } from '../../../global/style/variables';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .spinner {
        -webkit-animation: spin 3s linear infinite;
        animation: spin 3s linear infinite;
        border: 16px solid #f3f3f3;
        border-radius: 50%;
        border-top: 16px solid ${greenDark};
        border-bottom: 16px solid ${greenDark};
        width: 200px;
        height: 200px;
        margin: 2rem 0;

    }

    h1 {
        font-weight: bold;
        margin-bottom: 15px;
    }
`;

export default Container;
