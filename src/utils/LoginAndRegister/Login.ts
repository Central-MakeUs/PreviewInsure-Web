const GOOGLE_CLIENT_ID = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID;
const GOOGLE_REDIRECT_URI = window.location.protocol + '//' + window.location.host + '/callback/google';

export const googleLogin = () => {
  window.open(
    `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=openid email profile`,
  );
};
