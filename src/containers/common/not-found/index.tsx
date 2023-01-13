/**
 * Not Found Page.
 */
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navi = useNavigate();

  return (
    <Result
      status={404}
      title='Page Not Found.'
      subTitle='Sorry, this page can not be found, try again later, plz.'
      extra={
        <Button type='primary' onClick={() => navi('/')}>
          Back to Home
        </Button>
      }
    />
  );
};
