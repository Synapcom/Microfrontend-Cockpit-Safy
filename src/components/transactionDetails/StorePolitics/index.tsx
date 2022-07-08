import React from 'react';
import Container from './style';
import { StorePoliticsInterface } from './interface';

const StorePolitics: React.FC<StorePoliticsInterface> = ({ politics }) => {
    return (
        <Container>
            <h1>Observações</h1>
            <p>
                {politics ? politics : 'Nenhuma politica foi encontrada nessa loja '}
            </p>
        </Container>
    );
};

export default StorePolitics;
