const APPLE_CLIENT_ID = import.meta.env.VITE_APP_APPLE_CLIENT_ID;

const REDIRECT_URI = window.location.protocol + '//' + window.location.host + '/callback/apple';

export const appleLogin = async () => {
  //   console.log(REDIRECT_URI);
  window.AppleID.auth.init({
    clientId: APPLE_CLIENT_ID,
    scope: 'email name',
    redirectURI: `${REDIRECT_URI}`,
    state: 'previewInsure',
    nonce: '821',
    usePopup: false,
  });

  try {
    const res = await window.AppleID.auth.signIn();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
