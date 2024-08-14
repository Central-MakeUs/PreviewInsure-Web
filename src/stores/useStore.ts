import { create } from 'zustand';

export interface State {
  accessToken: string;
  login: (token: string, nickName: string) => void;
  logOut: () => void;
  nickName: string;
  isLogin: boolean;
}

const getInitialState = (): State => {
  const storedAccessToken = localStorage.getItem('accessToken');
  const storedNickName = localStorage.getItem('nickName');
  const isLogin = !!storedAccessToken;

  return {
    accessToken: storedAccessToken || '',
    nickName: storedNickName || '',
    isLogin,
    login: () => {},
    logOut: () => {},
  };
};

export const useStore = create<State>((set, get) => ({
  ...getInitialState(),
  login: (token, nickName) => {
    localStorage.setItem('accessToken', token);
    localStorage.setItem('nickName', nickName);
    set({ accessToken: token, nickName, isLogin: true });
  },
  logOut: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('nickName');
    set({ accessToken: '', nickName: '', isLogin: false });
  },
}));
