import React from 'react';
import PropTypes from 'prop-types';
import styles from './sass/Button.module.scss';

const Button = ({
  title, buttonClass, handleClick, id 
}) => (
  <button
    type="button"
    onClick={(e) => handleClick(e)}
    className={`${styles.button} ${buttonClass ? styles[buttonClass] : ''}`}
    id={id}
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string,
  buttonClass: PropTypes.string,
  handleClick: PropTypes.func,
  id: PropTypes.string,
};

Button.defaultProps = {
  id: 'button',
  buttonClass: '',
  handleClick: () => {},
  title: ''
};

export default Button;
