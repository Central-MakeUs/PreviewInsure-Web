type InsueMapHeadPorps = {
  insueName: String;
  insueExplain: String;
  isSubscribe?: boolean;
  handleSubscribe: (arg: boolean) => void;
};

type InsueMapSecondPorps = {
  insueName: String;
  insueRecommandPerson: String;
  insueRecommandExplain: String;
  insueIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  isSubscribe?: boolean;
  registInsueCompany?: string;
  registInsueLink?: string;
};

type InsueDetailIconProps = {
  frontTxt: string;
  backTxt: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  nav: string;
  frontActive?: boolean;
  backActive: boolean;
  backTitle?: string;
};

type RecommendItemProps = {
  insuranceImage: string | undefined;
  insuranceCompany: string | undefined;
  insuranceContent: string | undefined;
  insuranceRate: number | undefined;
  price: number | undefined;
  link: string | undefined;
};

interface recommandItem {
  insuranceId: number;
  insuranceImage: string;
  insuranceCompany: string;
  insuranceContent: string;
  insuranceRate: number;
  price: number;
  link: string;
}

type RecommendProps = {
  isLoading: boolean;
  isError: boolean;
  insuranceRecommends?: recommandItem[];
};
