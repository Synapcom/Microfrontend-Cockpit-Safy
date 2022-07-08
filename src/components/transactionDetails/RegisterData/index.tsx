import React from 'react';
import { RegisterDataInterface } from './interface';
import Container from './style';

const RegisterData: React.FC<RegisterDataInterface> = ({ client = null }) => {
    return (
        <Container>
            <h1>Dados do cliente</h1>

            <table>
                <th className='title'>
                    <td>Nome</td>
                    <td>CPF</td>
                </th>
                <th className='datas'>
                    <td>Gustavo Melo</td>
                    <td>000.000.000-11</td>
                </th>
                <th className='title'>
                    <td>Email</td>
                    <td>Telefone</td>
                </th>
                <th className='datas'>
                    <td>gustavo@mail.com</td>
                    <td>11 99999-9999</td>
                </th>
            </table>
        </Container>
    );
};

export default RegisterData;
