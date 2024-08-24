import styled from 'styled-components';
import type { QuestionBoxProps } from '@/types/InsuePlannerComponents';
import media from '@styles/media';

import { plannerPOSTRequest } from '@apis/insuePlanner/insuePlanner.d';

function QuestionBox({ svg, text, bottom, right, value, questionHandler }: QuestionBoxProps) {
  const questionData: plannerPOSTRequest = {
    quesion: value,
    isShare: false,
    insuranceType: 'DE', // DE 일때 400 에러 뜸
  };

  return (
    <QuestionBoxWrapper
      onClick={() => {
        questionHandler(questionData);
      }}
    >
      <QuestionBoxSvg bottom={bottom} right={right}>
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
  font-weight: 600;
  color: ${({ theme }) => theme.colors.Black500};
  text-align: left;
  font-family: 'Pretendard', sans-serif;

  ${media.mobile`
    // 767 < 
    font-size: 16px;
  `}
`;
