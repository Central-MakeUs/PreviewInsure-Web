import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as PartyPopper } from '@/assets/icons/PartyPopper.svg';
import { useNavigate } from 'react-router-dom';

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
        <Title>회원가입</Title>
        <Subtitle>
          <SubtitleP>
            <SubTitleTitle>프리뷰인슈</SubTitleTitle>의 회원이 되신것을 환영해요!
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
`;

const Title = styled.h1`
  font-weight: 600;
  display: block;
  margin-bottom: 3.4rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.Black500};
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
`;

const IconBox = styled.div`
  width: 68.6rem;
  height: 68.6rem;
`;
