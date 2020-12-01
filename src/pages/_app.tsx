import { AppProps } from 'next/app';
import GlobalStyle from '../styles/Globals';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default MyApp;
