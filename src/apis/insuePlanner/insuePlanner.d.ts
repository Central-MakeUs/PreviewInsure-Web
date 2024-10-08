//planner POST question

export interface plannerPOSTRequest {
  quesion: string;
  isShare: boolean;
  insuranceType: string;
}

export interface plannerPATCHRequest {
  quesionId: number;
  quesion: string;
}

interface link {
  insuranceCompany: string;
  link: string;
}

export interface plannerPOSTResponse {
  qnaBoardId: number;
  quesion: string;
  answer: string;
  isShare: boolean;
  insuranceType: string;
  links: link[];
}

//get question titles
export interface QuestionTitle {
  qnaBoardId: number;
  title: string;
  insuranceType: string;
}

export type QuestionTitleData = QuestionTitle[];

//get question detail

export interface QuestionDetailData {
  qnaBoardId: number;
  question: string;
  answer: string;
  links: link[];
}
