import React from 'react';
import Container from './styled';

const Loading: React.FC = () => (
    <Container>
        <div className='spinner'></div>
        <h1>
            Carregando novas transações,
            enquanto isso,
            faça uma pausa e pegue um café
        </h1>
    </Container>
);

export default Loading;
