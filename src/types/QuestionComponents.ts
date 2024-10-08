export type CategoryProps = {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isSelected: boolean;
};

export type TagItem = {
  insuranceCompany: string;
  link: string;
};

export type QuestionAnswerProps = {
  question: string;
  answer: string;
  tags: TagItem[];
};
