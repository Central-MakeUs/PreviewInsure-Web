import { QuestionAnswerProps } from '@/types/QuestionComponents';
import styled from 'styled-components';
import { ReactComponent as Up } from '@assets/icons/Up.svg';

import Colors from '@styles/Colors';
import { useState } from 'react';
import media from '@styles/media';
function QuestionAnswer({ question, answer, tags }: QuestionAnswerProps) {
  const isLongText = answer.length > 160;
  const [viewLong, setViewLong] = useState(false);

  return (
    <Container>
      <Line>
        <Question>
          <span>Q.&nbsp;</span>
          <span>{question}</span>
        </Question>
        {isLongText &&
          (viewLong ? (
            <DetailBtn onClick={() => setViewLong(false)}>
              <span>접기</span>
              <Up width={38} height={30} fill={Colors.Black500} />
            </DetailBtn>
          ) : (
            <DetailBtn onClick={() => setViewLong(true)}>
              <span>상세보기</span>
              <Up width={38} height={30} fill={Colors.Black500} style={{ transform: 'rotate(180deg)' }} />
            </DetailBtn>
          ))}
      </Line>
      <Flex>
        <span>A.&nbsp;</span>
        {viewLong ? <Answer>{answer}</Answer> : <Preview>{answer}</Preview>}
      </Flex>
      <TagGroup>
        {tags.map((tag) => (
          <TagItem key={tag}>{tag}</TagItem>
        ))}
      </TagGroup>
      <GapLine />
    </Container>
  );
}

const Container = styled.div``;
const GapLine = styled.div`
  ${({ theme }) => media.mobile`
    width: 98vw;
    padding-top: 8rem;
    position: relative;
    left: -11%;
    border-bottom: 5px solid ${theme.colors.Black_W};
  `}
`;
const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.3rem;

  ${media.mobile`
    margin-bottom: 4rem;
    align-items: flex-start;
  `}
`;
const DetailBtn = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.Black500};

  ${({ theme }) => media.mobile`
    span {
        display: none;
    }
    path {
        fill: ${theme.colors.Primary500};
        stroke: ${theme.colors.Primary500};
    }
  `}
`;

const Flex = styled.div`
  display: flex;
  font-weight: 400;

  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.Black500};

  ${media.small`
    font-size: 14px;
    margin-bottom: 4rem;
  `}
`;

const Question = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.Primary500};
  line-height: normal;
  display: flex;

  ${media.small`
    font-size: 16px;
  `}
`;
const Preview = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.Black500};
  line-height: normal;
  margin-bottom: 2.4rem;
  flex-direction: column;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;

  ${media.small`
    font-size: 14px;
    margin-bottom: 4rem;
  `}
`;
const Answer = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.Black500};
  line-height: normal;
  margin-bottom: 2.4rem;
  white-space: pre-line;

  ${media.small`
    font-size: 14px;
    margin-bottom: 4rem;
  `}
`;
const TagGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
`;
const TagItem = styled.div`
  background-color: ${({ theme }) => theme.colors.Black_W};
  border-radius: 12px;
  padding: 2rem;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.Primary500};

  ${media.small`
    padding: 10px;
    font-size: 14px;
  `}
`;
export default QuestionAnswer;
