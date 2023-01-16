import { Button, Result } from 'antd';
import React from 'react';

export default function Page404() {
  return (
    <Result status="404" title="404" subTitle="对不起，页面不存在." extra={<Button type="primary">返回首页</Button>} />
  );
}
