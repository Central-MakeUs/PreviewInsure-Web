import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { InsuePlannerAnswerProps } from '@/types/InsuePlannerComponents';
import { ReactComponent as Chatting } from '@/assets/icons/Chatting.svg';
import { ReactComponent as Menu } from '@/assets/icons/InsuePlanner/Menu.svg';
import AnswerQuestionBox from './InsuePlannerComponents/QuestionBox';
import AnswerBox from './InsuePlannerComponents/AnswerBox';
import media from '@styles/media';
import HistoryListContainer from './InsuePlannerComponents/HistoryListContainer';
import InsuePlannerAnswerMobileModal from './InsuePlannerComponents/InsuePlannerAnswerMobileModal';

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

  const goBack = () => {
    setCurrentScreen('Q');
  };

  const anotherPlannerAsk = () => {
    console.log('anotherPlannerAsk click');
  };

  //apis
  useEffect(() => {
    // 최초 실행 시 히스토리 목록 조회
    if (questionTitleQuery.isFetched) {
      setHistory([...(questionTitleQuery.data ?? [])].reverse() as QuestionTitle[]);
    }
  }, [questionTitleQuery.isFetched, questionTitleQuery.isRefetching]); // isRefetching도 추가해주어서 post후 invalidateQueries 되었을 때, 다시 초기화하는 과정 트래킹

  // axios question detail 조회
  const getQuestionDetailAPI = async (id: number) => {
    const res = await getQuestionDetail(id);
    console.log(res);
    setCurrentAnswer(res.answer);
    setCurrentAnswerLinks(res.links);
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

  //mobile design
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767); //767
  window.addEventListener('resize', function (e: any) {
    if (e.currentTarget.innerWidth <= 767) {
      // 다시 수정
      //767  -> 기존 모바일
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <HistoryContainer>
        <TitleWrapper>
          <Title>
            <p>안녕하세요!</p>
            <TitleP>
              AI 상담사, 인슈플래너에요.
              <ChattingIConBox>
                {' '}
                <Chatting width={'100%'} height={'100%'} fill="#6879FB" />
              </ChattingIConBox>
            </TitleP>
          </Title>
          <MenuIconBox onClick={() => setOpenModal(true)}>
            <Menu width={'100%'} height={'100%'} />
          </MenuIconBox>
        </TitleWrapper>

        <Paragraph>
          <p>가벼운 질문을 하기에 부담스러웠나요?</p>
          <p>AI 상담사 인슈플래너가 자세히 알려줄게요.</p>
          <p>궁금한 모든 것을 질문 해 보세요!</p>
        </Paragraph>
        {isMobile ? (
          // mobile
          <InsuePlannerAnswerMobileModal
            element={
              <HistoryListContainer
                history={history}
                setCurrentQuestion={setCurrentQuestion}
                setHistoryQuestionId={setHistoryQuestionId}
                setOpenModal={setOpenModal}
                historyQId={historyQuestionId}
              />
            }
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        ) : (
          // web
          <HistoryListContainer
            history={history}
            setCurrentQuestion={setCurrentQuestion}
            setHistoryQuestionId={setHistoryQuestionId}
            historyQId={historyQuestionId}
          />
        )}
      </HistoryContainer>
      <TextContainer>
        <TextWrapper>
          <QuestionWrapper>
            <AnswerQuestionBox text={currentQuestion} />
          </QuestionWrapper>
          <AnswerWrapper>
            <AnswerBox text={currentAnswer} links={currentAnswerLinks as any} />
          </AnswerWrapper>
        </TextWrapper>
        <BtnGroup>
          <Btn onClick={goBack}>다른 질문하러 돌아가기</Btn>
          <Btn onClick={anotherPlannerAsk}>다시 답변받기</Btn>
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
    flex-direction:column;
    padding: 3rem 4.8rem;
    height: calc(100vh - 40rem);
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

  ${media.mobile`
    // 767 < 
    width: 100%;
    height:fit-content;
    background-color: #fff;
  `}
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const MenuIconBox = styled.div`
  display: none;

  ${media.mobile`
    display:block;
    width:6rem;
    height:3rem;
  `}
`;

const Title = styled.p`
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.Primary500};
  line-height: 1.5;
  margin-bottom: 2.4rem;
  text-align: start;

  ${media.mobile`
    // 767 < 
    font-size: 20px;
    line-height: 1;
    margin-bottom: 27px;
  `}
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

  ${media.mobile`
    // 767 < 
    font-size: 4rem;
    line-height: 1.3;
  `}
`;

//right

const TextContainer = styled.div`
  width: 70%;
  height: 79.4rem;

  ${media.mobile`
    width: 100%;
    /* height: 79.4rem; */
    flex-grow:1;
  `}
`;

const TextWrapper = styled.div`
  width: 100%;
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

  ${media.mobile`
  margin-bottom: 4rem;
  `}
`;

const AnswerWrapper = styled.div``;

const BtnGroup = styled.div`
  width: 100%;
  height: 13%;
  ${({ theme }) => theme.common.flexCenter};
  gap: 1.6rem;
`;

const Btn = styled.button`
  min-width: 28rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.Black100};
  font-size: ${({ theme }) => theme.fontSizes.small};
  padding: 2rem 3.6rem;
  color: #fff;
  border-radius: 3.2rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.Black200};
  }

  ${media.mobile`
      border-radius: 30px;
      padding: 3rem 3.6rem;
      font-size: 12px;
      height: 42px;
      width: 164px;
  `}
`;

const ChattingIConBox = styled.div`
  width: 3.6rem;
  height: 3.6rem;

  ${media.mobile`
    // 767 < 
    width: 24px;
    height: 24px;
  `}
`;
