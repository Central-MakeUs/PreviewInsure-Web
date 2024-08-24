import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loading from '@components/commons/Loading';
import media from '@styles/media';
import { ReactComponent as RightArrow } from '@/assets/icons/DownArrowRight.svg';
import { useNavigate } from 'react-router-dom';
import { useAgeMutation, useBoardMutation } from '@apis/insueboarding/insueboarding';
import { AgeRequest, BoardRequest } from '@/apis/insueboarding/insueboarding.d';
import { useStore } from '@stores/useStore';

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
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);
  const { nickName } = useStore();
  const { ageMutation } = useAgeMutation();
  const { boardMutation } = useBoardMutation();

  const handleAPI = () => {
    setLoading(true);
    const updateAgeData: AgeRequest = {
      year: birthYear,
      month: birthMonth,
    };
    ageMutation.mutate(updateAgeData);

    const updateBoardDate: BoardRequest = {
      gender: gender,
      insureBoards: insures,
    };
    boardMutation.mutate(updateBoardDate, {
      onSuccess: (data) => {
        setLoading(false);
      },
      onError: (error) => {
        console.log('insuebording api error', error);
        setLoading(false);
      },
    });
  };

  useEffect(() => {
    console.log(birthYear, birthMonth);
    console.log(gender, insures);
    //api
    handleAPI();
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  window.addEventListener('resize', function (e: any) {
    if (e.currentTarget.innerWidth <= 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  const goInsueMap = () => {
    if (isMobile) {
      navigation('/myInsue');
    } else {
      navigation('/');
    }
  };

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
            <SubtitleP>{nickName}님의 인슈 맵이 생성되었어요!</SubtitleP>
          </Subtitle>
          {/* <InsueMap></InsueMap> */}
          <BtnWrapper>
            <RegisterBtn onClick={goInsueMap}>
              인슈 맵 보러가기
              <IconBox>
                <RightArrow width={'100%'} height={'100%'} fill={'#fff'} />
              </IconBox>
            </RegisterBtn>
          </BtnWrapper>
        </>
      )}
    </Container>
  );
}

export default Complete;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 45vh;
  justify-content: space-around;

  ${media.mobile`
    // 767 < 
    height:100rem;
  `}
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

  ${media.mobile`
    // 767 < 
    margin-top: 5rem;
    margin-bottom: 15rem;
  `}
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

const InsueMap = styled.div`
  /* border: 1px solid #000; */
  width: 100%;
  height: 44rem;
`;

const IconBox = styled.div`
  width: 4.5rem;
  height: 4.5rem;

  ${media.mobile`
    // 767 < 
    width: 6rem;
    height: 6rem;
  `}
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const RegisterBtn = styled.button`
  width: 23rem;
  height: 5.8rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.Primary_W};
  ${({ theme }) => theme.common.flexCenter};
  color: ${({ theme }) => theme.colors.Primary500};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 400;
  border-radius: 7.9rem;
  cursor: pointer;
  margin-bottom: 5rem;
  transition: all 0.3s ease;
  gap: 0.5rem;
  z-index: 5;

  ${IconBox} {
    svg {
      fill: ${({ theme }) => theme.colors.Primary500};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.Primary500};
    transition: 0.5s;
    color: #fff;

    ${IconBox} {
      svg {
        fill: #fff;
      }
    }
  }

  ${media.mobile`
    // 767 < 
    position: fixed;
    bottom: 12%;
    background-color: ${({ theme }: any) => theme.colors.Primary500};
    color:#fff;
    width:80%;
    font-size:3.2rem;
    font-weight:400;
    height:10rem;
    border-radius: 2.8rem;
    gap: 3rem;

    ${IconBox} {
    svg {
      fill: #fff;
    }
  }
  `}
`;
