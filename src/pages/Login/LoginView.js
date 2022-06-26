import PropTypes from 'prop-types';
import Layout from '../../layout/Layout';
import LoginForm from './components/LoginForm';
import TitleBlock from '../../components/UI/TitleBlock/TitleBlock';
import strings from '../../constants/strings';

const LoginView = ({ toForgotPass, handleCallbackResponse, responseFacebook }) => {
  return (
    <Layout>
      <TitleBlock
        title={strings.loginIn}
        text={strings.description}
      />
      <LoginForm
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
