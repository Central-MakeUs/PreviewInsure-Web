export type CategoryProps = {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isSelected: boolean;
};

export type QuestionAnswerProps = {
  question: string;
  answer: string;
  tags: string[];
};
