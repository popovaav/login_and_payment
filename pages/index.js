import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import ProfileUser from '../src/components/ProfileUser/ProfileUser';
import Payment from '../src/components/Payment/Payment';
import Layout from '../src/layout/Layout';
import strings from '../src/constants/strings';
import LoginView from '../src/pages/Login/LoginView';

const App = () => {
  const [user, setUser] = useState({});
  const [isAuthFacebook, setIsAuthFacebook] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({ paid: false });
  const env = 'sandbox';
  const currency = 'USD';
  const total = 1;
  const client = {
    sandbox: 'AfQklEZggo_oiqWT5BcCUzlMZzXClpM57fBxM_KIgVlOElA9Ijk6YNTHEWBcTk6fsb18nRksgh-8ZR0c',
    production: 'YOUR-PRODUCTION-APP-ID',
  };

  const handleCallbackResponse = (response) => {
    const userObject = jwtDecode(response.credential);
    setIsAuthFacebook(false);
    setUser(userObject);
  };

  useEffect(() => {
    const { google } = window;
    google.accounts.id.initialize({
      client_id: '742969775702-s7cssdaq89t8g1p93kneegveb343tbc1.apps.googleusercontent.com',
      callback: handleCallbackResponse
    });
  }, []);

  const onLogoutSuccess = () => {
    setUser({});
  };

  const responseFacebook = (response) => {
    setUser(response);
    setIsAuthFacebook(true);
  };

  const onSuccessPayment = (payment) => {
    console.log('The payment was succeeded!', payment);
    setPaymentDetails(payment);
  };

  const onCancelPayment = (data) => {
    console.log('The payment was cancelled!', data);
  };

  const onErrorPayment = (err) => {
    console.log('Error!', err);
  };

  return (
    Object.keys(user).length !== 0
      ? (
        <Layout>
          <ProfileUser
            user={user}
            onLogoutSuccess={onLogoutSuccess}
            isAuthFacebook={isAuthFacebook}
          />
          <Payment
            env={env}
            currency={currency}
            client={client}
            total={total}
            onCancel={onCancelPayment}
            onError={onErrorPayment}
            onSuccess={onSuccessPayment}
            text={strings.totalPayment}
            payment={paymentDetails}
            textSuccess={strings.paymentSuccess}
          />
        </Layout>
      )
      : (
        <LoginView
          handleCallbackResponse={handleCallbackResponse}
          responseFacebook={responseFacebook}
        />
      )
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'login'])
  }
});

export default App;
