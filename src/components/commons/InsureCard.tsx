import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import media from '@styles/media';
import { ReactComponent as DownSelector } from '@/assets/icons/DownSelector.svg';
import { ReactComponent as UpSelector } from '@/assets/icons/UpSelector.svg';
import { insures } from '@/static/insures';
import GradientBackground from './GradientBackground';

type InsueCardProps = {
  text: string;
  rotate: boolean;
  SVG: any;
  getData?: any; //step5에서  보험종류, 보험회사  정보 가져올 때 사용
  delay?: number; // 도미노 효과 부여
};

function InsureCard({ text, rotate, SVG, getData, delay = 0 }: InsueCardProps) {
  const [insureCompany, setInsureCompany] = useState('KB손해보험');
  const [showMenu, setShowMenu] = useState(false);

  // useEffect(() => {
  //   console.log(text, insureCompany);
  // }, [insureCompany]);

  const clickInsureSelectBtn = (insure: string) => {
    setInsureCompany(insure);
    setShowMenu(false);
    getData(text, insure); // step5에서 사용
  };

  return (
    <Card rotate={rotate} delay={delay}>
      <CardFront>
        <GradientBackground insueBoarding={true} />
        <InsueName>{text}</InsueName>
        <SVGWrapper>{SVG}</SVGWrapper>
      </CardFront>
      <CardBack>
        <GradientBackground insueBoarding={true} />
        <InsueName>{text}</InsueName>
        <SelectWrapper>
          <Button showMenu={showMenu} onClick={() => setShowMenu(!showMenu)}>
            {insureCompany}{' '}
            {!showMenu ? (
              <IconBox>
                <DownSelector width={'100%'} height={'100%'} fill={'#fff'} />
              </IconBox>
            ) : (
              <IconBox>
                <UpSelector width={'100%'} height={'100%'} fill={'#fff'} />
              </IconBox>
            )}
          </Button>
          <InsureContents open={showMenu}>
            {insures.map((e, i) => (
              <InsureContent onClick={() => clickInsureSelectBtn(e)}>{e}</InsureContent>
            ))}
          </InsureContents>
        </SelectWrapper>
      </CardBack>
    </Card>
  );
}

export default InsureCard;

const Card = styled.div<{ rotate: boolean; delay: number }>`
  position: relative;
  width: 18.4rem;
  height: 20rem;
  border-radius: 1.6rem;
  //뒤집기
  transform: perspective(800px) ${({ rotate }) => (rotate ? 'rotateY(180deg)' : 'rotateY(0)')};
  transition: transform 0.3s;
  transition-delay: ${({ delay }) => `${delay * 0.3}s`};
  transform-style: preserve-3d;
  /* background: #fff; */
  /* border: 1px solid ${({ theme }) => theme.colors.Primary500}; */

  & > * {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    backface-visibility: hidden;
    position: absolute;
    /* background: linear-gradient(to bottom right, rgba(104, 121, 251, 0.4), rgba(255, 255, 255, 0)); */
  }

  ${media.mobile`
    // 767 < 
    width: 31rem;
    height: 34rem;
  `}
`;

const CardFront = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  align-items: center;
  /* position: relative; */
`;
const CardBack = styled.div`
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  align-items: center;
`;

const InsueName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.Primary500};
  font-weight: 600;

  ${media.mobile`
    // 767 < 
    font-size: ${({ theme }: any) => theme.fontSizes.subtitle};
    margin-top:2rem;
  `}
`;

const SVGWrapper = styled.div`
  position: absolute;
  top: 20%;
`;

const SelectWrapper = styled.div`
  width: 14rem;
  /* height: 4.8rem; */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: flex-start; */
  position: absolute;
  top: 25%;

  ${media.mobile`
    top: 30%;
    left:6%;
    width: 24rem;
  `}
`;

const Button = styled.button<{ showMenu: boolean }>`
  width: 14rem;
  height: 4.8rem;
  margin-top: 6rem;
  outline: none;
  background-color: ${({ theme }) => theme.colors.Primary500};
  font-size: ${({ theme }) => theme.fontSizes.small};
  border: none;
  border-radius: 1.6rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  ${media.mobile`
    /* width: 24rem; */
    width: 110px;
    height: 40px;
    border-radius: ${({ showMenu }: any) => (!showMenu ? '32px' : '')};
    gap: 2rem;
    font-size: 13px;
    border-top-left-radius: ${({ showMenu }: any) => (showMenu ? '32px' : '')};
    border-top-right-radius: ${({ showMenu }: any) => (showMenu ? '32px' : '')};
    border-bottom-left-radius: ${({ showMenu }: any) => (showMenu ? '0' : '')};
    border-bottom-right-radius: ${({ showMenu }: any) => (showMenu ? '0' : '')};
    border-bottom: ${({ showMenu }: any) => (showMenu ? '1.5px solid #fff' : '')};
    transition-delay: 0.3s;
  `}
`;

const InsureContents = styled.div<{ open: boolean }>`
  margin-top: 0.3rem;
  width: 100%;
  max-height: ${({ open }) => (open ? '25rem' : 0)};
  /* max-height: 25rem; */
  /* display: ${({ open }) => (open ? 'block' : 'none')}; */
  border-radius: 1.6rem;
  transition: all 0.3s ease-in-out;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.mobile`
    width:110px;
    /* border-radius: 3rem; */
    margin-top: 0;

    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
  `}
`;

const InsureContent = styled.button`
  outline: none;
  background-color: ${({ theme }) => theme.colors.Primary500};
  font-size: ${({ theme }) => theme.fontSizes.small};
  border: none;
  color: #fff;
  width: 14rem;
  height: 4.8rem;
  cursor: pointer;
  display: flex;
  margin-right: 1rem;
  align-items: center;
  justify-content: center;
  border-bottom: 1.5px solid #fff;
  /* text-align: start; */

  &:hover {
    background-color: ${({ theme }) => theme.colors.Primary400};
  }

  ${media.mobile`
    width: 100%;
    height: 8rem;
    font-size: 13px;
    margin-right: 0;
  `}
`;

const IconBox = styled.div`
  width: 1.3rem;
  height: 0.8rem;
  position: relative;
  bottom: 18%;

  ${media.medium`
    bottom: 27%;
  `}
  ${media.small`
    bottom: 36%;
  `}
  ${media.mobile`
    bottom: 8%;
    width: 2.5rem;
    height: 2.5rem;
  `}
`;
