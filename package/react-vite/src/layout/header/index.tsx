import logoImg from '@/assets/images/logo.svg';

export const HeaderPage = () => {
  return (
    <header className="flex justify-between h-12 leading-10 bg-[#1da1f2] text-white">
      <div className="flex justify-between">
        <img className="logoImg" src={logoImg} />
        <h1>react管理系统</h1>
      </div>
      <div className="col_right">
        <span className="dropdown-link">{'张三'}</span>
      </div>
    </header>
  );
};
