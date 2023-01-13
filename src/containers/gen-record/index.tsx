/**
 * GenRecord.
 */
import { InnerLayout } from '../../components';
import {
  Space,
  Button,
  Tooltip,
  Form,
  Divider,
  Input,
  Row,
  Col,
  notification,
  message,
} from 'antd';
import { DeleteOutlined, SaveOutlined, LinkOutlined } from '@ant-design/icons';

export const GenRecord = () => {
  const [form] = Form.useForm();

  // handle submit
  const handleSubmit = () => {
    form.validateFields().then((values) => {
      console.log(values);
      notification.success({ message: 'Save succuessfully' });
    });
  };

  // handle delete
  const handleDelete = () => {
    message.error('Record cannot be deleted');
  };

  return (
    <InnerLayout
      title='Record Page'
      extra={
        <Space>
          <Tooltip title='Delete Record' placement='bottomLeft'>
            <Button icon={<DeleteOutlined />} type='text' danger onClick={handleDelete} />
          </Tooltip>
          <Tooltip title='Save Record' placement='bottomLeft'>
            <Button icon={<SaveOutlined />} type='link' onClick={handleSubmit} />
          </Tooltip>
        </Space>
      }
    >
      <Form form={form} layout='vertical'>
        <Divider orientation='left'>Basic Info</Divider>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              name='f1'
              label='Field1'
              rules={[{ required: true, message: 'Field is required.' }]}
            >
              <Input placeholder='Enter Something' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name='f2' label='Field2'>
              <Input placeholder='Enter Something' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name='f3' label='Field3'>
              <Input placeholder='Enter Something' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name='f4' label='Field4'>
              <Input placeholder='Enter Something' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name='f5' label='Field5'>
              <Input placeholder='Enter Something' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name='f6' label='Field6'>
              <Input placeholder='Enter Something' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name='f7' label='Field7'>
              <Input.TextArea placeholder='Enter Something' />
            </Form.Item>
          </Col>
        </Row>
        <Divider orientation='left'>Related Links</Divider>
        <Space direction='vertical'>
          <div>
            <LinkOutlined /> References
          </div>
          <div>
            <LinkOutlined /> References
          </div>
          <div>
            <LinkOutlined /> References
          </div>
        </Space>
      </Form>
    </InnerLayout>
  );
};
