export interface itemType {
  name: string;
  icon: string;
  url: string;
  id: string;
}

export interface menuType {
  name: string;
  icon: string;
  url: string;
  id: string;
  children?: itemType[];
}

export const menuData: menuType[] = [
  {
    name: '首页',
    icon: 'home',
    url: '/home',
    id: 'sub1'
  },
  {
    name:'组件示例',
    icon:'icon',
    url:'AppstoreOutlined',
    id:'sub2',
    children: [
      {
        name: '组件1',
        icon: '',
        id: 'sub2-1',
        url: '/assembly/demo1'
      }
    ]
  },
  {
    name:'插件示例',
    icon:'icon',
    url:'',
    id:'sub3',
    children: [
      {
        name: '插件1',
        icon: '',
        id: 'sub2-1',
        url: '/pluginunit/demo1'
      }
    ]
  },
  {
    name:'图表',
    icon:'icon',
    url:'',
    id:'sub4',
    children: [
      {
        name: '图表1',
        icon: '',
        id: 'sub2-1',
        url: 'chart/line/demo1'
      }
    ]
  },
  {
    name:'结果页',
    icon:'icon',
    url:'',
    id:'sub5',
    children: [
      {
        name: '成功',
        icon: '',
        id: 'sub2-1',
        url: '/result/success'
      }
    ]
  },
  {
    name: '关于',
    icon: 'FileOutlined',
    url: '/about',
    id: 'sub6'
  }
];
