import React from 'react';
import PropTypes from 'prop-types';
import styles from './sass/Arrow.module.scss';

const Arrow = ({ arrowClass }) => (
  <div className={`${styles.arrow} ${arrowClass ? styles[arrowClass] : ''}`}>
    <div />
  </div>
);

Arrow.defaultProps = {
  arrowClass: ''
};

Arrow.propTypes = {
  arrowClass: PropTypes.string
};

export default Arrow;
