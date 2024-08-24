import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InsureCard from '@components/commons/InsureCard';

import { ReactComponent as Check } from '@/assets/icons/Approve.svg';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { initialCards } from '@/static/insurebordCards';
import media from '@styles/media';
import { useStore } from '@stores/useStore';

type StepProps = {
  goNextStep: () => void;
  goPreviousStep: () => void;
  setSelectedInsures: any;
  setToSelectInsures: any;
};

function Step4({ goNextStep, goPreviousStep, setSelectedInsures, setToSelectInsures }: StepProps) {
  const [cardRotate, setCardRotate] = useState(false);

  const [selectedCards, setSelectedCards] = useState<any>([]);
  const [toSelectCards, setToSelectCards] = useState(initialCards);

  //mobile 일 때
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767); //767
  window.addEventListener('resize', function (e: any) {
    if (e.currentTarget.innerWidth <= 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  // platform === ios  일 때 처리
  const { platform } = useStore();
  const [fake, setFake] = useState(true);
  useEffect(() => {
    if (platform === 'ios') {
      setSelectedCards(initialCards);

      setTimeout(() => {
        setFake(false);
        setSelectedCards([]);
      }, 100);
      // setSelectedCards([]);
    } else {
      setFake(false);
    }
  }, []);

  const handleSelectCardClick = (card: any) => {
    setSelectedCards(selectedCards.filter((c: any) => c.text !== card.text));
    const index = initialCards.findIndex((c: any) => c.text === card.text);
    setToSelectCards((prevState) => [...prevState.slice(0, index), { ...card }, ...prevState.slice(index)]);
  };

  const handleToSelectedCardClick = (card: any) => {
    const index = toSelectCards.findIndex((c: any) => c.text === card.text);
    if (isMobile) {
      setSelectedCards([{ ...card }, ...selectedCards]);
    } else {
      setSelectedCards([...selectedCards, { ...card }]);
    }
    setToSelectCards((prevState) => prevState.filter((_, i) => i !== index));
    // setToSelectCards(toSelectCards.filter((c: any) => c.text !== card.text));
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

      <Selected fake={fake as boolean}>
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
                <Screen></Screen>
              </CardButton>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ToSelect>

      <RegisterBtn onClick={registerInsures}>
        <CheckIconBox>
          <Check width={'100%'} height={'100%'} fill={'#fff'} />
        </CheckIconBox>
        다 골랐어요!
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

  ${media.mobile`
    // 767 < 
    font-size: 22px;
  `}
`;

const SubtitleP = styled.p``;

const CardButton = styled.div`
  border: none;
  padding: 0;
  background-color: inherit;
  cursor: pointer;
  position: relative;
`;

const Selected = styled.div<{ fake: boolean }>`
  height: 23rem;
  max-width: 80%;
  /* border: 1px solid #000; */
  margin-bottom: 4.4rem;
  display: flex;
  justify-content: flex-start;
  gap: 3rem;
  overflow-y: hidden;

  scrollbar-width: none;
  -ms-overflow-style: none; //drag 기능 추가

  opacity: ${({ fake }) => (fake ? 0 : 1)};

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

  ${media.mobile`
    // 767 < 
    margin-bottom: 5rem;
    /* max-width:72%; */
    gap: 5rem;
    height: 40rem;

    max-width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
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
  /* height: 50rem; */
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 10rem;
  padding-left: 1rem;
  padding-right: 1rem;
  overflow-y: hidden;
  overflow-x: scroll;
  position: relative;

  scrollbar-width: none;
  -ms-overflow-style: none; //drag 기능 추가

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

  ${media.mobile`
    // 767 < 
    gap: 1.5rem;
    margin-bottom:20rem;
  `}
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.Primary500};
    transition: 0.5s;
  }

  ${media.mobile`
    // 767 < 
    position: fixed;
    bottom: 12%;

    width:80%;
    font-size:14px;
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
    width: 28px;
    height: 28px;
  `}
`;
