import React from 'react';
import PropTypes from 'prop-types';
import styles from './sass/Input.module.scss';

const Input = ({
  inputClass, placeholder, onChange, type, value, id, disabled
}) => (
  <input
    className={`${styles.input} ${inputClass ? styles[inputClass] : ''}`}
    placeholder={placeholder}
    onChange={onChange}
    type={type}
    value={value}
    id={id}
    disabled={disabled}
  />
);

Input.defaultProps = {
  inputClass: '',
  placeholder: '',
  onChange: () => {},
  type: '',
  value: '',
  id: '',
  disabled: false
};

Input.propTypes = {
  placeholder: PropTypes.string,
  inputClass: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool
};

export default Input;
