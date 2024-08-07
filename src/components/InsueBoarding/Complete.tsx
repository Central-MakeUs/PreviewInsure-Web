import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loading from '@components/commons/Loading';

type insure = {
  insuranceType: string;
  insuranceCompany: string;
};

type CompleteProps = {
  birthYear: number;
  birthMonth: number;
  gender: 'M' | 'W' | null;
  insures: insure[];
};

function Complete({ birthYear, birthMonth, gender, insures }: CompleteProps) {
  const [loading, setLoading] = useState(true);
  const nickname = '춤추는 부엉이';

  useEffect(() => {
    console.log(birthYear, birthMonth, gender);
    console.log(insures);

    //로딩 끝나면 -> api 통신
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Container>
      {loading ? (
        <>
          <LoadingSubtitle>
            <SubtitleP>입력한 정보를 기반으로</SubtitleP>
            <SubtitleP>인슈 맵을 제작하고 있어요</SubtitleP>
          </LoadingSubtitle>
          <LoadingWrapper>
            <Loading type={'spinningBubbles'} color={'#6879FB'} width={69.33} height={69.33} />
          </LoadingWrapper>
        </>
      ) : (
        <>
          <Subtitle>
            <SubtitleP>{nickname}님의 인슈 맵이 생성되었어요!</SubtitleP>
          </Subtitle>
        </>
      )}
    </Container>
  );
}

export default Complete;

const Container = styled.div`
  /* border: 1px solid #000; */
`;

//loading
const LoadingSubtitle = styled.p`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 600;
  color: #000;
  line-height: 1.1;
  margin-bottom: 7rem;
  margin-top: 15rem;
`;

const SubtitleP = styled.p``;

const LoadingWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
`;

// Loading complete
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
