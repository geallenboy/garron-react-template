import { Button, Result } from 'antd';
import React from 'react';

export default function Fail() {
  return (
    <Result
      status="500"
      title="500"
      subTitle="对不起,服务器发生错误."
      extra={<Button type="primary">返回首页</Button>}
    />
  );
}
