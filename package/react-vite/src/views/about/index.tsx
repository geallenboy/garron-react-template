import pkg from '../../../package.json';

//关于
export const About = () => {
  const dependencies: any = pkg.dependencies as any;
  const devDependencies: any = pkg.devDependencies;
  const BlankLink = ({ url = '', text = '' }) => (
    <a href={url} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
  return (
    <>
      <div>
        <div>
          {`${pkg.name}的前端项目是基于react17、Vite2.x、TypeScript4.x开发，帮助你快速搭建企业级中后台产品原型。`}
        </div>
      </div>
      <div className="mt-3">
        <div title="项目信息">
          <div>
            <p color="processing">{pkg.version}</p>
          </div>
          <div>
            <p color="processing">{'最后编译时间'}</p>
          </div>
          <div>
            <BlankLink text="GitHub" url={pkg.repository.url} />
          </div>
          <div>
            <BlankLink text="预览地址" url={pkg.homepage} />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div title="生产环境依赖">
          {Object.keys(dependencies).map((key: any) => {
            // eslint-disable-next-line
            return <div key={key}>{pkg.dependencies[key]}</div>;
          })}
        </div>
      </div>
      <div className="mt-3">
        <div title="开发环境依赖">
          {Object.keys(devDependencies).map((key: any) => {
            // eslint-disable-next-line
            return <div key={key}>{pkg.devDependencies[key]}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default About;
