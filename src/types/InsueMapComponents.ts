type InsueMapHeadPorps = {
  insueName: String;
  insueExplain: String;
  isSubscribe: boolean;
  handleSubscribe: (arg: boolean) => void;
};

type InsueMapSecondPorps = {
  insueName: String;
  insueRecommandExplain: String;
  insueIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  isSubscribe: boolean;
  registInsueCompany?: string;
  registInsueLink?: string;
};

type InsueDetailIconProps = {
  frontTxt: string;
  backTxt: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  nav: string;
  frontActive: boolean;
  backActive: boolean;
  backTitle?: string;
};
