import styled from 'styled-components';
import { greyLight, greenLighter, greenDark, red, redDark, white, blue, greenMoss, greyLighter, grey, lightBlue } from '../../../global/style/variables';

const Container = styled.main`
    display: flex;
    flex-direction: column;
    margin: 5px;
    width: 80%;
    padding: 35px;

    h2 {
        font-weight: 600;
    }

    h2, b {
        font-size: 12pt;
    }

    b {
        font-weight: bold;
        color: ${greyLight};
    }

    .topInformations {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    .topInformations > h1 {
        font-size: 14pt;
    }

    .topInformations > div > select {
        border: none;
        font-weight: bold;
    }

    .orderInformation > li > figure > img {
        margin-right: 15px;
    }

    .topInformations > .ticketsInformations > span {
        margin: 0px 15px;
    }

    .topInformations > .ticketsInformations > span > small {
        color: ${greyLight};
    }
    .topInformations > .ticketsInformations > span > p {
        font-weight: bold;
    }

    .cardList {
        margin-top: 50px;
    }

    .card {
        border-bottom: 2px solid ${greyLight};
        list-style-type: none;
    }

    .cardId {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .cardId > figure {
        margin-right: 10px;
        background-color: ${greyLighter};
        border-radius: 30px;
        padding: 4px 6px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cardId > div {
        display: flex;
    }

    .cardId > div > h2 {
        margin-right: 15px;
    }

    .cardInfo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .cardInfo > div {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
    }

    .cardInfo > div > h2 {
        margin: 3px 0px;
    }

    .cardInfo > div > .items > figure {
        display: flex;
        flex-direction: row;
        margin: 15px 0px;
    }

    .cardInfo > div > .items > figure > img {
        border: solid 1px ${grey};
        padding: 10px;
    }

    .cardInfo > div > .items > figure > figcaption {
        margin-left: 15px;
        color: #000;
        font-weight: bold;
    }

    .orderStatusApproved {
        background-color: ${greenLighter};
        color: ${greenMoss};
        padding: 5px;
        border-radius: 30px;
        font-weight: bold;
        border: solid 3px ${greenLighter};
        text-transform: uppercase;
        font-size: 10pt;
        text-align: center;
    }

    .orderStatusReproved {
        background-color: ${red};
        color: ${redDark};
        padding: 7px;
        border-radius: 5px;
        font-weight: bold;
        text-align: center;
    }

    .orderStatusWaiting {
        background-color: ${lightBlue};
        color: ${blue};
        padding: 5px;
        border-radius: 30px;
        font-weight: bold;
        border: solid 3px ${blue};
        text-transform: uppercase;
        font-size: 10pt;
        text-align: center;
    }

    .alerts {
        margin: 10px 0px;
        background-color: ${white};
        border-left: 5px solid ${blue};
        padding: 10px;
    }

    .alerts > h1 {
        margin-bottom: 15px;
    }

    .alerts > ul {
        list-style-type: none;
        display: flex;
    }

    .alerts > ul > li {
        margin-right: 10px;
    }

    .alertGreenStatus {
        color: ${greenDark};
        font-weight: bold;
    }

    .icon {
        margin-right: 15px;
    }
`;

export default Container;
