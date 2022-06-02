import PropTypes from 'prop-types';
import styles from './sass/LinkWithText.module.scss';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';

const LinkWithText = ({
  text, title, textClass, buttonClass, handleClick
}) => (
  <div className={styles.container}>
    <TextField text={text} textClass={textClass} />
    <Button title={title} buttonClass={buttonClass} handleClick={handleClick} />
  </div>
);

LinkWithText.defaultProps = {
  text: '',
  title: '',
  textClass: '',
  buttonClass: '',
  handleClick: () => {}
};

LinkWithText.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  textClass: PropTypes.string,
  buttonClass: PropTypes.string,
  handleClick: PropTypes.func
};

export default LinkWithText;
