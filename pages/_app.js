import App from 'next/app';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { appWithTranslation } from 'next-i18next';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useStore } from '../src/store/store';
import nextI18NextConfig from '../next-i18next.config';
import '../src/pages/App/sass/globals.scss';

function MainApp({
  Component,
  pageProps
}) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <GoogleOAuthProvider
      clientId="742969775702-s7cssdaq89t8g1p93kneegveb343tbc1.apps.googleusercontent.com"
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </GoogleOAuthProvider>
  );
}

MainApp.getStaticProps = async (MainAppContext) => (
  { ...await App.getStaticProps(MainAppContext) }
);

MainApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({
    initialReduxState: PropTypes.shape({})
  }).isRequired
};

export default appWithTranslation(MainApp, nextI18NextConfig);
