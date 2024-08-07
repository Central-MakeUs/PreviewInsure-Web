import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Close } from '@/assets/icons/Close.svg';
import { ReactComponent as Heart } from '@/assets/icons/Heart.svg';

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
          <Close width={25} height={25} fill={'#fff'} /> 아니요, 없어요
        </RegisterBtn>
        <RegisterBtn onClick={handleYes}>
          <Heart width={22} height={19} fill={'#fff'} /> 네, 경험해봤어요!
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
`;

const SubtitleP = styled.p``;

const RegisterBtnGroup = styled.div`
  display: flex;
  gap: 4rem;
`;

const RegisterBtn = styled.button`
  width: 22.5rem;
  height: 6rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.Black100};
  ${({ theme }) => theme.common.flexCenter};
  color: #fff;
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
  }
`;
