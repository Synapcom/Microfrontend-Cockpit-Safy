import React from 'react';
import Container from './style';
import ClientInformationInterface from './interface';

const ClientInformation: React.FC<ClientInformationInterface> = ({ address, client, shippingAddress }) => {
    return (
        <Container>
            <article>
                <section className='personalClientInformation'>
                    <h2>Cliente</h2>
                    <p>Gustavo Melo</p>

                    <h2>E-mail</h2>
                    <p>gsantos15569@gmail.com</p>

                    <div>
                        <span>
                            <h2>CPF</h2>
                            <p>123.456.789-00</p>
                        </span>
                        <span>
                            <h2>Telefone</h2>
                            <p>11 9999999999</p>
                        </span>
                    </div>
                </section>
                <hr />
                <section>
                    <h2>Endereço de cobrança</h2>
                    <p>Rua das Palmeiras</p>

                    <div>
                        <span>
                            <h2>Numero</h2>
                            <p>507</p>
                        </span>
                        <span>
                            <h2>Complemento</h2>
                            <p>Casa</p>
                        </span>
                    </div>

                    <div>
                        <span>
                            <h2>CEP</h2>
                            <p>000000-01</p>
                        </span>
                        <span>
                            <h2>Bairro</h2>
                            <p>Palmeiras - Barra funda</p>
                        </span>
                    </div>

                    <div>
                        <span>
                            <h2>Cidade</h2>
                            <p>São Paulo</p>
                        </span>
                        <span>
                            <h2>Estado</h2>
                            <p>São Paulo</p>
                        </span>
                    </div>
                </section>
                <section>
                    <h2>Endereço de entrega</h2>
                    <p>Rua das Palmeiras</p>
                    <div>
                        <span>
                            <h2>Numero</h2>
                            <p>507</p>
                        </span>
                        <span>
                            <h2>Complemento</h2>
                            <p>Casa</p>
                        </span>
                    </div>

                    <div>
                        <span>
                            <h2>CEP</h2>
                            <p>0000000-11</p>
                        </span>
                        <span>
                            <h2>Bairro</h2>
                            <p>Palmeiras - Barra funda</p>
                        </span>
                    </div>

                    <div>
                        <span>
                            <h2>Cidade</h2>
                            <p>São Paulo</p>
                        </span>
                        <span>
                            <h2>Estado</h2>
                            <p>São Paulo</p>
                        </span>
                    </div>
                </section>
            </article>
        </Container>
    );
};

export default ClientInformation;
