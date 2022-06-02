import React from 'react';
import PropTypes from 'prop-types';
import styles from './sass/Title.module.scss';

const Title = ({ title, textClass }) => (
  <h1 className={`${styles.title} ${textClass ? styles[textClass] : ''}`}>
    {title}
  </h1>
);

Title.defaultProps = {
  textClass: '',
  title: ''
};

Title.propTypes = {
  title: PropTypes.string,
  textClass: PropTypes.string
};

export default Title;
