import { create } from 'zustand';

export interface State {
  accessToken: string;
  setAccessToken: (token: string) => void;
  logOut: () => void;
  nickName: string;
  setNickName: (nickname: string) => void;
  isLogin: boolean;
}

export const useStore = create<State>((set) => ({
  accessToken: '',
  setAccessToken: (token: string) => set({ accessToken: token }),
  logOut: () => set({ accessToken: '' }),
  nickName: 'asdfa',
  setNickName: (arg: string) => set({ nickName: arg }),
  isLogin: false,
}));
