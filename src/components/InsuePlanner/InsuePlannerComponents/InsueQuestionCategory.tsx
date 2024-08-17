import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Down } from '@/assets/icons/Down.svg';
import { ReactComponent as Up } from '@/assets/icons/Up.svg';
import { insuranceCategories } from '@/static/insures';
import media from '@styles/media';

type InsueQuestionCategoryProps = {
  setInsureSearchCategory: (arg: string) => void;
};

function InsueQuestionCategory({ setInsureSearchCategory }: InsueQuestionCategoryProps) {
  const [insureCategory, setInsureCategory] = useState('전체 카테고리');
  const [showMenu, setShowMenu] = useState(false);

  const clickInsureSelectBtn = (insure: string) => {
    setInsureCategory(insure);
    setShowMenu(false);
    setInsureSearchCategory(insure);
  };

  return (
    <SelectWrapper>
      <Button onClick={() => setShowMenu(!showMenu)}>
        {insureCategory}
        {!showMenu ? (
          <>
            <Down width={24} height={25} fill={'#434343'} />
          </>
        ) : (
          <>
            <Up width={24} height={25} fill={'#434343'} />
          </>
        )}
      </Button>
      <InsureContents open={showMenu}>
        {insuranceCategories.map((e, i) => (
          <InsureContent onClick={() => clickInsureSelectBtn(e)}>{e}</InsureContent>
        ))}
      </InsureContents>
    </SelectWrapper>
  );
}

export default InsueQuestionCategory;

const SelectWrapper = styled.div`
  width: 100%;
  /* height: 4.8rem; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;

const Button = styled.button`
  width: 100%;
  height: 4.8rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  outline: none;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.Black100};
  border-radius: 1.6rem;
  color: ${({ theme }) => theme.colors.Black500};
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-around;
  transition: all 0.3s ease-in-out;

  ${media.mobile`
    // 767 < 
    font-size: ${({ theme }: any) => theme.fontSizes.subtitle};
    height: 10rem;
    border-radius: 4.5rem;
  `}
`;

const InsureContents = styled.div<{ open: boolean }>`
  position: absolute;
  top: 100%;
  width: 100%;
  max-height: ${({ open }) => (open ? '25rem' : 0)};
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.mobile`
    // 767 < 
    max-height: ${({ open }: any) => (open ? '50rem' : 0)};
  `}
`;

const InsureContent = styled.button`
  outline: none;
  border: none;
  background-color: #fff;
  border-left: 0.3px solid ${({ theme }) => theme.colors.Black100};
  border-right: 0.3px solid ${({ theme }) => theme.colors.Black100};
  border-bottom: 0.3px solid ${({ theme }) => theme.colors.Black100};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.Black500};
  width: 100%;
  height: 4.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.Black100};
  }

  ${media.mobile`
    // 767 < 
    font-size: ${({ theme }: any) => theme.fontSizes.subtitle};
    height: 10rem;
  `}
`;
