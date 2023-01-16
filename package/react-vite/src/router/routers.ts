import { lazy } from 'react';

import { BASE_URL } from '@/config';

export const routers = [
  {
    path: `${BASE_URL}`,
    name: '首页',
    element: lazy(() => import('@/views/home'))
  },

  {
    path: `${BASE_URL}todo`,
    name: 'todo',
    element: lazy(() => import('@/views/todo'))
  },
  {
    path: `${BASE_URL}result/success`,
    name: '成功页面',
    element: lazy(() => import('@/views/result/success'))
  },
  {
    path: `${BASE_URL}result/error`,
    name: '错误页面',
    element: lazy(() => import('@/views/result/error'))
  },
  {
    path: `${BASE_URL}/result/page403`,
    name: 'page403',
    element: lazy(() => import('@/views/result/page403'))
  },
  {
    path: `${BASE_URL}result/page404`,
    name: 'page404',
    element: lazy(() => import('@/views/result/page404'))
  },
  {
    path: `${BASE_URL}result/page500`,
    name: 'page500',
    element: lazy(() => import('@/views/result/page500'))
  },
  {
    path: `${BASE_URL}about`,
    name: '关于',
    element: lazy(() => import('@/views/about'))
  }
];
