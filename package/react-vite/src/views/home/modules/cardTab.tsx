import React from 'react';

export default function CardTab({ data }: any) {
  return (
    <div className={'cardtab'}>
      <div>
        <div>
          <h3 className={'card-title'}>{data.title}</h3>
        </div>
        <div className="text-right">{'指标说明'}</div>
      </div>
      <h2 className={'card-h2'}>¥ {data.titleNumber}</h2>
      <div>
        <div>
          <div>
            <span>周同比</span>
            <span>
              <span className={'mr5'}>{data.tbNumber}</span>
              <span>up</span>
            </span>
          </div>
        </div>
        <div>
          <div>
            <span>日同比</span>
            <span>
              <span className={'mr5'}>{data.rtbNumber}</span>
              <span>down</span>
            </span>
          </div>
        </div>
      </div>

      <div>
        <span>日销售额</span>
        <span className={'card-span1'}>¥ {data.rxse}</span>
      </div>
    </div>
  );
}
