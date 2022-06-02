import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './sass/LinkInside.module.scss';

const LinkInside = ({ title, url, linkClass }) => (
  <Link href={url}>
    <a className={`${styles.link} ${styles[linkClass] || ''}`}>
      {title}
    </a>
  </Link>
);

LinkInside.defaultProps = {
  linkClass: '',
  url: '/',
  title: ''
};

LinkInside.propTypes = {
  title: PropTypes.string,
  linkClass: PropTypes.string,
  url: PropTypes.string
};

export default LinkInside;
