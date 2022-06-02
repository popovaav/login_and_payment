import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import LoginView from '../src/pages/Login/LoginView';
import ProfileUser from '../src/components/ProfileUser/ProfileUser';

const App = () => {
  const [user, setUser] = useState({});
  const [isAuthFacebook, setIsAuthFacebook] = useState(false);

  const handleCallbackResponse = (response) => {
    const userObject = jwtDecode(response.credential);
    setUser(userObject);
    setIsAuthFacebook(false);
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

  console.log(user, 'kdkdk');

  return (
    Object.keys(user).length !== 0
      ? (
        <ProfileUser
          user={user}
          clientId="742969775702-s7cssdaq89t8g1p93kneegveb343tbc1.apps.googleusercontent.com"
          onLogoutSuccess={onLogoutSuccess}
          responseFacebook={responseFacebook}
          isAuthFacebook={isAuthFacebook}
        />
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
