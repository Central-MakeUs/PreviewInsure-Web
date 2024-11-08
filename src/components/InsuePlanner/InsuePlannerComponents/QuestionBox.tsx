import React from 'react';
import styled from 'styled-components';
import media from '@styles/media';

type AnswerQuestionBoxProps = {
  text: string;
};

// 인슈플래너 답안 채팅창 질문 박스
function AnswerQuestionBox({ text }: AnswerQuestionBoxProps) {
  return <Container>{text}</Container>;
}

export default AnswerQuestionBox;

const Container = styled.div`
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.colors.Primary500};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #fff;
  border-radius: 1.2rem;
  font-weight: 300;
  line-height: 1.4;

  ${media.mobile`
    // 767 < 
    font-size: 14px;
    border-radius: 12px;
    padding:14px;
  `}
`;
