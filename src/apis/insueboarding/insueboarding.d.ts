//age
export interface AgeRequest {
  year: number;
  month: number;
}

export interface AgeResponse {
  code: number;
  message: string;
}

// insures , gender
type insures = {
  insuranceType: string;
  insuranceCompany: string;
};

export interface BoardRequest {
  gender: 'M' | 'W' | null;
  //   gender: string;
  insureBoards: insures[];
}

export interface BoardResponse {
  code: number;
  message: string;
}
