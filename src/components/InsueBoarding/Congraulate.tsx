import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as PartyPopper } from '@/assets/icons/PartyPopper.svg';
import { useNavigate } from 'react-router-dom';
import media from '@styles/media';

function Congratulate() {
  const navigate = useNavigate();

  let [count, setCount] = useState(3);
  const interval = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    interval.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  useEffect(() => {
    if (count < 0) {
      navigate('/');
    }
  }, [count]);

  return (
    <>
      <Container>
        <Title>인슈보딩</Title>
        <Subtitle>
          <SubtitleP>
            <SubTitleTitle>프리뷰인슈</SubTitleTitle>와 내 보험을 그려보세요!
          </SubtitleP>
        </Subtitle>
        <SVGWrapper>
          <IconBox>
            <PartyPopper width={'100%'} height={'100%'} />
          </IconBox>

          <Explain>{count}초 뒤 메인화면으로 이동합니다.</Explain>
        </SVGWrapper>
      </Container>
    </>
  );
}

export default Congratulate;

const Container = styled.div`
  padding: 7.6rem 0;
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  position: relative;

  ${media.mobile`
    // 767 < 
    min-height: calc(100vh - 32rem);
    justify-content: flex-start;
    margin-top: 140px;
  `}
`;

const Title = styled.h1`
  font-weight: 600;
  display: block;
  margin-bottom: 3.4rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.Black500};

  ${media.mobile`
    // 767 < 
    font-size: 12px;
  `}
`;

const SubTitleTitle = styled.span`
  display: inline;
  color: ${({ theme }) => theme.colors.Primary500};
`;

const Subtitle = styled.p`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 600;
  color: #000;
  line-height: 1.1;
  margin-bottom: 6.8rem;

  ${media.mobile`
    // 767 < 
    font-size: 22px;
  `}
`;

const SubtitleP = styled.p``;

const SVGWrapper = styled.div`
  position: absolute;
  top: 0%;
  display: flex;
  justify-content: center;
`;

const Explain = styled.p`
  color: ${({ theme }) => theme.colors.Black500};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  flex-direction: column;
  text-align: center;
  line-height: 1.5;
  position: absolute;
  bottom: 15%;

  ${media.mobile`
    // 767 < 
    font-size: 13px;
  `}
`;

const IconBox = styled.div`
  width: 68.6rem;
  height: 68.6rem;
`;
