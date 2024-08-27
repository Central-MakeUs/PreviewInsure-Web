import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as DownSelector } from '@/assets/icons/DownSelector.svg';
import media from '@styles/media';

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
        <IconBox>
          <DownSelector width={'100%'} height={'100%'} fill={'black'} />
        </IconBox>
      </IconWrapper>
    </SelectWrapper>
  );
};

export default YearPicker;

const SelectWrapper = styled.div`
  position: relative;
  background-color: #f5f6f8;
  width: 19rem;
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
  /* background-color: #f5f6f8; */
  appearance: none;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  padding: 1.6rem 9rem 1.6rem 1.6rem;
  color: ${({ theme }) => theme.colors.Black500};
  /* margin-right: 2.4rem; */
  z-index: 3;
  position: relative;
  background: transparent;
  font-family: 'Pretendard', sans-serif;

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
