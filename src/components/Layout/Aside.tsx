/**
 * Aside.
 */
import { Menu } from 'antd';
import { BarChartOutlined, TableOutlined, ReadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styles from './Aside.module.scss';

export const Aside = () => {
  return (
    <aside className={styles.container}>
      <Menu
        items={[
          { key: 'home', label: <Link to='/'>Overview</Link>, icon: <BarChartOutlined /> },
          {
            key: 'gen-table',
            label: <Link to='/table'>GenTable</Link>,
            icon: <TableOutlined />,
          },
          {
            key: 'gen-record',
            label: <Link to='/record'>GenRecord</Link>,
            icon: <ReadOutlined />,
          },
        ]}
      />
    </aside>
  );
};
