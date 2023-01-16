import { lazy } from 'react';
export const routers = [
  {
    path: '/home',
    name: '首页',
    element: lazy(() => import('@/views/home'))
  },
  {
    path: '/assembly/demo1',
    name: '组件',
    element: lazy(() => import('@/views/assembly/demo1'))
  },
  {
    path: '/chart/line/demo1',
    name: '组件',
    element: lazy(() => import('@/views/chart/line/demo1'))
  },
  {
    path: '/pluginunit/demo1',
    name: '组件',
    element: lazy(() => import('@/views/pluginunit/demo1'))
  },
  {
    path: '/todo',
    name: 'todo',
    element: lazy(() => import('@/views/todo'))
  },
  {
    path: '/result/success',
    name: '成功页面',
    element: lazy(() => import('@/views/result/success'))
  },
  {
    path: '/about',
    name: '关于',
    element: lazy(() => import('@/views/about'))
  }
];
