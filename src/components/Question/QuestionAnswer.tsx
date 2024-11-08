import { QuestionAnswerProps, TagItem } from '@/types/QuestionComponents';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as Up } from '@assets/icons/Up.svg';

import Colors from '@styles/Colors';
import { useState } from 'react';
import media from '@styles/media';
import { openNewTab } from '@utils/common/openNewTab';
function QuestionAnswer({ question, answer, tags }: QuestionAnswerProps) {
  const isLongText = answer.length > 150;
  const [viewLong, setViewLong] = useState(false);

  function handleTag(item: TagItem) {
    openNewTab(item.link);
  }

  return (
    <Container>
      <Line>
        <Question>
          <span>Q.&nbsp;</span>
          <span>{question}</span>
        </Question>
        {isLongText && (
          <DetailBtn viewLong={viewLong} onClick={() => setViewLong((prev) => !prev)}>
            <span>{viewLong ? '접기' : '상세보기'}</span>
            <Up width={38} height={30} fill={Colors.Black500} />
          </DetailBtn>
        )}
      </Line>
      <Flex>
        <span>A.&nbsp;</span>
        {viewLong ? <Answer>{answer}</Answer> : <Preview onClick={() => setViewLong(true)}>{answer}</Preview>}
      </Flex>
      {tags && tags.length !== 0 && (
        <TagGroup>
          {tags.map((tag) => (
            <TItem onClick={() => handleTag(tag)} key={tag.insuranceCompany}>
              {tag.insuranceCompany}
            </TItem>
          ))}
        </TagGroup>
      )}
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
  align-items: start;
  margin-bottom: 2.3rem;

  ${media.mobile`
    margin-bottom: 4rem;
    align-items: flex-start;
  `}
`;

const DetailBtn = styled.div<{ viewLong: boolean }>`
  margin-top: -4px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.Black500};
  cursor: pointer;

  svg {
    transform: ${({ viewLong }) => (viewLong ? 'rotate(0deg)' : 'rotate(180deg)')};
    transition: transform 0.3s ease;
  }

  ${({ theme }) => media.mobile`
    span {
        display: none;
    }
    svg {
      width: 26px;
      height: 27px;
    }
    path {
        fill: ${theme.colors.Primary500};
        stroke: ${theme.colors.Primary500};
    }
  `}
`;

const Flex = styled.div`
  display: flex;
  margin-bottom: 2.5rem;

  span {
    font-size: ${({ theme }) => theme.fontSizes.paragraph};
    color: ${({ theme }) => theme.colors.Black500};
    font-weight: 400;

    ${media.small`
    font-size: 14px;
    line-height:1.5;
  `}
  }
  ${media.small`
      margin-bottom:4rem;
  `}
`;

const Question = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.Primary500};
  display: flex;

  ${media.small`
    font-size: 16px;
  `}

  span {
    line-height: 1.4;
  }
`;
const Preview = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.Black500};
  line-height: normal;
  flex-direction: column;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;

  ${media.small`
    font-size: 14px;
    line-height:1.5;
  `}
`;
const Answer = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.Black500};
  line-height: normal;
  white-space: pre-line;

  ${media.small`
    font-size: 14px;
    line-height:1.5;
  `}
`;
const TagGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
`;
const TItem = styled.div`
  background-color: ${({ theme }) => theme.colors.Black_W};
  border-radius: 12px;
  padding: 2rem;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.Primary500};
  cursor: pointer;

  ${media.small`
    padding: 10px 18px;
    font-size: 14px;
  `}
`;
export default QuestionAnswer;
