import styled from 'styled-components';
import type { QuestionBoxProps } from '@/types/InsuePlannerComponents';

function QuestionBox({ svg, text, bottom, right }: QuestionBoxProps) {
  return (
    <QuestionBoxWrapper>
      <QuestionBoxSvg bottom={bottom} right={right}>
        {svg}
      </QuestionBoxSvg>
      <QuestionBoxText>{text}</QuestionBoxText>
    </QuestionBoxWrapper>
  );
}

export default QuestionBox;

const QuestionBoxWrapper = styled.div`
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
`;
