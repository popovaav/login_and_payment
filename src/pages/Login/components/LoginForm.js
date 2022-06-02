import PropTypes from 'prop-types';
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import styles from '../sass/LoginForm.module.scss';
import InputWithTitle from '../../../components/UI/InputWithTitle/InputWithTitle';
import Button from '../../../components/UI/Button/Button';

const LoginForm = ({
  email,
  password,
  placeholder,
  btnGetStarted,
  title,
  enterEmail,
  forgotPass,
  btnForgotPass,
  toForgotPass,
  handleCallbackResponse,
  responseFacebook
}) => (
  <div className={styles.container}>
    <InputWithTitle text={email} placeholder={enterEmail} />
    <InputWithTitle text={password} placeholder={placeholder} />
    <Button title={forgotPass} buttonClass={btnForgotPass} handleClick={toForgotPass} />
    <Button buttonClass={btnGetStarted} title={title} />
    <div className={styles.socialLogin}>
      <GoogleLogin
        onSuccess={(credentialResponse) => handleCallbackResponse(credentialResponse)}
        onError={() => { console.log('Index Failed'); }}
        size="large"
      />
      <FacebookLogin
        appId="322356903409666"
        autoLoad
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass={styles.btnFacebook}
      />
    </div>
  </div>
);

LoginForm.defaultProps = {
  email: '',
  password: '',
  placeholder: '',
  btnGetStarted: '',
  title: '',
  // src: '',
  // titleSignIn: '',
  enterEmail: '',
  forgotPass: '',
  btnForgotPass: '',
  toForgotPass: () => {},
  handleCallbackResponse: () => {},
  responseFacebook: () => {}
};

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  placeholder: PropTypes.string,
  btnGetStarted: PropTypes.string,
  title: PropTypes.string,
  // src: PropTypes.string,
  // titleSignIn: PropTypes.string,
  enterEmail: PropTypes.string,
  forgotPass: PropTypes.string,
  btnForgotPass: PropTypes.string,
  toForgotPass: PropTypes.func,
  handleCallbackResponse: PropTypes.func,
  responseFacebook: () => {}
};

export default LoginForm;
