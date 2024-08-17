export interface recommendRequest {
  insuranceType: string;
}

interface recommandItem {
  insuranceId: number;
  insuranceImage: string;
  insuranceCompany: string;
  insuranceContent: string;
  insuranceRate: number;
  price: number;
  link: string;
}

export interface recommendResponse {
  nickName: string;
  isSubscribed: boolean;
  insuranceCompany?: string;
  insuranceLink?: string;
  insuranceRecommends: recommandItem[];
}
