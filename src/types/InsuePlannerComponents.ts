import { ReactElement } from 'react';

export type InsuePlannerQuestionProps = {
  setLoading: (arg: boolean) => void;
};

export type QuestionBoxProps = {
  svg: any;
  text: string | ReactElement;
  bottom: string;
  right: string;
};
