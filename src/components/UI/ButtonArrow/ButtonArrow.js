import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './sass/ButtonArrow.module.scss';
import Arrow from '../Arrow/Arrow';
import TextField from '../TextField/TextField';

const ButtonArrow = ({
  title, arrowClass, url, styleType
}) => (
  <div className={styles.container}>
    <Link href={url}>
      <a>
        <Arrow arrowClass={arrowClass} />
        <TextField text={title} textFieldClass={styleType} />
      </a>
    </Link>
  </div>
);

ButtonArrow.defaultProps = {
  title: '',
  arrowClass: '',
  url: '/',
  styleType: ''
};

ButtonArrow.propTypes = {
  title: PropTypes.string,
  arrowClass: PropTypes.string,
  url: PropTypes.string,
  styleType: PropTypes.string
};

export default ButtonArrow;
