import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import media from '@styles/media';
import { ReactComponent as DownSelector } from '@/assets/icons/DownSelector.svg';
import { ReactComponent as UpSelector } from '@/assets/icons/UpSelector.svg';
import { insures } from '@/static/insures';

type InsueCardProps = {
  id: number;
  type: string;
  text: string;
  SVG?: React.FC<React.SVGProps<SVGSVGElement>>;
  company: string;
  handleInsue?: any;
};

function InsueBarItem({ id, type, text, SVG, company, handleInsue }: InsueCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  const clickInsureSelectBtn = (insure: string) => {
    setShowMenu(false);
    handleInsue(id, type, insure);
  };

  return (
    <Card>
      <Bar>
        {SVG && <SVG width={'23%'} height={'78%'} />}
        <InsueName>{text}</InsueName>

        <SelectWrapper>
          <Button onClick={() => setShowMenu(!showMenu)}>
            <span>{company} </span>
            <IconBox>
              {!showMenu ? (
                <DownSelector width={'100%'} height={'100%'} fill={'#fff'} />
              ) : (
                <UpSelector width={'100%'} height={'100%'} fill={'#fff'} />
              )}
            </IconBox>
          </Button>

          <InsureContents open={showMenu}>
            {insures.map((e, i) => (
              <InsureContent onClick={() => clickInsureSelectBtn(e)}>{e}</InsureContent>
            ))}
          </InsureContents>
        </SelectWrapper>
      </Bar>
    </Card>
  );
}

export default InsueBarItem;

const Card = styled.div`
  width: 43rem;
  position: relative;

  ${media.mobile`
  width: 100%;
  `}
`;

const Bar = styled.div`
  background-color: ${({ theme }) => theme.colors.Primary_W};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 2rem 1rem 1rem;
  width: 100%;
  height: 12rem;
  border-radius: 2.4rem;

  ${media.mobile`
    padding: 2rem;
    height: 22rem;
    border-radius: 6rem;
  `}
`;

const InsueName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.Primary500};
  min-width: fit-content;
  font-weight: 500;
  margin: 0 auto;
  text-align: center;

  ${media.mobile`
    // 767 < 
    font-size: 16px;
  `}
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 17rem;
  margin-left: auto;
  height: 5rem;

  ${media.mobile`
    width: 32rem;
    height: 11rem;
  `}
`;
const Button = styled.button`
  width: 100%;
  outline: none;
  background-color: ${({ theme }) => theme.colors.Primary500};
  border: none;
  border-radius: 1.6rem;
  color: #fff;
  display: flex;
  padding: 1.4rem 2.4rem;

  gap: 1rem;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  ${media.mobile`
    padding: 2rem;
    align-items: center;
    width: 95%;
    height: 11rem;
    border-radius: 4rem;
    gap: 2rem;
    font-size: 14px;
  `}

  span {
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 500;
    margin: 0 auto;

    ${media.mobile`
      font-size: 14px;
      text-overflow: ellipsis;
  `};
  }
`;
const InsureContents = styled.div<{ open: boolean }>`
  position: relative;
  z-index: 4;
  margin-top: 0.3rem;
  width: 95%;
  max-height: ${({ open }) => (open ? '25rem' : 0)};
  /* max-height: 25rem; */
  /* display: ${({ open }) => (open ? 'block' : 'none')}; */
  border-radius: 2rem;
  transition: all 0.3s ease-in-out;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.mobile`
    margin-top: 0.8rem;
    width: 90%;
    border-radius: 20px;
  `}
`;

const InsureContent = styled.button`
  outline: none;
  background-color: ${({ theme }) => theme.colors.Primary500};
  font-size: ${({ theme }) => theme.fontSizes.small};
  border: none;
  color: #fff;
  width: 100%;
  height: 4.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.Primary400};
  /* text-align: start; */

  &:hover {
    background-color: ${({ theme }) => theme.colors.Primary400};
  }

  ${media.mobile`
    height: 7rem;
    font-size: 12px;
  `}
`;

const IconBox = styled.div`
  width: 1.3rem;
  height: 98%;
  align-content: center;

  svg {
    margin: auto 0;
  }

  ${media.mobile`
    width: 2.5rem;
  `}
`;
