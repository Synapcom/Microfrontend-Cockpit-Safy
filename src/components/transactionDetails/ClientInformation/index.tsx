import React from 'react';
import Container from './style';
import ClientInformationInterface from './interface';

const ClientInformation: React.FC<ClientInformationInterface> = ({ address, client, paymentAddress}) => {
    return (
        <Container>
            <article>
                <section className='personalClientInformation'>
                    <h2>Cliente</h2>
                    <p>{`${client.firstName} ${client.lastName}`}</p>

                    <h2>E-mail</h2>
                    <p>{client.email}</p>

                    <div>
                        <span>
                            <h2>{client.documentType}</h2>
                            <p>{client.document}</p>
                        </span>
                        <span>
                            <h2>Telefone</h2>
                            <p>{client.phone}</p>
                        </span>
                    </div>
                </section>
                <hr />
                <section>
                    <h2>Endereço de cobrança</h2>
                    <p>{paymentAddress.street}</p>

                    <div>
                        <span>
                            <h2>Numero</h2>
                            <p>{paymentAddress.number}</p>
                        </span>
                        <span>
                            <h2>Complemento</h2>
                            <p>{paymentAddress.complement}</p>
                        </span>
                    </div>

                    <div>
                        <span>
                            <h2>CEP</h2>
                            <p>{paymentAddress.postalCode}</p>
                        </span>
                        <span>
                            <h2>Bairro</h2>
                            <p>{paymentAddress.neighborhood}</p>
                        </span>
                    </div>

                    <div>
                        <span>
                            <h2>Cidade</h2>
                            <p>{paymentAddress.city}</p>
                        </span>
                        <span>
                            <h2>Estado</h2>
                            <p>{paymentAddress.state}</p>
                        </span>
                    </div>
                </section>
                <section>
                    <h2>Endereço de entrega</h2>
                    <p>{address.street}</p>

                    <div>
                        <span>
                            <h2>Numero</h2>
                            <p>{address.number}</p>
                        </span>
                        <span>
                            <h2>Complemento</h2>
                            <p>{address.complement}</p>
                        </span>
                    </div>

                    <div>
                        <span>
                            <h2>CEP</h2>
                            <p>{address.postalCode}</p>
                        </span>
                        <span>
                            <h2>Bairro</h2>
                            <p>{address.neighborhood}</p>
                        </span>
                    </div>

                    <div>
                        <span>
                            <h2>Cidade</h2>
                            <p>{address.city}</p>
                        </span>
                        <span>
                            <h2>Estado</h2>
                            <p>{address.state}</p>
                        </span>
                    </div>
                </section>
            </article>
        </Container>
    );
};

export default ClientInformation;
