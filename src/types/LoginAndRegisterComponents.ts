export type AgreeProps = {
  check: boolean;
  setCheck: any;
  text: string;
  type: 'essential' | 'selectable';
  detail: any;
};

export type OAuthButtonProps = {
  icon: any;
  text: string;
  type: 'google' | 'apple';
  onClick: () => void;
};
