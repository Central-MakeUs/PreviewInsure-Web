import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Close } from '@/assets/icons/Close.svg';
import { ReactComponent as Heart } from '@/assets/icons/Heart.svg';
import media from '@styles/media';

type StepProps = {
  goNextStep: () => void;
  goPreviousStep: () => void;
  setComplete: (arg: boolean) => void;
};

function Step3({ goNextStep, goPreviousStep, setComplete }: StepProps) {
  const handleNo = () => {
    setComplete(true);
  };
  const handleYes = () => {
    goNextStep();
  };

  return (
    <>
      <Subtitle>
        <SubtitleP>보험을 사용해본 경험이 있나요?</SubtitleP>
      </Subtitle>
      <RegisterBtnGroup>
        <RegisterBtn onClick={handleNo}>
          <XIconBOx>
            <Close width={'100%'} height={'100%'} fill={'#6879FB'} />
          </XIconBOx>
          아니요, 없어요
        </RegisterBtn>
        <RegisterBtn onClick={handleYes}>
          <HeartIconBox>
            <Heart width={'100%'} height={'100%'} fill={'#6879FB'} />
          </HeartIconBox>
          네, 경험해봤어요!
        </RegisterBtn>
      </RegisterBtnGroup>
    </>
  );
}

export default Step3;

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
    margin-bottom: 10rem;
  `}
`;

const SubtitleP = styled.p``;

const RegisterBtnGroup = styled.div`
  display: flex;
  gap: 4rem;

  ${media.mobile`
    // 767 < 
    width:100%;
    justify-content: center;
  `}
`;

const HeartIconBox = styled.div`
  width: 3rem;
  height: 3rem;

  ${media.mobile`
    // 767 < 
    width: 4rem;
    height: 4rem;
  `}
`;

const XIconBOx = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  ${media.mobile`
    // 767 < 
    width: 3.5rem;
    height: 3.5rem;
  `}
`;

const RegisterBtn = styled.button`
  width: 22.5rem;
  height: 6rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.Primary_W};
  ${({ theme }) => theme.common.flexCenter};
  color: ${({ theme }) => theme.colors.Primary500};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  border-radius: 1.4rem;
  cursor: pointer;
  margin-bottom: 5rem;
  transition: all 0.3s ease;
  gap: 1.6rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.Primary500};
    transition: 0.5s;
    color: #fff;

    ${HeartIconBox} {
      svg {
        fill: #fff;
      }
    }

    ${XIconBOx} {
      svg {
        fill: #fff;
      }
    }
  }

  ${media.mobile`
    // 767 < 
    width:38%;
    height:10rem;
    font-size: ${({ theme }: any) => theme.fontSizes.paragraph};
    border-radius: 3.5rem;
  `}
`;
