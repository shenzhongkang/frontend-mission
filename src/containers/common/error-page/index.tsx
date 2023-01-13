/**
 * Error Page.
 */
import { Result, Space, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ReloadOutlined, HomeOutlined } from '@ant-design/icons';

export const ErrorPage = () => {
  const navi = useNavigate();

  return (
    <Result
      status={500}
      title='Page went wrong.'
      subTitle='Ooops, something went wrong, try again later plz.'
      extra={
        <Space>
          <Button icon={<HomeOutlined />} onClick={() => navi('/')}>
            Back to Home
          </Button>
          <Button type='primary' icon={<ReloadOutlined />} onClick={() => navi(0)}>
            Reload
          </Button>
        </Space>
      }
    />
  );
};
