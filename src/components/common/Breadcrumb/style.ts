import styled from 'styled-components';
import { grey, greyDark, greenDark } from '../../../global/style/variables';

const PathStyle = styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px 0px ;

    div > .link {
        color: ${greyDark};
        transition: 0.25s;
        text-transform: capitalize;
    }

    div > .link:hover{
        color: ${greenDark};
       text-decoration: underline;
    }

    div > span {
        color: ${grey};
        padding: 10px;
    }
`;

export default PathStyle;
