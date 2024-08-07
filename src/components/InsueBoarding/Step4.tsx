import React, { useState } from 'react';
import styled from 'styled-components';
import InsureCard from '@components/commons/InsureCard';

import { ReactComponent as Car } from '@/assets/icons/InsueCard/Car.svg';
import { ReactComponent as HeartBeat } from '@/assets/icons/InsueCard/HeartBeat.svg';
import { ReactComponent as Health } from '@/assets/icons/InsueCard/Health.svg';
import { ReactComponent as HospitalSign } from '@/assets/icons/InsueCard/HospitalSign.svg';
import { ReactComponent as ToothBraces } from '@/assets/icons/InsueCard/ToothBraces.svg';
import { ReactComponent as MoneyBag } from '@/assets/icons/InsueCard/MoneyBag.svg';
import { ReactComponent as PetFootprint } from '@/assets/icons/InsueCard/PetFootprint.svg';
import { ReactComponent as PiggyBank } from '@/assets/icons/InsueCard/PiggyBank.svg';
import { ReactComponent as Book } from '@/assets/icons/InsueCard/Book.svg';
import { ReactComponent as WheelChair } from '@/assets/icons/InsueCard/WheelChair.svg';
import { ReactComponent as CI } from '@/assets/icons/InsueCard/CI.svg';

import { ReactComponent as Check } from '@/assets/icons/Selector.svg';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

type StepProps = {
  goNextStep: () => void;
  goPreviousStep: () => void;
  setSelectedInsures: any;
  setToSelectInsures: any;
};

function Step4({ goNextStep, goPreviousStep, setSelectedInsures, setToSelectInsures }: StepProps) {
  const [cardRotate, setCardRotate] = useState(false);

  const initialCards = [
    { text: '생명보험', SVG: <HeartBeat width={157} height={157} /> },
    { text: '건강보험', SVG: <Health width={140} height={140} /> },
    { text: '상해보험', SVG: <HospitalSign width={133} height={133} /> },
    { text: 'CI보험', SVG: <CI width={120} height={124} /> },
    { text: '치아보험', SVG: <ToothBraces width={147} height={147} /> },
    { text: '간병/치매보험', SVG: <WheelChair width={130} height={130} /> },
    { text: '연금보험', SVG: <MoneyBag width={127} height={127} /> },
    { text: '교육보험', SVG: <Book width={130} height={130} /> },
    { text: '저축보험', SVG: <PiggyBank width={127} height={127} /> },
    { text: '애견보험', SVG: <PetFootprint width={113} height={113} /> },
    { text: '자동차보험', SVG: <Car width={136} height={146} /> },
  ];
  const [selectedCards, setSelectedCards] = useState<any>([]);
  const [toSelectCards, setToSelectCards] = useState(initialCards);

  const handleSelectCardClick = (card: any) => {
    setSelectedCards(selectedCards.filter((c: any) => c.text !== card.text));
    const index = initialCards.findIndex((c: any) => c.text === card.text);
    setToSelectCards((prevState) => [...prevState.slice(0, index), { ...card }, ...prevState.slice(index)]);
  };

  const handleToSelectedCardClick = (card: any) => {
    const index = toSelectCards.findIndex((c: any) => c.text === card.text);
    setSelectedCards([...selectedCards, { ...card }]);
    // setToSelectCards((prevState) => prevState.filter((_, i) => i !== index));
    setToSelectCards(toSelectCards.filter((c: any) => c.text !== card.text));
  };

  const registerInsures = () => {
    setSelectedInsures([...selectedCards]);
    setToSelectInsures([...toSelectCards]);
    goNextStep();
  };
  return (
    <>
      <Subtitle>
        <SubtitleP>가입한 보험을 모두 선택해 주세요</SubtitleP>
      </Subtitle>

      <Selected>
        <TransitionGroup component={null}>
          {selectedCards.map((card: any, index: number) => (
            <CSSTransition key={card.text} timeout={300} classNames="card">
              <SelectedButtonWrapper>
                <CardButton onClick={() => handleSelectCardClick(card)}>
                  <InsureCard text={card.text} rotate={cardRotate} SVG={card.SVG} />
                </CardButton>
                <ButtonShadow></ButtonShadow>
              </SelectedButtonWrapper>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Selected>

      <ToSelect>
        <TransitionGroup component={null}>
          {toSelectCards.map((card, index) => (
            <CSSTransition key={card.text} timeout={300} classNames="card">
              <CardButton onClick={() => handleToSelectedCardClick(card)}>
                <InsureCard text={card.text} rotate={true} SVG={card.SVG} />
              </CardButton>
            </CSSTransition>
          ))}
        </TransitionGroup>
        <Screen></Screen>
      </ToSelect>

      <RegisterBtn onClick={registerInsures}>
        <Check width={25} height={25} fill={'#fff'} />다 골랐어요!
      </RegisterBtn>
    </>
  );
}

export default Step4;

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

const CardButton = styled.button`
  border: none;
  background-color: inherit;
`;

const Selected = styled.div`
  height: 23rem;
  max-width: 80%;
  /* border: 1px solid #000; */
  margin-bottom: 4.4rem;
  display: flex;
  justify-content: flex-start;
  gap: 3rem;
  overflow-y: hidden;

  .card-enter {
    opacity: 0;
    transform: translateY(50%);
  }
  .card-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity 300ms,
      transform 300ms;
  }
  .card-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .card-exit-active {
    opacity: 0;
    transform: translateY(50%);
    transition:
      opacity 300ms,
      transform 300ms;
  }
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
  overflow-x: scroll;
  position: relative;

  .card-enter {
    opacity: 0;
    transform: translateY(50%);
  }
  .card-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity 300ms,
      transform 300ms;
  }
  .card-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .card-exit-active {
    opacity: 0;
    transform: translateY(50%);
    transition:
      opacity 300ms,
      transform 300ms;
  }
`;

const Screen = styled.div`
  position: absolute;
  /* border: 1px solid #000; */
  bottom: 0;
  width: 100%;
  height: 4rem;
  background: #fff;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
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
