import { Link } from 'react-router-dom';

import { menuType } from '@/api/public';
import { BASE_URL } from '@/config';

export const SiderPage = () => {
  const menuList = [
    {
      name: '首页',
      icon: 'home',
      url: `${BASE_URL}`,
      id: 'sub1'
    },
    {
      name: '结果页',
      icon: 'icon',
      url: '',
      id: 'sub5',
      children: [
        {
          name: '成功',
          icon: '',
          id: 'sub5-1',
          url: `${BASE_URL}result/success`
        },
        {
          name: '失败',
          icon: '',
          id: 'sub5-2',
          url: `${BASE_URL}result/error`
        },
        {
          name: 'page403',
          icon: '',
          id: 'sub5-3',
          url: `${BASE_URL}result/page403`
        },
        {
          name: 'page404',
          icon: '',
          id: 'sub5-4',
          url: `${BASE_URL}result/page404`
        },
        {
          name: 'page500',
          icon: '',
          id: 'sub5-5',
          url: `${BASE_URL}result/page500`
        }
      ]
    },
    {
      name: '关于',
      icon: 'FileOutlined',
      url: `${BASE_URL}about`,
      id: 'sub6'
    }
  ];

  return (
    <div className="w-48">
      {menuList.map((k: menuType) => {
        if (k && k.children) {
          return (
            <div key={k.id} title={k.name}>
              {k.children.map((k1: menuType) => {
                if (k1 && k1.children && k1.children.length > 0) {
                  return (
                    <div key={k1.url}>
                      <Link to={k1.url}>{k1.name}</Link>
                    </div>
                  );
                } else {
                  return (
                    <div key={k1.url}>
                      <Link to={k1.url}>{k1.name}</Link>
                    </div>
                  );
                }
              })}
            </div>
          );
        } else {
          return (
            <div key={k.id}>
              <Link to={k.url}>{k.name}</Link>
            </div>
          );
        }
      })}
    </div>
  );
};
