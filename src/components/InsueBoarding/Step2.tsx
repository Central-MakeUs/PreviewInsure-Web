import React from 'react';
import styled from 'styled-components';
import media from '@styles/media';
import { ReactComponent as Warning } from '@/assets/icons/Warning.svg';
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

      <Explain>
        <WarningIconBox>
          <Warning width={'100%'} height={'100%'} fill={'#aaa'} />
        </WarningIconBox>
        <p>성별을 선택하지 않을경우, 보험추천이 정확하지 않을 수 있어요.</p>
      </Explain>
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

  ${media.mobile`
    // 767 < 
    margin-bottom: 10rem;
  `}
`;

const SelectWrapper = styled.div`
  display: flex;
  gap: 5rem;
  align-items: center;

  ${media.mobile`
    // 767 < 
   width:80%;
   margin-bottom:6rem;
  `}
`;

const SubtitleP = styled.p``;

const RegisterBtn = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.Primary_W};
  ${({ theme }) => theme.common.flexCenter};
  color: ${({ theme }) => theme.colors.Primary500};
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
    color: #fff;
  }

  ${media.mobile`
    // 767 < 
      flex-grow:1;
      padding:3rem 3.5rem;
      font-size: ${({ theme }: any) => theme.fontSizes.subtitle};
      border-radius: 3.5rem;
  `}
`;

const Explain = styled.p`
  //mobile에만 존재
  display: none;

  ${media.mobile`
    // 767 < 
    font-size: ${({ theme }: any) => theme.fontSizes.paragraph};
    display: flex;
    color: ${({ theme }: any) => theme.colors.Black200};
    text-align: center;
    line-height: 1.5;
    gap: 1rem;
  `}
`;

const WarningIconBox = styled.div`
  width: 3.2rem;
  height: 3.2rem;
`;
