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
};

function InsureCard({ text, rotate, SVG, getData }: InsueCardProps) {
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
    <Card rotate={rotate}>
      <CardFront>
        <GradientBackground />
        <InsueName>{text}</InsueName>
        <SVGWrapper>{SVG}</SVGWrapper>
      </CardFront>
      <CardBack>
        <GradientBackground />
        <InsueName>{text}</InsueName>
        <SelectWrapper>
          <Button onClick={() => setShowMenu(!showMenu)}>
            {insureCompany}{' '}
            {!showMenu ? (
              <>
                <DownSelector width={13} height={8} fill={'#fff'} />
              </>
            ) : (
              <>
                <UpSelector width={13} height={8} fill={'#fff'} />
              </>
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

const Card = styled.div<{ rotate: boolean }>`
  position: relative;
  width: 18.4rem;
  height: 20rem;
  border-radius: 1.6rem;
  //뒤집기
  transform: perspective(800px) ${({ rotate }) => (rotate ? 'rotateY(180deg)' : 'rotateY(0)')};
  transition: transform 0.3s;
  transform-style: preserve-3d;
  background: #fff;
  /* border: 1px solid ${({ theme }) => theme.colors.Primary500}; */

  & > * {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    backface-visibility: hidden;
    position: absolute;
    /* background: linear-gradient(to bottom right, rgba(104, 121, 251, 0.4), rgba(255, 255, 255, 0)); */
  }
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
`;

const SVGWrapper = styled.div`
  position: absolute;
  top: 10%;

  ${media.large`
  top: 20%;
    `}
`;

const SelectWrapper = styled.div`
  width: 14rem;
  /* height: 4.8rem; */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: flex-start; */
  position: absolute;
  top: 25%;
`;

const Button = styled.button`
  width: 14rem;
  height: 4.8rem;
  margin-top: 6rem;
  outline: none;
  background-color: ${({ theme }) => theme.colors.Primary500};
  border: none;
  border-radius: 1.6rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  transition: all 0.3s ease-in-out;
`;

const InsureContents = styled.div<{ open: boolean }>`
  margin-top: 0.3rem;
  width: 110%;
  max-height: ${({ open }) => (open ? '25rem' : 0)};
  /* border: 1px solid #000; */
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const InsureContent = styled.button`
  outline: none;
  background-color: ${({ theme }) => theme.colors.Primary500};
  border: none;
  color: #fff;
  width: 14rem;
  height: 4.8rem;
  cursor: pointer;
  display: flex;
  margin-right: 1rem;
  align-items: center;
  justify-content: center;
  /* text-align: start; */

  &:hover {
    background-color: ${({ theme }) => theme.colors.Primary400};
  }
`;
