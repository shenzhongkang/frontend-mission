/**
 * Home
 */
import { useEffect, useState } from 'react';
import { Card, Space, Checkbox, Table, Progress, Tag } from 'antd';
import {
  BellOutlined,
  ScheduleOutlined,
  SettingOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import styles from './styles.module.scss';
import { LineChart, PieChart } from '../../components';

export const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const [dataSource, setDataSource] = useState<Array<any>>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentTime]);

  useEffect(() => {
    getData();
  }, []);

  // fetch table data from remote server
  const getData = async () => {
    const res = await Promise.resolve({
      data: Array.from({ length: 20 }, (v, k) => ({
        id: `row-id-${k}`,
        title: `Title-${k}`,
        status: (Math.random() * k).toFixed(2),
        serverity: (Math.random() * k).toFixed(2),
        progress: parseFloat(`${Math.random() * 100}`).toPrecision(3),
        owner: `Owner: ${k}`,
      })),
    });
    const { data = [] } = res;
    setDataSource(data);
  };

  // construct table columns
  const columns = [
    { dataIndex: 'title', title: 'Title' },
    {
      dataIndex: 'status',
      title: 'Status',
      render: (v: number) => {
        if (v > 4) {
          return <Tag color='red'>Large</Tag>;
        } else if (v > 2) {
          return <Tag color='orange'>Middle</Tag>;
        }
        return <Tag color='green'>Small</Tag>;
      },
    },
    {
      dataIndex: 'serverity',
      title: 'Serverity',
      render: (v: number) => {
        if (v > 4) {
          return 'Hight';
        } else if (v > 2) {
          return 'Medium';
        }
        return 'Low';
      },
    },
    {
      dataIndex: 'progress',
      title: 'Progress',
      render: (v: number) => <Progress percent={v} showInfo={false} />,
    },
    { dataIndex: 'owner', title: 'Owner' },
    { title: <SettingOutlined />, render: () => <EllipsisOutlined /> },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.sayhi}>
        <Card className={styles.welcome}>
          <div className={styles.legend}>
            <div className={styles.title}>Welcome to X Space, Administartor</div>
            <div className={styles.time}>{currentTime}</div>
          </div>
          <div className={styles.msg}>
            <BellOutlined />
            <div>Reply: Answer me the question.</div>
          </div>
        </Card>
        <Card
          className={styles.todo}
          title={
            <Space size='middle'>
              <ScheduleOutlined />
              TODO
            </Space>
          }
        >
          <Space direction='vertical'>
            <Checkbox>Todo Item ①</Checkbox>
            <Checkbox>Todo Item ②</Checkbox>
            <Checkbox>Todo Item ③</Checkbox>
            <Checkbox>Todo Item ④</Checkbox>
            <Checkbox>Todo Item ⑤</Checkbox>
          </Space>
        </Card>
      </div>
      <div className={styles.chart}>
        <LineChart />
        <PieChart />
      </div>
      <div className={styles.table}>
        <Table rowKey='id' dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};
