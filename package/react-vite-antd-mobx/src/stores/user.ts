import { makeAutoObservable } from 'mobx';

export const userStore = makeAutoObservable({
  token: '',
  userInfo: {},
  locale: '',
  name: 'amdin',
  avatar: '',
  perms: [] as string[],
  menus: [],
  // 清空token及用户信息
  resetToken() {
    this.avatar = this.token = this.name = '';
    this.perms = [];
    this.menus = [];
    this.userInfo = {};
  }
});

export default userStore;
