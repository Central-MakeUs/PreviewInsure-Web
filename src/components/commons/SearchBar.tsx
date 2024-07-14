import React, { useState, useRef } from 'react';
import type { SearchBarProps } from '@/types/commonComponents';

function SearchBar({ backgroundColor, icon, handler }: SearchBarProps) {
  const searchRef = useRef<any>(null);
  const [text, setText] = useState<string>('');
  return (
    <div
      className="SearchBarContainer"
      onClick={() => {
        searchRef.current.focus();
      }}
      style={{
        border: '1px solid #000',
        width: '735px', // prop 가능성
        height: '90px', // prop 가능성
        backgroundColor: `${backgroundColor}`, // prop
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '49px 28px 43px 28px', // prop 가능성
        }}
      >
        <input
          ref={searchRef}
          onChange={(e) => {
            setText(e.currentTarget.value);
          }}
          value={text}
          type="text"
          style={{
            border: 'none',
            width: '90%',
            minHeight: '48px',
            fontSize: '30px',
            outline: 'none',
            backgroundColor: 'inherit',
          }}
        />
        <button
          style={{
            border: 'none',
            backgroundColor: 'inherit',
            cursor: 'pointer',
          }}
          onClick={handler}
        >
          {icon}
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
