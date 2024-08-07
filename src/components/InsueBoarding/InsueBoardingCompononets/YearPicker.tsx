import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as DownSelector } from '@/assets/icons/DownSelector.svg';

type YearPickerProps = {
  setYear: (arg: number) => void;
};

const YearPicker = ({ setYear }: YearPickerProps) => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const handleChange = (event: any) => {
    const year = event.target.value;
    setSelectedYear(year);
    setYear(Number(year));
  };

  return (
    <SelectWrapper>
      <SelectBox value={selectedYear} onChange={handleChange}>
        {[...Array(50).keys()].map((year) => (
          <option key={currentYear - year} value={currentYear - year}>
            {currentYear - year}
          </option>
        ))}
      </SelectBox>
      <IconWrapper>
        <DownSelector width={18} height={10} fill={'black'} />
      </IconWrapper>
    </SelectWrapper>
  );
};

export default YearPicker;

const SelectWrapper = styled.div`
  position: relative;
`;

const SelectBox = styled.select`
  border: none;
  background-color: #f5f6f8;
  appearance: none;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  border-radius: 1.6rem;
  padding: 1.6rem 9rem 1.6rem 1.6rem;
  color: ${({ theme }) => theme.colors.Black500};
  margin-right: 2.4rem;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 25%;
  right: 25%;
`;
