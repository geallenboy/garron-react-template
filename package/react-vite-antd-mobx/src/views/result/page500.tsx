import { Button, Result } from 'antd';
import React from 'react';

export default function Page500() {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, the server is reporting an error."
      extra={<Button type="primary">返回首页</Button>}
    />
  );
}
