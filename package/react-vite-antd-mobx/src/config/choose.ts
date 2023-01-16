import { optionsType } from 'components/indexChoose';

//关键指标对比
export const keyIndex: optionsType[] = [
  {
    title: '流量相关',
    optList: [
      {
        value: 'uv_idx',
        label: '访客指数'
      },
      {
        value: 'search_idx',
        label: '搜索点击指数'
      },
      {
        value: 'collet_idx',
        label: '收藏人气'
      },
      {
        value: 'cart_idx',
        label: '加购人气'
      }
    ]
  },
  {
    title: '销售相关',
    optList: [
      {
        value: 'pay_idx',
        label: '交易指数'
      },
      {
        value: 'trd_trans_rate',
        label: '成交转化率'
      },
      {
        value: 'per_buyer_amnt',
        label: '客单价'
      }
    ]
  }
];
