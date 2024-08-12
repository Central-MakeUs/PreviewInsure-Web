import styled from 'styled-components';
import type { QuestionBoxProps } from '@/types/InsuePlannerComponents';
import media from '@styles/media';

function QuestionBox({ svg, text, bottom, right, setQuestion, value, setCurrentScreen }: QuestionBoxProps) {
  return (
    <QuestionBoxWrapper>
      <QuestionBoxSvg
        bottom={bottom}
        right={right}
        onClick={() => {
          setQuestion(value);
          setCurrentScreen('A');
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
