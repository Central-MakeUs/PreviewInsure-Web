import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { HistoryItemProps } from '@/types/InsuePlannerComponents';
import media from '@styles/media';

function HistoryItem({
  idx,
  title,
  contents,
  setCurrentQuestion,
  qnaBoardId,
  setHistoryQuestionId,
  setOpenModal,
  historyQId,
}: HistoryItemProps) {
  const [selected, setSelected] = useState(idx === 0);

  const historyItemClickHandler = () => {
    setCurrentQuestion(contents);
    setHistoryQuestionId(qnaBoardId);
    setOpenModal?.(false);
  };

  useEffect(() => {
    if (historyQId) {
      setSelected(historyQId === qnaBoardId);
    }
  }, [historyQId]);

  return (
    <Container selected={selected} onClick={historyItemClickHandler}>
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
  transition: all 0.3s ease-in-out;

  &:hover {
    border-left: 9px solid ${({ theme }) => theme.colors.Secondary500};
    background-color: ${({ theme }) => theme.colors.Primary500};
    color: #fff;
  }
  ${media.mobile`
    // 767 < 
    padding-left: 4rem;
    height: 16rem;
  `}
`;

const Title = styled.p`
  text-align: start;
  width: 60%;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${media.mobile`
    // 767 < 
    font-size: 4rem;
  `}
`;

const Contents = styled.p`
  text-align: start;
  width: 60%;
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${media.mobile`
    // 767 < 
    font-size: 14px;
  `}
`;
