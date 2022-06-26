import Head from 'next/head';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import styles from './sass/Layout.module.scss';

const Layout = ({ children }) => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('login')}</title>
        <link rel="icon" href="/vetti.svg" />
      </Head>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
