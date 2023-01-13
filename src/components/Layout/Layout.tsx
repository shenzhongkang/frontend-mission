/**
 * Layout
 */
import { Outlet } from 'react-router-dom';
import { Aside } from './Aside';
import { Header } from './Header';
import styles from './Layout.module.scss';

export function Layout() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.body}>
        <Aside />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
