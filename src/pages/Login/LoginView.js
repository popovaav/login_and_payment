import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import Layout from '../../layout/Layout';
import LoginForm from './components/LoginForm';
import google from '../../../public/google.svg';
import TitleBlock from '../../components/UI/TitleBlock/TitleBlock';

const LoginView = ({ toForgotPass, handleCallbackResponse, responseFacebook }) => {
  const { t } = useTranslation('login');
  return (
    <Layout>
      <TitleBlock
        title={t('loginIn')}
        text={t('description')}
      />
      <LoginForm
        email={t('email')}
        password={t('password')}
        btnGetStarted={t('btnGetStarted')}
        title={t('signIn')}
        src={google}
        titleSignIn={t('signInWith')}
        textPassLength={t('textPassLength')}
        enterEmail={t('enterEmail')}
        enterName={t('enterName')}
        forgotPass={t('forgotPass')}
        btnForgotPass={t('btnForgotPass')}
        toForgotPass={toForgotPass}
        handleCallbackResponse={handleCallbackResponse}
        responseFacebook={responseFacebook}
      />
    </Layout>
  );
};

LoginView.defaultProps = {
  toForgotPass: () => {},
  handleCallbackResponse: () => {},
  responseFacebook: () => {}
};

LoginView.propTypes = {
  toForgotPass: PropTypes.func,
  handleCallbackResponse: PropTypes.func,
  responseFacebook: PropTypes.func
};

export default LoginView;
