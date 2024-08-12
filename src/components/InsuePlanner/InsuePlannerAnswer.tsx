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

//dummy data
// 질문 리스트
const data = [
  {
    qnaBoardId: 0,
    title: '난 지금 운전자 보험에 가입하고 싶어. 이번에 처음 가입하는거야.',
    insuranceType: '운전자 보험',
  },
  {
    qnaBoardId: 1,
    title: '안녕하세요!',
    insuranceType: '운전자 보험',
  },
  {
    qnaBoardId: 2,
    title: '질문입니다',
    insuranceType: '상해 보험',
  },
  {
    qnaBoardId: 3,
    title: '배가고파요',
    insuranceType: '교육 보험',
  },
];

const answer = {
  text: '안녕하세요! 운전자 보험에 대해 상담해드리겠습니다. 운전자 보험은 사고 시 법률 비용, 벌금, 치료비 등을 보장해주는 보험입니다. 고객님의 요청사항을 바탕으로 가격이 저렴하고 실속 있는 운전자 보험 상품 세 가지를 추천드립니다.<br/><br/> 1. 삼성화재 운전자보험 특징: 교통사고 처리 지원금 변호사 선임비용 교통사고 벌금 지원 입원비 및 상해 치료비 보장 <br/><br/>2. 현대해상 운전자보험 특징: 자동차 사고 벌금 및 변호사 비용 보장 교통사고 처리 지원금 중상해 치료비 보장',
  links: [
    {
      insuranceCompany: '삼성화재 운전자보험',
      insuranceLink: 'https://www.hanwhalife.com/index.jsp',
    },
    {
      insuranceCompany: '현대해상 운전자보험',
      insuranceLink: 'https://www.hanwhalife.com/index.jsp',
    },
    {
      insuranceCompany: 'KB손해보험 운전자보험',
      insuranceLink: 'https://www.hanwhalife.com/index.jsp',
    },
  ],
};

function InsuePlannerAnswer({ question, setCurrentScreen }: InsuePlannerAnswerProps) {
  const [currentQuestionId, setCurrentQuestionId] = useState(1); //api 연동 후 사용
  const [currentQuestion, setCurrentQuestion] = useState(question);
  const [currentAnswer, setCurrentAnswer] = useState(answer.text);
  const [currentAnswerLinks, setCurrentAnswerLinks] = useState(answer.links);

  useEffect(() => {
    //질문이 바뀌면 answer 초기화
    console.log('currentQuestion:', currentQuestion);
    setCurrentAnswer('');
    // setCurrentAnswer(answer.text);
  }, [currentQuestion]);

  useEffect(() => {
    // answer 가  ''가 되면 다시 answer 리로딩
    setCurrentAnswer(answer.text);
  }, [currentAnswer]);

  const historySearchHandler = () => {
    console.log('history Search Click');
  };

  const goBack = () => {
    setCurrentScreen('Q');
  };

  const anotherPlannerAsk = () => {
    console.log('anotherPlannerAsk click');
  };

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
          {data.map((e, i) => (
            <HistoryItem
              selected={false}
              title={e.insuranceType}
              contents={e.title}
              setCurrentQuestion={setCurrentQuestion}
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
