import styled from 'styled-components';
import type { QuestionBoxProps } from '@/types/InsuePlannerComponents';
import media from '@styles/media';

import { useInsuePlannerMutation } from '@apis/insuePlanner/insuePlanner';
import type { link } from '@apis/insuePlanner/insuePlanner.d';
import { plannerPOSTRequest } from '@apis/insuePlanner/insuePlanner.d';

function QuestionBox({
  svg,
  text,
  bottom,
  right,
  setQuestion,
  value,
  setCurrentScreen,
  setCurrentAnswer,
  setCurrentAnswerLinks,
}: QuestionBoxProps) {
  const { insuePlannerMutation } = useInsuePlannerMutation();

  const postQuestion = () => {
    //api
    const questionData: plannerPOSTRequest = {
      quesion: value,
      isShare: true,
      insuranceType: 'ED', // DE 일때 400 에러 뜸
    };
    console.log(questionData);
    insuePlannerMutation.mutate(questionData, {
      onSuccess: (data) => {
        console.log('question box API 호출 성공:', data);
        // 답변 저장
        setCurrentAnswer(data.answer as string);
        setCurrentAnswerLinks(data.links as link[]);
        // 성공 후 이동
        setCurrentScreen('A');
      },
      onError: (error) => {
        console.error('questino box API 호출 실패:', error);
      },
    });
  };

  return (
    <QuestionBoxWrapper>
      <QuestionBoxSvg
        bottom={bottom}
        right={right}
        onClick={() => {
          setQuestion(value);
          postQuestion();
          // setCurrentScreen('A');
        }}
      >
        {svg}
      </QuestionBoxSvg>
      <QuestionBoxText>{text}</QuestionBoxText>
    </QuestionBoxWrapper>
  );
}

export default QuestionBox;

const QuestionBoxWrapper = styled.button`
  border: none;
  width: 33.3%;
  height: 21.8rem;
  border-radius: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 2rem 2.8rem;
  position: relative;
  background: ${({ theme }) => `linear-gradient(to bottom, ${theme.colors.Primary100}, #fff)`};
  cursor: pointer;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.1);

  ${media.mobile`
    // 767 < 
    width: 100%;
    height: 42rem;
  `}
`;

const QuestionBoxSvg = styled.div<{ bottom: string; right: string }>`
  position: absolute;
  bottom: ${({ bottom }) => bottom}%;
  right: ${({ right }) => right}%;
`;

const QuestionBoxText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.Black500};
  text-align: left;

  ${media.mobile`
    // 767 < 
    font-size: 4rem;
  `}
`;
