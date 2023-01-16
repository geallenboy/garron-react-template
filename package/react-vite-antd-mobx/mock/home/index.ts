import { MockMethod } from 'vite-plugin-mock';

import { resultSuccess } from '../_util';

export default [
  {
    url: '/mock-api/user/login',
    timeout: 1000,
    method: 'post',
    response: () => {
      const data = {
        code: 200,
        data: {
          captchaId: 'captchaId',
          password: '123456',
          username: 'admin',
          verifyCode: '1234'
        },
        message: '',
        type: 'success'
      };
      return resultSuccess(data);
    }
  }
] as MockMethod[];
