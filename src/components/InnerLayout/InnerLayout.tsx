/**
 * Inner Layout.
 */
import { FC, ReactNode } from 'react';
import styles from './InnerLayout.module.scss';

interface InnerLayoutProps {
  title: string;
  subTitle?: string;
  children?: ReactNode;
  extra?: ReactNode;
}

export const InnerLayout: FC<InnerLayoutProps> = ({
  title = 'Page Title',
  subTitle = 'Sub Title',
  children,
  extra,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.legend}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subTitle}>{subTitle}</div>
        </div>
        <div className={styles.extra}>{extra}</div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
