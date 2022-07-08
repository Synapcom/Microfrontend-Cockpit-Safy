import React from 'react';
import Header from './style';
import { AiOutlineTag, AiFillStar } from 'react-icons/ai';
import { FaDollarSign, FaRegCalendarAlt, FaShoppingCart } from 'react-icons/fa';
import { grey } from '../../../global/style/variables';
import HeaderDetailsInterface from './interface';
import { formatDateTime } from '../../../global/utils/timeFormat';
import { formatValue } from '../../../global/utils/valueFormat';

const HeaderDetails: React.FC<HeaderDetailsInterface> = ({ transaction = null }) => {
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');

    React.useEffect(() => {
        const [dateFormated, timeFormated] = formatDateTime(transaction.orderDate);
        setDate(dateFormated);
        setTime(timeFormated);
    }, []);

    return (
        <Header>
            <ul>
                <li>
                    <div>
                        <AiOutlineTag color={grey} />
                    </div>
                    <div>
                        <small>Marca</small>
                        <strong>Samsung</strong>
                    </div>
                </li>

                <li>
                    <div>
                        <FaDollarSign color={grey}/>
                    </div>
                    <div>
                        <small>Total</small>
                        <strong>120.00 R$</strong>
                    </div>
                </li>

                <li>
                    <div>
                        <FaRegCalendarAlt color={grey} />
                    </div>
                    <div>
                        <small>Data</small>
                        <strong>05/11/2001</strong>
                    </div>
                </li>

                <li>
                    <div>
                        <AiFillStar color={grey} />
                    </div>
                    <div>
                        <small>Score</small>
                        <strong>320</strong>
                    </div>
                </li>

                <li>
                    <div>
                        <FaShoppingCart color={grey} />
                    </div>
                    <div>
                        <small>Qtde</small>
                        <strong>00</strong>
                    </div>
                </li>
            </ul>
        </Header>
    );
};

export default HeaderDetails;
