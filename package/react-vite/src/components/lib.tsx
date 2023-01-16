import React from 'react';

//页面loading
export const PageLoading = () => <div className="loading_div">loading...</div>;

//错误处理
export const PageError = ({ error }: { error: Error | null }) => (
  <div className="loading_div">{error?.message}</div>
);
