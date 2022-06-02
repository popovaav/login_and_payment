import React from 'react';
import PropTypes from 'prop-types';
import styles from './sass/Image.module.scss';

const Image = ({ src, alt, imageClass }) => (
  <img src={src} alt={alt} className={`${styles.image} ${imageClass ? styles[imageClass] : ''}`} />
);

Image.defaultProps = {
  imageClass: '',
  src: '',
  alt: ''
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  imageClass: PropTypes.string
};

export default Image;
