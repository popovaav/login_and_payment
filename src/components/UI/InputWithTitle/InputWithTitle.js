import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../TextField/TextField';
import Input from '../Input/Input';
import styles from './sass/InputWithTitle.module.scss';

const InputWithTitle = ({
  text, textClass, inputClass, type, value, onChange, id, placeholder, disabled
}) => (
  <div className={styles.container}>
    <TextField text={text} textClass={textClass} />
    <Input
      inputClass={inputClass}
      type={type}
      value={value}
      onChange={onChange}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
    />
  </div>
);

InputWithTitle.defaultProps = {
  inputClass: '',
  textClass: '',
  type: '',
  value: '',
  onChange: () => {},
  id: '',
  placeholder: '',
  disabled: false,
  text: ''
};

InputWithTitle.propTypes = {
  text: PropTypes.string,
  inputClass: PropTypes.string,
  textClass: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

export default InputWithTitle;
