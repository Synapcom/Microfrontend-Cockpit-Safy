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
                    <td>{client.documentType}</td>
                </th>
                <th className='datas'>
                    <td>{`${client.firstName} ${client.lastName}`}</td>
                    <td>{client.document}</td>
                </th>
                <th className='title'>
                    <td>Email</td>
                    <td>Telefone</td>
                </th>
                <th className='datas'>
                    <td>{client.email}</td>
                    <td>{client.phone}</td>
                </th>
            </table>
        </Container>
    );
};

export default RegisterData;
