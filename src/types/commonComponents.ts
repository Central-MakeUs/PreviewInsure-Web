export type SearchBarProps = {
  backgroundColor: string;
  icon: any;
  handler: () => void;
};

export type SelectorProps = {
  check: boolean;
  setCheck: (check: boolean) => void;
  type: 'circle' | 'square';
};

type LoadingType = 'blank' | 'balls' | 'bars' | 'bubbles' | 'cubes' | 'cylon' | 'spin' | 'spinningBubbles' | 'spokes';
export type LoadingProps = {
  type: LoadingType;
  color: string;
  width: number;
  height: number;
};

export type ProcessProps = {
  stepNumber: number;
  activeStep: number;
};
