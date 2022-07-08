import Routes from './routes';
import Wrapper from './components/common/Wrapper';
import GlobalStyle from './global/style/global';

const Root = () => (
    <Wrapper>
        <GlobalStyle />
        <Routes />
    </Wrapper>
);


export default Root;
