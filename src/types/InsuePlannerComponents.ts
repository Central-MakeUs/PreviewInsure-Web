import { ReactElement } from 'react';

interface link {
  insuranceCompany: string;
  insuranceLink: string;
}

export type InsuePlannerQuestionProps = {
  setQuestion: (arg: string) => void;
  setCurrentScreen: (arg: 'Q' | 'A') => void;
  setCurrentAnswer: (arg: string) => void;
  setCurrentAnswerLinks: (arg: link[] | []) => void;
};

export type QuestionBoxProps = {
  svg: any;
  text: string | ReactElement;
  value: string;
  bottom: string;
  right: string;
  setQuestion: (arg: string) => void;
  setCurrentScreen: (arg: 'Q' | 'A') => void;
  setCurrentAnswer: (arg: string) => void;
  setCurrentAnswerLinks: (arg: link[]) => void;
};

//answer

export type InsuePlannerAnswerProps = {
  question: string;
  setCurrentScreen: (arg: 'Q' | 'A') => void;
  currentAnswer: string;
  setCurrentAnswer: (arg: string) => void;
  currentAnswerLinks: link[];
  setCurrentAnswerLinks: (arg: link[]) => void;
};

export type HistoryItemProps = {
  selected: boolean;
  title: string;
  contents: string;
  setCurrentQuestion: (arg: string) => void;
};
