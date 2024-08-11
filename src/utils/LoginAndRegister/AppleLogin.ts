const APPLE_CLIENT_ID = import.meta.env.VITE_APP_APPLE_CLIENT_ID;
const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;
const REDIRECT_URI = window.location.protocol + '//' + window.location.host + '/callback/apple';

export const appleLogin = async () => {
  const RESPONSE_TYPE = 'code id_token'; // 요청하는 응답 타입
  const RESPONSE_MODE = 'fragment'; // fragment | form_post

  const AUTH_URL =
    `https://appleid.apple.com/auth/authorize?` +
    `client_id=${encodeURIComponent(APPLE_CLIENT_ID)}` +
    `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
    `&response_type=${encodeURIComponent(RESPONSE_TYPE)}` +
    `&response_mode=${encodeURIComponent(RESPONSE_MODE)}` +
    `&scope=${encodeURIComponent('')}` +
    `&state=${encodeURIComponent('previewInsure')}` +
    `&nonce=${encodeURIComponent('821')}`;

  // 브라우저에서 Apple 로그인 페이지로 리디렉션
  try {
    window.location.href = AUTH_URL;
  } catch (error) {
    console.log(error);
  }

  // window.AppleID.auth.init({
  //   clientId: APPLE_CLIENT_ID,
  //   scope: 'email name',
  //   // redirectURI: `${REDIRECT_URI}`,
  //   redirectURI: `${SERVER_URL}/callback/apple`,
  //   state: 'previewInsure',
  //   nonce: '821',
  //   usePopup: false,
  // });

  // try {
  //   const res = await window.AppleID.auth.signIn();
  //   console.log('res', res);
  // } catch (error) {
  //   console.log(error);
  // }
};
