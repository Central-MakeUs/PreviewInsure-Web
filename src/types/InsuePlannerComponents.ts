import { ReactElement } from 'react';

export type InsuePlannerQuestionProps = {
  titleSize: string;
  SubtitleSize: string;
  paragraphSize: string;
  setLoading: (arg: boolean) => void;
};

export type InsuePlannerLoadingProps = {
  SubtitleSize: string;
};

export type QuestionBoxProps = {
  svg: any;
  fontSize: string;
  text: string | ReactElement;
  bottom: string;
  right: string;
};
