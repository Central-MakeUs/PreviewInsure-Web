import React from 'react';
import styled from 'styled-components';
//성별

type StepProps = {
  goNextStep: () => void;
  goPreviousStep: () => void;
  setGender: (arg: 'M' | 'W' | null) => void;
};

function Step2({ goNextStep, goPreviousStep, setGender }: StepProps) {
  const handleSelectMen = () => {
    console.log('men');
    setGender('M');
    goNextStep();
  };
  const handleSelectWomen = () => {
    console.log('women');
    setGender('W');
    goNextStep();
  };
  const handleSkip = () => {
    setGender(null);
    goNextStep();
  };

  return (
    <>
      <Subtitle>
        <SubtitleP>성별을 선택해주세요.</SubtitleP>
      </Subtitle>
      <SelectWrapper>
        <RegisterBtn onClick={handleSelectMen}>남성</RegisterBtn>
        <RegisterBtn onClick={handleSelectWomen}>여성</RegisterBtn>
        <RegisterBtn onClick={handleSkip}>건너띄기</RegisterBtn>
      </SelectWrapper>
    </>
  );
}

export default Step2;

const Subtitle = styled.p`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 600;
  color: #000;
  line-height: 1.1;
  margin-bottom: 8.6rem;
`;

const SelectWrapper = styled.div`
  display: flex;
  gap: 5rem;
  align-items: center;
`;

const SubtitleP = styled.p``;

const RegisterBtn = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.Black100};
  ${({ theme }) => theme.common.flexCenter};
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  border-radius: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;
  gap: 1.6rem;
  padding: 1.75rem 3.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.Primary500};
    transition: 0.5s;
  }
`;
