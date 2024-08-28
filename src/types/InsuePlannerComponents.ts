import { ReactElement } from 'react';
import type { QuestionTitle } from '@apis/insuePlanner/insuePlanner.d';

interface link {
  insuranceCompany: string;
  link: string;
}

export type InsuePlannerQuestionProps = {
  setQuestion: (arg: string) => void;
  setCurrentScreen: (arg: 'Q' | 'A') => void;
  setCurrentAnswer: (arg: string) => void;
  setCurrentAnswerLinks: (arg: link[] | []) => void;
  setCurrentQuestionId: (arg: number) => void;
};

export type QuestionBoxProps = {
  svg: any;
  text: string | ReactElement;
  value: string;
  bottom: string;
  right: string;

  questionHandler: (data: any) => void;
};

//answer

export type InsuePlannerAnswerProps = {
  question: string;
  currentQuestionId: number;
  setCurrentScreen: (arg: 'Q' | 'A') => void;
  currentAnswer: string;
  setCurrentAnswer: (arg: string) => void;
  currentAnswerLinks: link[];
  setCurrentAnswerLinks: (arg: link[]) => void;
};

export type HistoryItemProps = {
  qnaBoardId: number;
  title: string;
  contents: string;
  setCurrentQuestion: (arg: string) => void;
  setHistoryQuestionId: (arg: number) => void;
  setOpenModal?: (arg: boolean) => void;
  historyQId: number | null | undefined;
  idx: number;
};

export interface HistoryListContainerProps {
  history: QuestionTitle[];
  setCurrentQuestion: (arg: string) => void;
  setHistoryQuestionId: (arg: number) => void;
  setOpenModal?: (arg: boolean) => void;
  historyQId: number | null | undefined;
}
