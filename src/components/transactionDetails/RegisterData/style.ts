import styled from 'styled-components';
import { greyLight, greyLighter } from '../../../global/style/variables';

const Container = styled.main`
    width: 80%;
    margin: 30px;

    h1 {
        font-size: 14pt;
        margin-bottom: 30px;
    }

    table {
        width: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        border: solid 1px ${greyLight};
        font-size: 12pt;
    }

    th {
        border-bottom: solid 1px ${greyLight};
    }

    th, td {
        width: 100%;
        justify-content: space-between;
        display: flex;
        align-items: center;
    }

    td {
        padding: 30px;
        border-right: 1px solid ${greyLight};
    }

    td:last-child {
        border-right: 0px;
    }

    .title {
        background-color: ${greyLighter};
    }
`;

export default Container;
