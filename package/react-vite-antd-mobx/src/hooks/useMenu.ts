import { useLocation } from 'react-router';

import { menuData, menuType } from '@/config/menuData';

const getOpenKeys = (data: menuType[]): string[] => {
  const oks: string[] = [];
  for (const key of data) {
    oks.push(key.id);
  }
  return oks;
};

const useMenu = (): [menuType[], string[], string[]] => {
  const location = useLocation();
  const openKeys: string[] = getOpenKeys(menuData);
  const selectedKeys: string[] = [location.pathname];
  return [menuData, openKeys, selectedKeys];
};

export default useMenu;
