import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import media from '@styles/media';
import { ReactComponent as DownSelector } from '@/assets/icons/DownSelector.svg';
import { ReactComponent as UpSelector } from '@/assets/icons/UpSelector.svg';
import { insures } from '@/static/insures';
import GradientBackground from '@/components/commons/GradientBackground';

type InsueCardProps = {
  text: string;
  SVG?: React.FC<React.SVGProps<SVGSVGElement>>;
  handleInsue?: any;
};

function InsureCard({ text, SVG, handleInsue }: InsueCardProps) {
  const [insureCompany, setInsureCompany] = useState('KB손해보험');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    console.log(text, insureCompany);
  }, [insureCompany]);

  const clickInsureSelectBtn = (insure: string) => {
    setInsureCompany(insure);
    setShowMenu(false);
    handleInsue(text, insure);
  };

  return (
    <Card>
      <CardFront>
        <GradientBackground insueBoarding={true} />
        <InsueName>{text}</InsueName>
        {SVG && <SVG width={'80%'} height={'80%'} />}
      </CardFront>

      <SelectWrapper>
        <Button onClick={() => setShowMenu(!showMenu)}>
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
    </Card>
  );
}

export default InsureCard;

const Card = styled.div`
  position: relative;
`;

const CardFront = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  align-items: center;

  width: 17.5rem;
  height: 18.9rem;

  ${media.mobile`
    // 767 < 
    width: 24rem;
    height: 26rem;
  `}

  div {
    border-radius: 2rem;
  }
`;

const InsueName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  color: ${({ theme }) => theme.colors.Primary500};
  font-weight: 600;

  ${media.mobile`
    // 767 < 
    font-size: ${({ theme }: any) => theme.fontSizes.subtitle};
    margin-top:2rem;
  `}
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 17.5rem;

  ${media.mobile`
    left:12%;
    width: 24rem;
  `}
`;
const Button = styled.button`
  width: 90%;
  margin: 0.7rem auto;
  height: 4.8rem;
  outline: none;
  background-color: ${({ theme }) => theme.colors.Primary500};
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  font-weight: 500;
  border: none;
  border-radius: 1.6rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  ${media.mobile`
    width: 24rem;
    height: 10rem;
    border-radius: 8rem;
    gap: 2rem;
    font-size: ${({ theme }: any) => theme.fontSizes.paragraph};
  `}
`;
const InsureContents = styled.div<{ open: boolean }>`
  position: absolute;
  z-index: 3;
  margin-top: 0.3rem;
  width: 100%;
  max-height: ${({ open }) => (open ? '25rem' : 0)};
  /* max-height: 25rem; */
  /* display: ${({ open }) => (open ? 'block' : 'none')}; */
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.mobile`
    margin-top: 0.8rem;
    width: 100%;
    border-radius: 3rem;
  `}
`;

const InsureContent = styled.button`
  outline: none;
  background-color: ${({ theme }) => theme.colors.Primary500};
  font-size: ${({ theme }) => theme.fontSizes.small};
  border: none;
  color: #fff;
  width: 90%;
  height: 4.8rem;
  cursor: pointer;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.Primary400};
  /* text-align: start; */

  &:hover {
    background-color: ${({ theme }) => theme.colors.Primary400};
  }

  ${media.mobile`
    width: 24rem;
    height: 7rem;
    font-size: ${({ theme }: any) => theme.fontSizes.paragraph};
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
