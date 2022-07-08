import React from 'react';
import Aside from './style';
import { FaStore } from 'react-icons/fa';
import { AiOutlineHistory, AiOutlineShoppingCart, AiOutlineCheckCircle, AiOutlineIdcard } from 'react-icons/ai';
import { AsideMenuInterface } from './interface';

const AsideMenu: React.FC<AsideMenuInterface> = ({ tab, setTab }) => {
    return (
        <Aside tab={tab}>
            <h1>Pedidos</h1>
            <ul>
                <li className="option0" onClick={() => setTab(0)}>
                    <div>
                        <AiOutlineHistory />
                    </div>
                    Historico
                </li>
                <li className="option1" onClick={() => setTab(1)}>
                    <div><AiOutlineShoppingCart /></div>
                    Todos os Pedidos
                </li>
                <li className="option2" onClick={() => setTab(2)}>
                    <div>
                        <AiOutlineCheckCircle />
                        </div>
                    Status
                </li>
            </ul>

            <h1>Dados</h1>
            <ul>
                <li className="option3" onClick={() => setTab(3)}>
                    <div>
                        <AiOutlineIdcard />
                    </div>
                    Dados cadastrais
                </li>
                <li className="option4" onClick={() => setTab(4)}>
                    <div>
                        <FaStore />
                    </div>
                    Política da loja
                </li>
            </ul>
        </Aside>
    );
};

export default AsideMenu;
