import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { InsuePlannerAnswerProps } from '@/types/InsuePlannerComponents';
import { ReactComponent as Chatting } from '@/assets/icons/Chatting.svg';
import { ReactComponent as Magnifier } from '@/assets/icons/Magnifier.svg';
import SearchBar from '@components/commons/SearchBar';
import HistoryItem from './InsuePlannerComponents/HistoryItem';
import AnswerQuestionBox from './InsuePlannerComponents/QuestionBox';
import AnswerBox from './InsuePlannerComponents/AnswerBox';
import media from '@styles/media';

import {
  useGetQuestionTitleQuery,
  useGetQuestionDetailQuery,
  getQuestionDetail,
} from '@apis/insuePlanner/insuePlanner';
import type { QuestionTitle } from '@apis/insuePlanner/insuePlanner.d';

function InsuePlannerAnswer({
  question,
  setCurrentScreen,
  currentAnswer,
  currentAnswerLinks,
  setCurrentAnswer,
  setCurrentAnswerLinks,
}: InsuePlannerAnswerProps) {
  const [currentQuestion, setCurrentQuestion] = useState(question);
  const [history, setHistory] = useState<QuestionTitle[]>([]);
  const [historyQuestionId, setHistoryQuestionId] = useState<number | null>();

  // query
  const { questionTitleQuery } = useGetQuestionTitleQuery();
  // const { questionDetailQuery } = useGetQuestionDetailQuery(historyQuestionId!);  // 최초 패칭 문제(null값 패칭), 캐싱 문제 (데이터 로드가 안됨)

  const historySearchHandler = () => {
    console.log('history Search Click');
  };

  const goBack = () => {
    setCurrentScreen('Q');
  };

  const anotherPlannerAsk = () => {
    console.log('anotherPlannerAsk click');
  };

  //apis
  useEffect(() => {
    // 최초 실행 시 히스토리 목록 조회
    // console.log(
    //   'Fetched:',
    //   questionTitleQuery.isFetched,
    //   'Loading:',
    //   questionTitleQuery.isLoading,
    //   'Refetching:',
    //   questionTitleQuery.isRefetching,
    //   'Data:',
    //   questionTitleQuery?.data,
    // );
    if (questionTitleQuery.isFetched) {
      setHistory([...(questionTitleQuery.data ?? [])].reverse() as QuestionTitle[]);
    }
  }, [questionTitleQuery.isFetched, questionTitleQuery.isRefetching]); // isRefetching도 추가해주어서 post후 invalidateQueries 되었을 때, 다시 초기화하는 과정 트래킹

  // axios question detail 조회
  const getQuestionDetailAPI = async (id: number) => {
    const res = await getQuestionDetail(id);
    console.log(res);
    setCurrentAnswer(res.answer);
  };

  useEffect(() => {
    console.log('historyId', historyQuestionId);
    if (historyQuestionId) {
      getQuestionDetailAPI(historyQuestionId as number);
    }
  }, [historyQuestionId]);

  //reqct query question detail 조회
  // useEffect(() => {
  //   console.log(historyQuestionId, questionDetailQuery);
  //   if (historyQuestionId !== -1) {
  //     questionDetailQuery.refetch();
  //   }
  // }, [historyQuestionId]);

  // useEffect(() => {
  //   if (questionDetailQuery.isFetched && questionDetailQuery?.data) {
  //     console.log(questionDetailQuery.isLoading, questionDetailQuery?.data);
  //     // const resData = questionDetailQuery?.data;
  //     setCurrentAnswer(questionDetailQuery?.data?.answer as string);
  //   }
  // }, [questionDetailQuery.isFetched]);

  return (
    <Container>
      <HistoryContainer>
        <Title>
          <p>안녕하세요!</p>
          <TitleP>
            AI 상담사, 인슈플래너에요.
            <Chatting width={36} height={36} fill="#6879FB" />
          </TitleP>
        </Title>
        <Paragraph>
          <p>가벼운 질문을 하기에 부담스러웠나요?</p>
          <p>AI 상담사 인슈플래너가 자세히 알려줄게요.</p>
          <p>궁금한 모든 것을 질문 해 보세요!</p>
        </Paragraph>
        <TitleHistory>History</TitleHistory>
        <SearchBarWrapper>
          <SearchBar
            backgroundColor={'#f8f8f8'}
            icon={<Magnifier width={27} height={29} fill={'#000'} />}
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
                qnaBoardId={e.qnaBoardId}
                selected={false}
                title={e.insuranceType}
                contents={e.title}
                setCurrentQuestion={setCurrentQuestion}
                setHistoryQuestionId={setHistoryQuestionId}
              />
            ))}
        </HistoryList>
      </HistoryContainer>
      <TextContainer>
        <TextWrapper>
          <QuestionWrapper>
            <AnswerQuestionBox text={currentQuestion} />
          </QuestionWrapper>
          <AnswerWrapper>
            <AnswerBox text={currentAnswer} links={currentAnswerLinks} />
          </AnswerWrapper>
        </TextWrapper>
        <BtnGroup>
          <Btn onClick={goBack}>다른 질문하러 돌아가기</Btn>
          <Btn onClick={anotherPlannerAsk}>다른 플래너에게 답변 받기</Btn>
        </BtnGroup>
      </TextContainer>
    </Container>
  );
}

export default InsuePlannerAnswer;

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 5rem 14.4rem;
  gap: 2rem;

  ${media.mobile`
    // 767 < 
    padding: 3rem 7.8rem;
  `}
`;

//left

const HistoryContainer = styled.div`
  width: 30%;
  height: 79.4rem;
  border-radius: 2.4rem;
  background-color: #fafbff;
  padding-left: 2.9rem;
  padding-right: 2.9rem;
  padding-top: 5.8rem;
`;

const Title = styled.p`
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.Primary500};
  line-height: 1.5;
  margin-bottom: 2.4rem;
  text-align: start;
`;

const TitleP = styled.p`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const Paragraph = styled.p`
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.Primary500};
  line-height: 1.5;
  margin-bottom: 2.4rem;
  text-align: start;
  margin-bottom: 7.3rem;
`;

const TitleHistory = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.Black500};
  line-height: 1.5;
  margin-bottom: 2.4rem;
`;

const SearchBarWrapper = styled.div`
  margin-bottom: 2.4rem;
`;

const HistoryList = styled.div`
  height: 28rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

//right

const TextContainer = styled.div`
  width: 70%;
  height: 79.4rem;
`;

const TextWrapper = styled.div`
  width: 100%;
  /* border: 1px solid #000; */
  background-color: #fafbff;
  border-radius: 2.4rem;
  height: 85%;
  margin-bottom: 2rem;
  padding: 5rem 1.8rem 2rem 1.8rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const QuestionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const AnswerWrapper = styled.div``;

const BtnGroup = styled.div`
  width: 100%;
  height: 13%;
  ${({ theme }) => theme.common.flexCenter};
  gap: 1.6rem;
`;

const Btn = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.Black100};
  padding: 2rem 3.6rem;
  color: #fff;
  border-radius: 3.2rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.Black200};
  }
`;
