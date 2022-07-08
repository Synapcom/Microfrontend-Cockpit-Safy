import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    border-radius: 5px;

    .headerInformation, .content {
        padding: 15px;
    }

    .content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-radius: 10px;
    }
`;

export const Loading = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .loading {
        color: line;
    }
`;
