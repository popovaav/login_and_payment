import PropTypes from 'prop-types';
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import styles from '../sass/LoginForm.module.scss';
import InputWithTitle from '../../../components/UI/InputWithTitle/InputWithTitle';
import Button from '../../../components/UI/Button/Button';
import strings from '../../../constants/strings';

const LoginForm = ({
  toForgotPass,
  handleCallbackResponse,
  responseFacebook
}) => (
  <div className={styles.container}>
    <InputWithTitle text={strings.email} placeholder={strings.enterEmail} />
    <InputWithTitle text={strings.password} placeholder={strings.placeholder} />
    <Button title={strings.forgotPass} buttonClass={strings.btnForgotPass} handleClick={toForgotPass} />
    <Button buttonClass={strings.btnGetStarted} title={strings.title} />
    <div className={styles.socialLogin}>
      <GoogleLogin
        onSuccess={(credentialResponse) => handleCallbackResponse(credentialResponse)}
        onError={() => { console.log('Index Failed'); }}
        size="large"
      />
      <FacebookLogin
        appId="322356903409666"
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass={styles.btnFacebook}
      />
    </div>
  </div>
);

LoginForm.defaultProps = {
  toForgotPass: () => {
  },
  handleCallbackResponse: () => {
  },
  responseFacebook: () => {
  }
};

LoginForm.propTypes = {
  toForgotPass: PropTypes.func,
  handleCallbackResponse: PropTypes.func,
  responseFacebook: () => {
  }
};

export default LoginForm;
