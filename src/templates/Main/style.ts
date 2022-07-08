import styled from 'styled-components';
import { greyLighter } from '../../global/style/variables';

const Capsule = styled.span`
    display: flex;
    flex-direction: row;
    min-height: 100vh;

    .main-wrapper {
        padding: 0px 20px;
        width: 100%;
        background-color: ${greyLighter};
    }

    .main-wrapper > header {
        padding: 0px 5px;
    }

    .main-wrapper > .content {
        background-color: #fff;
    }

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .icon {
        cursor: pointer;
    }
`;

export default Capsule;
