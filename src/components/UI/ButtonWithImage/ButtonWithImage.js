import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import TextField from '../TextField/TextField';
import styles from './sass/ButtonWithImage.module.scss';

const ButtonWithImage = ({
  src, alt, text, handleClick, imageClass, textFieldClass, buttonClass
}) => (
  <div className={styles.container}>
    <button
      className={`${styles.button} ${buttonClass ? styles[buttonClass] : ''}`}
      onClick={handleClick}
      type="button"
    >
      <Image src={src} alt={alt} imageClass={imageClass} />
      <TextField text={text} textFieldClass={textFieldClass} />
    </button>
  </div>
);

ButtonWithImage.defaultProps = {
  src: '',
  alt: '',
  text: '',
  imageClass: '',
  textFieldClass: '',
  handleClick: () => {},
  buttonClass: ''
};

ButtonWithImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
  imageClass: PropTypes.string,
  textFieldClass: PropTypes.string,
  handleClick: PropTypes.func,
  buttonClass: PropTypes.string,
};

export default ButtonWithImage;
