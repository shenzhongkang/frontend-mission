/**
 * GenTable.
 */
import { useEffect, useState } from 'react';
import { Row, Col, Space, Button, Input, Table, Tag, Badge, Rate, Divider, Alert } from 'antd';
import { InnerLayout } from '../../components';

const { Search } = Input;

export const GenTable = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  // fetch remote data
  const getData = async () => {
    setLoading(true);
    const res = await new Promise<any>((resolve) => {
      setTimeout(() => {
        resolve({
          data: Array.from({ length: 200 }, (v, k) => ({
            id: `id-${k}`,
            title: `Title[${k}]`,
            tag: `Tag`,
            progress: `Progress`,
            favorite: Math.floor(Math.random() * 5),
          })),
        });
      }, 1000);
    });
    setLoading(false);
    const { data = [] } = res;
    setDataSource(data);
  };

  // table columns
  const columns = [
    { dataIndex: 'id', title: 'ID' },
    { dataIndex: 'title', title: 'Title' },
    { dataIndex: 'tag', title: 'Tag', render: (t: string) => <Tag>{t}</Tag> },
    {
      dataIndex: 'progress',
      title: 'Progress',
      render: (t: string, r: any, i: number) => <Badge count={i + 1}>{t}</Badge>,
    },
    {
      dataIndex: 'favorite',
      title: 'Favorite',
      render: (t: number) => <Rate value={t} />,
    },
    {
      title: 'Message',
      render: () => <Alert message='Throw message here.' />,
    },
    {
      title: 'Operation',
      width: 200,
      render: () => (
        <Space>
          <Button type='link'>Edit</Button>
          <Divider type='vertical' />
          <Button type='link'>Mark</Button>
        </Space>
      ),
    },
  ];

  return (
    <InnerLayout title='Table Page'>
      <Row justify='space-between'>
        <Col>
          <Space>
            <Button type='primary'>Create</Button>
            <Button danger>Delete</Button>
          </Space>
        </Col>
        <Col>
          <Search placeholder='Search...' />
        </Col>
      </Row>
      <Table
        style={{ margin: '20px 0' }}
        rowKey='id'
        loading={loading}
        columns={columns}
        dataSource={dataSource}
      />
    </InnerLayout>
  );
};
