import { Button, Result } from 'antd';
import React from 'react';

export default function Success() {
  return <Result status="403" title="403" subTitle="成功" extra={<Button type="primary">返回首页</Button>} />;
}
