import React, { useRef, useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import request from 'umi-request';
import { Card, Alert, Button, Input, Form} from 'antd';
import { connect } from 'umi';

export const BasicList = (props) => {
  const[customlist , setcustomList] = useState([])
  const[postMessage , setPostMessage] = useState("unsuccessfull post req")
  const[dataToSend , setDataToSend] = useState("Default text")

  async function customList(params) {
    request
    .get('http://localhost:3000/list')
    .then(function(response) {
      setcustomList(response)
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  async function postList(params) {
    request
    .post('http://localhost:3000/api/fetch', {
      data: {
        name: dataToSend,
      },
    })
    .then(function(response) {
      setPostMessage(response.name)
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  useEffect((props) => {
    console.log(props, " props")
    customList()
    postList()
  },[]);

  async function handleClick (e) {
    setDataToSend(e.username)
    postList()
  }

  return (
    <div>
      <PageContainer>
      { postMessage === dataToSend ?<Alert
        message={postMessage}
        type="success"
        showIcon
        action={
          <Button size="small" type="text">
            UNDO
          </Button>
        }
        closable
      /> :
      <Alert
        message={postMessage}
        banner
        action={
          <Button size="small" type="text">
            UNDO
          </Button>
        }
        closable
      /> }
      {customlist.map((item) => (
        <Card title ={item.name}>
            age {item.age} and i own {item.car} 
        </Card>
      ))}
      <br />
      <Card title={"Enter text here"}>
        <Form
      name="basic"
      onFinish={handleClick}
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your text!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </Card>
      </PageContainer>
    </div>
  );
};
export default connect(({ list, loading}) => ({
  list,
  loading
}))(BasicList);