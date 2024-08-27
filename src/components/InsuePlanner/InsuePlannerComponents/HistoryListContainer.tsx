import React from 'react';
import styled from 'styled-components';
import SearchBar from '@components/commons/SearchBar';
import { ReactComponent as Magnifier } from '@/assets/icons/Magnifier.svg';
import { ReactComponent as Close } from '@/assets/icons/Close.svg';
import HistoryItem from './HistoryItem';
import type { HistoryListContainerProps } from '@/types/InsuePlannerComponents';
import media from '@styles/media';

function HistoryListContainer({
  history,
  setCurrentQuestion,
  setHistoryQuestionId,
  setOpenModal,
  historyQId,
}: HistoryListContainerProps) {
  const historySearchHandler = () => {
    console.log('history Search Click');
  };

  return (
    <HistoryListContainerr>
      <TitleWrapper>
        <TitleHistory>History</TitleHistory>
        <CloseIconBox onClick={() => setOpenModal?.(false)}>
          <Close width={'100%'} height={'100%'} fill={'#434343'} />
        </CloseIconBox>
      </TitleWrapper>

      <SearchBarWrapper>
        <SearchBar
          backgroundColor={'#f8f8f8'}
          icon={
            <IconBox>
              <Magnifier width={'100%'} height={'100%'} fill={'#000'} />
            </IconBox>
          }
          handler={historySearchHandler}
          height={7.7}
          placeholder={'질문내역 검색'}
        />
      </SearchBarWrapper>
      <HistoryList>
        {history &&
          history.map((e, i) => (
            <HistoryItem
              key={i}
              idx={i}
              qnaBoardId={e.qnaBoardId}
              title={e.insuranceType}
              contents={e.title}
              setCurrentQuestion={setCurrentQuestion}
              setHistoryQuestionId={setHistoryQuestionId}
              setOpenModal={setOpenModal}
              historyQId={historyQId}
            />
          ))}
      </HistoryList>
    </HistoryListContainerr>
  );
}

export default HistoryListContainer;

const HistoryListContainerr = styled.div`
  ${media.mobile`
    // 767 < 
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
  `}
`;

const TitleWrapper = styled.div`
  ${media.mobile`
    // 767 < 
    display:flex;
    padding:6rem 4rem 2rem 5.5rem;
    justify-content: space-between;
    align-items: center;
  `}
`;

const TitleHistory = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.Black500};
  line-height: 1.5;
  margin-bottom: 2.4rem;

  ${media.mobile`
    // 767 < 
    
    font-size: 5rem;
    margin-bottom: 0;
  `}
`;

const CloseIconBox = styled.div`
  display: none;
  ${media.mobile`
    display:block;
    width:5rem;
    height:5rem;
  `}
`;

const SearchBarWrapper = styled.div`
  margin-bottom: 2.4rem;

  ${media.mobile`
    display:none;
  `}
`;

const HistoryList = styled.div`
  height: 28rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  ${media.mobile`
    // 767 < 
    /* height:100%; */
    flex-grow: 1;
  `}
`;

const IconBox = styled.div`
  width: 2.7rem;
  height: 2.9rem;
`;
