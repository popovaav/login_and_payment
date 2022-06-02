import PropTypes from 'prop-types';
import styles from './sass/TitleBlock.module.scss';
import Title from '../Title/Title';
import TextField from '../TextField/TextField';

const TitleBlock = ({
  title, text
}) => (
  <div className={styles.container}>
    <Title title={title} />
    <TextField text={text} />
  </div>
);

TitleBlock.defaultProps = {
  title: '',
  text: ''
};

TitleBlock.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default TitleBlock;
