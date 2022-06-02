import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import Layout from '../../layout/Layout';
import Title from '../../components/UI/Title/Title';
import { NOT_FOUND } from '../../constants/httpStatusCodes';
import styles from './sass/Error.module.scss';

const ErrorView = ({ statusCode }) => {
  const { t } = useTranslation('error');

  return (
    <Layout>
      <div className={styles.errorBody}>
        <Title>
          {t(statusCode === NOT_FOUND ? 'pageNotFound' : 'internalServerError')}
        </Title>
      </div>
    </Layout>
  );
};

ErrorView.propTypes = {
  statusCode: PropTypes.number.isRequired
};

export default ErrorView;
