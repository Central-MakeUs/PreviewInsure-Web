import { ReactElement } from 'react';

export type InsuePlannerQuestionProps = {
  setQuestion: (arg: string) => void;
  setCurrentScreen: (arg: 'Q' | 'A') => void;
};

export type QuestionBoxProps = {
  svg: any;
  text: string | ReactElement;
  bottom: string;
  right: string;
};

//answer

export type InsuePlannerAnswerProps = {
  question: string;
  setCurrentScreen: (arg: 'Q' | 'A') => void;
};

export type HistoryItemProps = {
  selected: boolean;
  title: string;
  contents: string;
  setCurrentQuestion: (arg: string) => void;
};
