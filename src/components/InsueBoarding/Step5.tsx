import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InsureCard from '@components/commons/InsureCard';
import { ReactComponent as Check } from '@/assets/icons/Selector.svg';

type insure = {
  insuranceType: string;
  insuranceCompany: string;
};

type Step5Props = {
  selectedInsures: any;
  toSelectInsures: any;
  setInsures: (arg: insure[]) => void;
  setComplete: (arg: boolean) => void;
};

function Step5({ selectedInsures, toSelectInsures, setInsures, setComplete }: Step5Props) {
  const [cardRotate, setCardRotate] = useState(false);
  const [insureCardInfos, setInsureCardInfos] = useState<any[]>(
    selectedInsures.map((card: any) => ({ insuranceType: card.text, insuranceCompany: 'KB손해보험' })),
  );

  const getData = (cardInsureType: string, cardInsureCompany: string) => {
    // console.log(cardInsureType, cardInsureCompany);
    const newInsureCardInfos = insureCardInfos.map((e) => {
      if (e.insuranceType === cardInsureType && e.insuranceCompany !== cardInsureCompany) {
        return { ...e, insuranceCompany: cardInsureCompany };
      }
      return e;
    });
    // console.log(newInsureCardInfos);
    setInsureCardInfos(newInsureCardInfos);
  };

  const registerInsureDetail = () => {
    // getData();
    // console.log('return', insureCardInfos);
    setInsures(insureCardInfos);
    setComplete(true);
  };

  useEffect(() => {
    // console.log(selectedInsures);
    setCardRotate(true);
  }, []);

  return (
    <>
      <Subtitle>
        <SubtitleP>현재 사용중인 보험사를 선택해 주세요</SubtitleP>
      </Subtitle>
      <Selected>
        {selectedInsures.map((card: any, index: number) => (
          <SelectedButtonWrapper>
            <InsureCard text={card.text} rotate={cardRotate} SVG={card.SVG} getData={getData} />
            <ButtonShadow></ButtonShadow>
          </SelectedButtonWrapper>
        ))}
      </Selected>
      <ToSelect>
        {toSelectInsures.map((card: any, index: number) => (
          <InsureCard text={card.text} rotate={true} SVG={card.SVG} />
        ))}
        <Screen></Screen>
      </ToSelect>
      <RegisterBtn onClick={registerInsureDetail}>
        <Check width={25} height={25} fill={'#fff'} />
        입력 완료!
      </RegisterBtn>
    </>
  );
}

export default Step5;

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

const Selected = styled.div`
  height: 23rem;
  max-width: 90%;
  /* border: 1px solid #000; */
  margin-bottom: 4.4rem;
  display: flex;
  justify-content: flex-start;
  gap: 3rem;
  /* overflow-x: scroll; */ //버그 수정 필요
  /* overflow-y: visible; */
  z-index: 10;
`;

const SelectedButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonShadow = styled.div`
  margin-top: 1.5rem;
  width: 21.5rem;
  height: 1.3rem;
  background: radial-gradient(rgba(102, 102, 102, 0.4), rgba(115, 115, 115, 0));
  border-radius: 50%;
`;

const ToSelect = styled.div`
  max-width: 100%;
  height: 10rem;
  /* border: 1px solid #000; */
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  overflow-y: hidden;
  position: relative;
`;

const Screen = styled.div`
  position: absolute;
  /* border: 1px solid #000; */
  bottom: 0;
  width: 100%;
  height: 4rem;
  background: #fff;
`;

const RegisterBtn = styled.button`
  width: 86.6rem;
  height: 7.4rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.Primary400};
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
