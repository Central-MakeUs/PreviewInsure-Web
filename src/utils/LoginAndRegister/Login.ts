const GOOGLE_CLIENT_ID = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID;
const GOOGLE_REDIRECT_URI = window.location.protocol + '//' + window.location.host + '/callback/google';
import { openNewTab } from '@utils/common/openNewTab';
import { useStore } from '@stores/useStore';

export const googleLogin = () => {
  // const { platform } = useStore.getState();

  // if (platform === 'ios' || platform === 'android') {
  //   openNewTab(
  //     `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=openid email profile`,
  //   );
  // } else {
  window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=openid email profile`;
  // }
};
