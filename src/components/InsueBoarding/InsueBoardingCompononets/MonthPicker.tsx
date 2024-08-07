import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as UpSelector } from '@/assets/icons/UpSelector.svg';

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
        <UpSelector width={18} height={10} fill={'black'} />
      </IconWrapper>
    </SelectWrapper>
  );
};

export default MonthPicker;

const SelectWrapper = styled.div`
  position: relative;
`;

const SelectBox = styled.select`
  border: none;
  background-color: #f5f6f8;
  appearance: none;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  border-radius: 1.6rem;
  padding: 1.6rem 6rem 1.6rem 1.6rem;
  color: ${({ theme }) => theme.colors.Black500};
  margin-right: 2.4rem;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 25%;
  right: 25%;
`;
