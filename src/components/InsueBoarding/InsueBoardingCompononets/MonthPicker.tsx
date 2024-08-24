import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as DownSelector } from '@/assets/icons/DownSelector.svg';
import media from '@styles/media';

type MonthPickerProps = {
  setMonth: (arg: number) => void;
};

const MonthPicker = ({ setMonth }: MonthPickerProps) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  const handleChange = (event: any) => {
    const month = event.target.value;
    setSelectedMonth(month);
    setMonth(Number(month));
  };

  const formatMonth = (month: number) => {
    return month.toString().padStart(2, '0');
  };

  return (
    <SelectWrapper>
      <SelectBox value={selectedMonth} onChange={handleChange}>
        {[...Array(12).keys()].map((month) => (
          <option key={month + 1} value={month + 1}>
            {formatMonth(month + 1)}
          </option>
        ))}
      </SelectBox>
      <IconWrapper>
        <IconBox>
          <DownSelector width={'100%'} height={'100%'} fill={'black'} />
        </IconBox>
      </IconWrapper>
    </SelectWrapper>
  );
};

export default MonthPicker;

const SelectWrapper = styled.div`
  position: relative;
  background-color: #f5f6f8;
  width: 12rem;
  margin-right: 2.4rem;
  border-radius: 1.6rem;

  ${media.mobile`
    // 767 < 
    width: 24rem;
    border-radius: 4rem;
  `}
`;

const SelectBox = styled.select`
  width: 100%;
  border: none;
  background-color: #f5f6f8;
  appearance: none;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  /* border-radius: 1.6rem; */
  padding: 1.6rem 6rem 1.6rem 1.6rem;
  color: ${({ theme }) => theme.colors.Black500};
  /* margin-right: 2.4rem; */
  z-index: 3;
  position: relative;
  background: transparent;

  ${media.mobile`
    // 767 < 
    padding: 5rem 2.5rem 5rem 5rem;
    font-size: 4rem;
      font-weight:600;
  `}
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 25%;
  right: 10%;
  z-index: 1;

  ${media.mobile`
    // 767 < 
    top:35%;
  `}
`;

const IconBox = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  ${media.mobile`
    // 767 < 
    width: 3.5rem;
    height: 3.5rem;
  `}
`;
