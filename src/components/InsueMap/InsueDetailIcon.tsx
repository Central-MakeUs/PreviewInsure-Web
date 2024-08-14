import GradientBackground from '@components/commons/GradientBackground';
import media from '@styles/media';
import { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

function InsueDetailIcon({
  frontTxt,
  backTxt,
  backTitle,
  Icon,
  frontActive = false,
  backActive,
}: InsueDetailIconProps) {
  const [view, setView] = useState<'Front' | 'Back'>('Front');

  const handleView = () => {
    setView((cur) => (cur === 'Front' ? 'Back' : 'Front'));
  };

  useEffect(() => {
    setView('Front');
  }, [frontActive]);

  const handleRegistMove = () => {
    // TODO: 수정하기/등록하기 navigate
    console.log('clicked!');
  };

  return (
    <Container onClick={handleView}>
      <MiniCircle />
      <ColorBack view={view === 'Back'} coloractive={backActive}>
        <BackContent view={view === 'Back'}>
          <Txt1 position={backTitle ? 'T' : 'M'}>{backTxt}</Txt1>
          <Txt2>{backTitle}</Txt2>
          <BackBtn onClick={handleRegistMove}>{backTitle ? '수정하기' : '등록하기'}</BackBtn>
        </BackContent>
      </ColorBack>
      <Front view={view === 'Front'}>
        <Blur />
        {frontActive ? <GradientBackground /> : <GrayGradientBackground />}

        <FrontContent iconactive={frontActive}>
          <Icon width={'100%'} height={'100%'} />
          <span>{frontTxt}</span>
        </FrontContent>
      </Front>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const MiniCircle = styled.div`
  position: absolute;
  top: 25px;
  left: 25px;
  width: 13px;
  height: 13px;
  background-color: white;
  border-radius: 100%;
  z-index: 4;

  ${media.small`
  top: 13px;
  left: 13px;
  width: 9px;
  height: 9px;
  `};
`;

const rotateFront1 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(50deg) translate(-19%, 43%);
  }
  45% {
    transform: rotate(80deg) translate(-12%, 70%);
  }
  75% {
    transform: rotate(50deg) translate(-19%, 43%);
  }
  100% {
    transform: rotate(11deg) translate(-8%, 8%);
  }
`;

const rotateFront2 = keyframes`
  0% {
    transform: rotate(11deg) translate(-8%, 8%);
  }
  20% {
    transform: rotate(50deg) translate(-19%, 43%);
  }
  45% {
    transform: rotate(80deg) translate(-12%, 70%);
  }
  75% {
    transform: rotate(50deg) translate(-19%, 43%);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Front = styled.div<{ view: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 3.5rem;
  overflow: hidden;
  transform: rotate(-0.157deg);
  transition: transform 200ms ease;

  ${({ view }) =>
    view
      ? css`
          animation: ${rotateFront2} 0.5s ease-in-out forwards;
        `
      : css`
          animation: ${rotateFront1} 0.5s ease-in-out forwards;
        `}

  ${media.mobile`
    border-radius: 5rem;
  `};
`;

const GrayGradientBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 3.5rem;

  box-sizing: border-box;
  background-clip: padding-box;

  padding: 3px;
  background: linear-gradient(to bottom right, rgba(170, 170, 170, 0.5), rgba(170, 170, 170, 0)),
    radial-gradient(farthest-corner at 0% 100%, rgba(255, 255, 255, 0) 0%, rgba(170, 170, 170, 0.25) 100%),
    linear-gradient(to bottom right, rgba(255, 255, 255, 0.5), rgba(170, 170, 170, 0.3), rgba(255, 255, 255, 0.5));
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0),
    radial-gradient(farthest-corner at 0 0, rgba(170, 170, 170, 0) 0%, rgba(255, 255, 255, 0) 80%);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  backdrop-filter: blur(1px);

  ${media.mobile`
    padding: 2px;
    border-radius: 5rem;
  `};
`;

const Blur = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(7px);
`;
const rotateBack1 = keyframes`
  0% {
    transform: rotate(0deg);
    z-index: 3;
  }
  100% {
    transform: rotate(-11deg) translate(9%, -6%);
  }
`;

const rotateBack2 = keyframes`
  0% {
    transform: rotate(-11deg) translate(9%, -6%);
  }
  100% {
    transform: rotate(0deg);
    z-index: 3;
  }
`;
const ColorBack = styled.div<{ view: boolean; coloractive: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 3.3rem;
  position: absolute;

  background-color: ${(props) => (props.coloractive ? props.theme.colors.Primary500 : props.theme.colors.Black200)};

  ${({ view }) =>
    view
      ? css`
          animation: ${rotateBack2} 0.5s ease-in-out forwards;
        `
      : css`
          animation: ${rotateBack1} 0.5s ease-in-out forwards;
        `}

  ${media.mobile`
    border-radius: 5rem;
  `};
`;

const FrontContent = styled.div<{ iconactive: boolean }>`
  position: absolute;
  padding: 2.2rem 3.1rem 4rem 3.1rem;
  z-index: 2;

  ${media.mobile`
    padding: 4.4rem 6.1rem 8rem 6.2rem;
  `}

  path {
    opacity: ${({ iconactive }) => (iconactive ? 1 : 0.3)};
  }

  span {
    display: block;
    text-align: center;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: white;

    ${media.mobile`
    font-size: 11px;
  `};
  }
`;
const BackContent = styled.div<{ view: boolean }>`
  height: 100%;
  position: relative;

  opacity: ${({ view }) => (view ? 1 : 0)};
  visibility: ${({ view }) => (view ? 'visible' : 'hidden')};
  transition:
    opacity 0.6s ease-in-out,
    visibility 0.6s ease-in-out;
`;

const Txt1 = styled.p<{ position: 'T' | 'M' }>`
  position: absolute;
  top: ${({ position }) => (position === 'T' ? '6.3rem' : '40%')};
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: normal;
  white-space: pre-wrap;
  text-align: center;

  ${media.mobile`
    font-size: 11px;
  `};
`;

const Txt2 = styled.p`
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.subtitle};

  ${media.mobile`
    font-size: 18px;
  `};
`;

const BackBtn = styled.button`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 2.7rem;
  border: 0px;
  min-width: 12rem;
  width: fit-content;
  min-height: 4.4rem;
  height: fit-content;
  color: ${({ theme }) => theme.colors.Primary500};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.small};

  ${media.mobile`
    font-size: 12px;
  `};
`;
export default InsueDetailIcon;
