const APPLE_CLIENT_ID = import.meta.env.VITE_APP_APPLE_CLIENT_ID;

export const appleLogin = async () => {
  window.AppleID.auth.init({
    clientId: APPLE_CLIENT_ID,
    scope: 'email name',
    redirectURI: 'https://previewinsure.com/callback/apple',
    state: 'previewInsure',
    nonce: '821',
    usePopup: true,
  });

  try {
    const res = await window.AppleID.auth.signIn();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
