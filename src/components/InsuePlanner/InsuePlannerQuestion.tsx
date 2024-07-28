import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Selector from '@components/commons/Selector';
import { ReactComponent as GraphicChart } from '@/assets/icons/InsuePlanner/GraphicChart.svg';
import { ReactComponent as Insurance } from '@/assets/icons/InsuePlanner/Insurance.svg';
import { ReactComponent as Airplane } from '@/assets/icons/InsuePlanner/Airplane.svg';
import QuestionBox from '@components/InsuePlanner/QuestionBox';
import type { InsuePlannerQuestionProps } from '@/types/InsuePlannerComponents';

function InsuePlannerQuestion({ setLoading }: InsuePlannerQuestionProps) {
  const [text, setText] = useState<string>('');
  const [canQuestion, setCanQuestion] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (text.length >= 4) {
      setCanQuestion(true);
      setVisible(false);
    } else {
      setCanQuestion(false);
    }
  }, [text]);

  const questionBtnClickHandler = () => {
    if (!canQuestion) {
      setVisible(true);
      return;
    }

    console.log('questionClick');
    setLoading(true);
    //api 처리
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // setLoading(false);
  };
  return (
    <>
      <Title>
        <TitleP>보험에 대한 고민,</TitleP>
        <TitleP>
          먼저 AI <TitleTitle>인슈플래너</TitleTitle>가 도와줄게요!
        </TitleP>
      </Title>
      <Subtitle>궁금한점을 물어보세요!</Subtitle>
      <InputContainer>
        <InputWrapperWrapper>
          <InputWrapper>
            <Input
              onChange={(e) => {
                setText(e.currentTarget.value);
              }}
              value={text}
              placeholder="보험에 대한 고민을 최대한 자세히 적어주세요.&#10;단, 개인정보는 외부 유출의 위험이 있어 제외하고 작성해주세요."
              maxLength={300}
            />
            <InputNumber>{text.length} / 300</InputNumber>
          </InputWrapper>
          <InputShareWrapper>
            <InputShareLeft visible={visible}>질문 내용을 입력해 주세요.</InputShareLeft>
            <InputShareRight>
              <Selector type={'square'} check={check} setCheck={setCheck} />
              <InputShareWrapperP>전체 게시판에 질문 내용 공유하기</InputShareWrapperP>
            </InputShareRight>
          </InputShareWrapper>
        </InputWrapperWrapper>
        <InputBtn onClick={questionBtnClickHandler} canquestion={canQuestion}>
          질문하기
        </InputBtn>
      </InputContainer>
      <QuestionContainer>
        <QuestionText>이런 고민이 궁금하지 않나요?</QuestionText>
        <QuestionBoxWrapper>
          <QuestionBox
            svg={<GraphicChart width={216} height={217} />}
            bottom={'20'}
            right={'5'}
            text={'10년 뒤 어떤보험이 필요할까요?'}
          />
          <QuestionBox
            svg={<Insurance width={207} height={207} />}
            bottom={'25'}
            right={'5'}
            text={'보험에 대해 잘 모르겠어요.'}
          />
          <QuestionBox
            svg={<Airplane width={374} height={375} />}
            bottom={'-4'}
            right={'-13'}
            text={
              <>
                해외여행 가기 전<br />
                보험 가입이 필요할까요?
              </>
            }
          />
        </QuestionBoxWrapper>
      </QuestionContainer>
    </>
  );
}

export default InsuePlannerQuestion;

const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 600;
  color: #000;
  line-height: 1.1;
  margin-bottom: 4.4rem;
`;

const TitleP = styled.p``;

const TitleTitle = styled.span`
  display: inline;
  color: ${({ theme }) => theme.colors.Primary500};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.Black500};
  margin-bottom: 3rem;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 2.4rem;
  margin-bottom: 6.4rem;
`;

const InputWrapperWrapper = styled.div`
  width: 85%;
`;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 1.6rem;
`;

const Input = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.Black100};
  height: 15.7rem;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.small};
  padding: 3rem;
  outline: none;
  border-radius: 3rem;
  overflow: hidden;

  &::placeholder {
    color: #adadad;
    line-height: 1.4;
  }
`;

const InputNumber = styled.p`
  position: absolute;
  bottom: 12%;
  right: 4%;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #adadad;
`;

const InputShareWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InputShareLeft = styled.p<{ visible: boolean }>`
  margin-left: 2.8rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #ff6f6f;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;
const InputShareRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const InputShareWrapperP = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.Black500};
`;

const InputBtn = styled.button<{ canquestion: boolean }>`
  border: none;
  height: 15.7rem;
  width: 15%;
  cursor: pointer;
  ${({ theme }) => theme.common.flexCenter};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 500;
  background-color: ${({ theme, canquestion }) => (canquestion ? theme.colors.Primary500 : theme.colors.Black100)};
  color: #fff;
  border-radius: 3rem;
`;

const QuestionContainer = styled.div``;

const QuestionBoxWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
`;

const QuestionText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.Black500};
  font-weight: 400;
  margin-bottom: 7rem;
`;
