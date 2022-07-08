import { css } from 'styled-components';
import RobotoWoff from '../../assets/fonts/Roboto/roboto-v29-latin-regular.woff';
import RobotoWoff2 from '../../assets/fonts/Roboto/roboto-v29-latin-regular.woff2';

const font = css`
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-display: block;
        src: url(${RobotoWoff2}) format('woff2');
    }
`;

export default font;
