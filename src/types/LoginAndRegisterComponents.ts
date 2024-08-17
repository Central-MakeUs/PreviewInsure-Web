export type AgreeProps = {
  check: boolean;
  setCheck: any;
  text: string;
  type: 'essential' | 'selectable';
  detail: any;
  registerBtnClicked: boolean;
};

export type OAuthButtonProps = {
  icon: any;
  text: string;
  type: 'google' | 'apple';
  onClick: () => void;
};

// apple OAuth
interface ClientConfig {
  clientId: string;
  redirectURI: string;
  scope?: string;
  state?: string;
  nonce?: string;
  usePopup?: boolean;
}
interface Authorization {
  code: string;
  id_token: string;
  state?: string;
}

interface User {
  email: string;
  name: string;
}

interface SigninResponse {
  authorization: Authorization;
  user?: User;
}

declare global {
  interface Window {
    AppleID: {
      auth: {
        init: (config: ClientConfig) => void;
        signIn: (config?: ClientConfig) => Promise<SigninResponse>;
      };
    };
  }
}
