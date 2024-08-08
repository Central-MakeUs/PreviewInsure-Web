import React from 'react';
import styled from 'styled-components';
import type { HistoryItemProps } from '@/types/InsuePlannerComponents';

function HistoryItem({ selected, title, contents, setCurrentQuestion }: HistoryItemProps) {
  return (
    <Container selected={selected} onClick={() => setCurrentQuestion(contents)}>
      <Title>{title}</Title>
      <Contents>{contents}</Contents>
    </Container>
  );
}

export default HistoryItem;

const Container = styled.button<{ selected: boolean }>`
  border: none;
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.6rem;
  border-left: 9px solid ${({ theme, selected }) => (selected ? theme.colors.Secondary500 : '#FAFBFF')};
  border-bottom: 0.3px solid ${({ theme }) => theme.colors.Primary500};
  background-color: ${({ theme, selected }) => (selected ? theme.colors.Primary500 : '#FAFBFF')};
  color: ${({ theme, selected }) => (selected ? '#fff' : theme.colors.Black500)};
  padding-left: 2.4rem;
  cursor: pointer;

  &:hover {
    border-left: 9px solid ${({ theme }) => theme.colors.Secondary500};
    background-color: ${({ theme }) => theme.colors.Primary500};
    color: ${({ theme }) => '#fff'};
  }
`;

const Title = styled.p`
  text-align: start;
  width: 60%;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Contents = styled.p`
  text-align: start;
  width: 60%;
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
