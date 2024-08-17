import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface State {
  accessToken: string;
  login: (token: string, nickName: string) => void;
  logOut: () => void;
  nickName: string;
  isLogin: boolean;

  //platform
  platform: string;
  setPlatform: (data: string) => void;

  //temp
  temporaryToken: string; //register 하는 과정에서만 사용
  setTempToken: (token: string) => void;
}

// const getInitialState = (): State => {
//   const storedAccessToken = localStorage.getItem('accessToken');
//   const storedNickName = localStorage.getItem('nickName');
//   const isLogin = !!storedAccessToken;

//   return {
//     accessToken: storedAccessToken || '',
//     nickName: storedNickName || '',
//     isLogin,
//     login: () => {},
//     logOut: () => {},

//     temporaryToken: '',
//     setTempToken: () => {},
//   };
// };

// export const useStore = create<State>((set, get) => ({
//   ...getInitialState(),
//   login: (token, nickName) => {
//     localStorage.setItem('accessToken', token);
//     localStorage.setItem('nickName', nickName);
//     set({ accessToken: token, nickName, isLogin: true, temporaryToken: '' });
//   },
//   logOut: () => {
//     localStorage.removeItem('accessToken');
//     localStorage.removeItem('nickName');
//     set({ accessToken: '', nickName: '', isLogin: false, temporaryToken: '' });
//   },

//   setTempToken: (token) => {
//     set({
//       temporaryToken: token,
//     });
//   },
// }));

export const useStore = create<State>()(
  persist(
    (set) => ({
      accessToken: '',
      nickName: '',
      isLogin: false,
      temporaryToken: '',
      platform: 'ios', // 원래는 빈값 -> 웹에서도 깨지지 않기 일단 ios로
      login: (token, nickName) => {
        set({ accessToken: token, nickName, isLogin: true, temporaryToken: '' });
      },
      logOut: () => {
        set({ accessToken: '', nickName: '', isLogin: false, temporaryToken: '' });
      },
      setTempToken: (token) => {
        set({ temporaryToken: token });
      },
      setPlatform: (data) => {
        set({ platform: data });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
