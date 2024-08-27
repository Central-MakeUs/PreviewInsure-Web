import React from 'react';
import media from '@styles/media';
import styled from 'styled-components';
import { useStore } from '@stores/useStore';
import Map from '@components/InsueMap2/Map';
import { useInsueListQuery } from '@apis/account/account';

function InsueMap2Screen() {
  const { nickName } = useStore();
  const { insurancesQuery } = useInsueListQuery();

  return (
    <Container>
      <Background />
      <TitleWrapper>
        <Title>
          <p>{nickName}님의 인슈맵은</p>
          <p>이정도네요!</p>
        </Title>
        <BtnGroup>
          <Btn>보유보험 {insurancesQuery?.data?.length}개</Btn>
          <Btn>
            미보유보험{' '}
            {isNaN(insurancesQuery?.data?.length as number) ? '?' : 11 - (insurancesQuery?.data?.length as number)}개
          </Btn>
        </BtnGroup>
      </TitleWrapper>
      <MapWrapper>
        <Map />
      </MapWrapper>
    </Container>
  );
}

export default InsueMap2Screen;

const Container = styled.div`
  ${media.mobile`
    height: calc(100vh - 18rem - 78px); // header + nav
    background: ${({ theme }: any) => `linear-gradient(${theme.colors.Primary500}, ${theme.colors.Primary200})`};
    display:flex;
    flex-direction:column;
  `};
`;

const Background = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.Primary500};
  position: fixed;
  top: 0;
  z-index: -1;
`;

const TitleWrapper = styled.div`
  ${media.mobile`
    /* padding: 16px; */
    padding: 16px 32px;
    /* border: 1px solid #000; */
  `}
`;

const Title = styled.p`
  ${media.mobile`
    font-weight: 600;
    font-size: 20px;
    color: #fff;
    line-height: 1.4;
    margin-bottom: 12px;
  `}
`;

const BtnGroup = styled.div`
  ${media.mobile`
    display: flex;
    gap: 8px;
  `}
`;

const Btn = styled.div`
  ${media.mobile`
    width: fit-content;
    height: 28px;
    border-radius: 40px;
    background-color: ${({ theme }: any) => theme.colors.Primary300};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #fff;
    font-weight: 400;
    padding: 7px 15px;
  `}
`;

const MapWrapper = styled.div`
  ${media.mobile`
    /* border: 1px solid #000; */
    flex-grow: 1;
    padding-top: 90px;
    padding-bottom: 60px;
  `}
`;
