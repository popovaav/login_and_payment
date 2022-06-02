import PropTypes from 'prop-types';
import TextField from '../UI/TextField/TextField';
import styles from './sass/ProfileUser.module.scss';
import Layout from '../../layout/Layout';
import Image from '../UI/Image/Image';
import Button from '../UI/Button/Button';

const ProfileUser = ({
  user, onLogoutSuccess, isAuthFacebook
}) => {
  console.log(user, 'fff');
  return (
    <Layout>
      <div className={styles.wrapperProfile}>
        <Image src={isAuthFacebook ? user.picture.data.url : user.picture} />
        <div className={styles.container}>
          <TextField text="Hello,  " />
          <TextField text={user.name} />
        </div>
        <TextField text={user.email} />
        <Button handleClick={onLogoutSuccess} title="Log out" />
      </div>
    </Layout>
  );
};

ProfileUser.defaultProps = {
  user: {
    name: '',
    picture: '',
    email: '',
  },
  onLogoutSuccess: () => {},
  isAuthFacebook: false
};

ProfileUser.propTypes = {
  user: {
    name: PropTypes.string,
    picture: PropTypes.string,
    email: PropTypes.string,
  },
  onLogoutSuccess: PropTypes.func,
  isAuthFacebook: PropTypes.bool
};

export default ProfileUser;
