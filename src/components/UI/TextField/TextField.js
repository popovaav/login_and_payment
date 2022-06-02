import React from 'react';
import PropTypes from 'prop-types';
import styles from './sass/TextField.module.scss';

const TextField = ({ text, textClass }) => (
  <span className={`${styles.text} ${textClass ? styles[textClass] : ''}`}>
    {text}
  </span>
);

TextField.defaultProps = {
  textClass: '',
  text: ''
};

TextField.propTypes = {
  text: PropTypes.string,
  textClass: PropTypes.string
};

export default TextField;
