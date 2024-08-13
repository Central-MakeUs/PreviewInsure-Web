//planner POST question

export interface plannerPOSTRequest {
  quesion: string;
  isShare: boolean;
  insuranceType: string;
}

interface link {
  insuranceCompany: string;
  insuranceLink: string;
}

// export interface plannerPOSTResponse {
//   code: number;
//   message: string;
//   data: {
//     qnaBoardId: string;
//     quesion: string;
//     answer: string;
//     isShare: boolean;
//     insuranceType: string;
//     links: link[];
//   };
//}

export interface plannerPOSTResponse {
  qnaBoardId: string;
  quesion: string;
  answer: string;
  isShare: boolean;
  insuranceType: string;
  links: link[];
}
