import React from 'react';
import Container from './style';

const Wrapper: React.FC = ({ children }) => {
    return(
        <Container>
            {children}
        </Container>
    );
}

export default Wrapper;
