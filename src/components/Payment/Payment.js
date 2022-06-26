import PaypalExpressBtn from 'react-paypal-express-checkout';
import PropTypes from 'prop-types';
import TextField from '../UI/TextField/TextField';
import styles from './sass/Payment.module.scss';

const Payment = ({
  env, client, currency, total, onError, onSuccess, onCancel, text, payment, textSuccess
}) => (
  <div className={styles.container}>
    {payment.paid ? <TextField text={textSuccess} /> : <TextField text={`${text} ${total} ${currency}`} />}
    <PaypalExpressBtn
      env={env}
      client={client}
      currency={currency}
      total={total}
      onError={onError}
      onSuccess={onSuccess}
      onCancel={onCancel}
    />
  </div>
);

Payment.defaultProps = {
  env: '',
  client: {},
  currency: '',
  total: 1,
  onError: () => {},
  onSuccess: () => {},
  onCancel: () => {},
  text: '',
  payment: {
    paid: false
  },
  textSuccess: ''
};

Payment.propTypes = {
  env: PropTypes.string,
  client: PropTypes.shape({}),
  currency: PropTypes.string,
  total: PropTypes.number,
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
  onCancel: PropTypes.func,
  text: PropTypes.string,
  payment: PropTypes.shape({
    paid: PropTypes.bool
  }),
  textSuccess: PropTypes.string
};

export default Payment;
