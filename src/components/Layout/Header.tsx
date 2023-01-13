/**
 * Header.
 */
import styles from './Header.module.scss';
import logo from '../../assets/mantine-logo-full.svg';
import { UserOutlined } from '@ant-design/icons';

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt='brand' />
      </div>
      <div className={styles.avatar}>
        <UserOutlined />
      </div>
    </div>
  );
};
