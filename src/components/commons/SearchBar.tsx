import React, { useState, useRef } from 'react';
import type { SearchBarProps } from '@/types/commonComponents';
import styled from 'styled-components';

function SearchBar({ backgroundColor, icon, handler, height, placeholder }: SearchBarProps) {
  const searchRef = useRef<any>(null);
  const [text, setText] = useState<string>('');
  return (
    <SearchBarContainer
      onClick={() => {
        searchRef.current.focus();
      }}
      backgroundColor={backgroundColor}
      height={height}
    >
      <SearchBarWrapper>
        <SearchBarInput
          ref={searchRef}
          onChange={(e) => {
            setText(e.currentTarget.value);
          }}
          value={text}
          type="text"
          placeholder={placeholder}
        />
        <SearchBarBtn onClick={handler}>{icon}</SearchBarBtn>
      </SearchBarWrapper>
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div<{ backgroundColor: string; height: number }>`
  /* border: 1px solid #000; */
  width: 100%;
  height: ${({ height }) => height}rem; // prop
  background-color: ${({ backgroundColor }) => backgroundColor}; // prop
  ${({ theme }) => theme.common.flexCenter}
  border-radius: 4.5rem;
`;

const SearchBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 49px 28px 43px 28px; // prop 가능성
`;

const SearchBarInput = styled.input`
  border: none;
  width: 90%;
  min-height: 48px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  outline: none;
  background-color: inherit;
`;

const SearchBarBtn = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

export default SearchBar;
