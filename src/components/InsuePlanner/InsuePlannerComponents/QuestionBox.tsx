import React from 'react';
import styled from 'styled-components';
import { ReactTyped } from 'react-typed';

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
`;
