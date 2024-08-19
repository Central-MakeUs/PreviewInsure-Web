import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InsureCard from '@components/commons/InsureCard';
import { ReactComponent as Check } from '@/assets/icons/Approve.svg';
import { convertInsureType } from '@utils/common/convertInsureType';
import media from '@styles/media';

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
    selectedInsures.map((card: any) => ({
      insuranceType: convertInsureType(card.text),
      insuranceCompany: 'KB손해보험',
    })),
  );

  const getData = (cardInsureType: string, cardInsureCompany: string) => {
    const newInsureCardInfos = insureCardInfos.map((e) => {
      if (e.insuranceType === convertInsureType(cardInsureType) && e.insuranceCompany !== cardInsureCompany) {
        return { ...e, insuranceCompany: cardInsureCompany };
      }
      return e;
    });
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

      <SelectedBoxBlock>
        <SelectedBox>
          <Selected>
            {selectedInsures.map((card: any, index: number) => (
              <SelectedButtonWrapper>
                <InsureCard text={card.text} rotate={cardRotate} SVG={card.SVG} getData={getData} delay={index} />
                <ButtonShadow></ButtonShadow>
              </SelectedButtonWrapper>
            ))}
          </Selected>
        </SelectedBox>
      </SelectedBoxBlock>
      {/* <SelectedBox>
        <Selected>
          {selectedInsures.map((card: any, index: number) => (
            <SelectedButtonWrapper>
              <InsureCard text={card.text} rotate={cardRotate} SVG={card.SVG} getData={getData} delay={index} />
              <ButtonShadow></ButtonShadow>
            </SelectedButtonWrapper>
          ))}
        </Selected>
      </SelectedBox> */}

      <ToSelect>
        {toSelectInsures.map((card: any, index: number) => (
          <ToSelectBtnWrapper>
            <InsureCard text={card.text} rotate={true} SVG={card.SVG} />
            <Screen></Screen>
          </ToSelectBtnWrapper>
        ))}
      </ToSelect>
      <RegisterBtn onClick={registerInsureDetail}>
        <CheckIconBox>
          <Check width={'100%'} height={'100%'} fill={'#fff'} />
        </CheckIconBox>
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

const SelectedBoxBlock = styled.div`
  position: relative;
  width: 100%;
  height: 23rem;
  margin-bottom: 4.4rem;

  ${media.mobile`
    // 767 < 
    margin-bottom: 5rem;
    width:100%;
    height: 40rem;
  `}
`;

const SelectedBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-width: 80%;
  /* top: 40%; */
  top: 0%;

  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  z-index: 4;

  ${media.large`
    top: -15%;
  `}

  ${media.medium`
    top: 1%; 
  `}

  ${media.small`
    // 767 < 
    /* top: 19%; */
  `}

  ${media.mobile`
    // 767 < 
    /* top: 36%; */
    top: 0%;
    /* max-width: 72%; */
    max-width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
  `}
`;

const Selected = styled.div`
  width: fit-content;
  height: 50rem;
  overflow: visible;

  display: flex;
  justify-content: flex-start;
  gap: 3rem;

  ${media.mobile`
    // 767 < 
    gap: 5rem;
  `}
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
  margin-bottom: 10rem;
  padding-left: 1rem;
  padding-right: 1rem;
  overflow-y: hidden;
  position: relative;

  scrollbar-width: none;
  -ms-overflow-style: none; //drag 기능 추가

  ${media.mobile`
    // 767 < 
    gap: 1.5rem;
    margin-bottom:20rem;
  `}
`;

const ToSelectBtnWrapper = styled.div`
  position: relative;
`;

const Screen = styled.div`
  position: absolute;
  /* border: 1px solid #000; */
  top: 30%;
  width: 100%;
  height: 7rem;
  /* background: #fff; */
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);

  ${media.mobile`
    // 767 < 
    height: 6rem;
    top: 40%;
  `}
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
  z-index: 5;

  &:hover {
    background-color: ${({ theme }) => theme.colors.Primary500};
    transition: 0.5s;
  }

  ${media.mobile`
    // 767 < 
    position: fixed;
    bottom: 12%;

    width:80%;
    font-size:3.2rem;
    font-weight:400;
    height:10rem;
    border-radius: 2.8rem;
  `}
`;

const CheckIconBox = styled.div`
  width: 4.5rem;
  height: 4.5rem;

  ${media.mobile`
    // 767 < 
    width: 6rem;
    height: 6rem;
  `}
`;
