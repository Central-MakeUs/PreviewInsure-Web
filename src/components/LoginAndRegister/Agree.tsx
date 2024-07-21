import React, { useState } from 'react';
import styled from 'styled-components';
import Selector from '@components/commons/Selector';
import { ReactComponent as Up } from '@assets/icons/Up.svg';
import { ReactComponent as Down } from '@assets/icons/Down.svg';
import type { AgreeProps } from '@/types/LoginAndRegisterComponents';

function Agree({ check, setCheck, text, type, detail }: AgreeProps) {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <>
      <AgreeContainer>
        <AgreeLeft>
          <Selector type={'square'} check={check} setCheck={setCheck} />
          <AgreeLeftText>
            {text} <AgreeLeftTextType type={type}>{type === 'essential' ? '(필수)' : '(선택)'}</AgreeLeftTextType>
          </AgreeLeftText>
        </AgreeLeft>
        <AgreeRight onClick={() => setShowDetail(!showDetail)}>
          {!showDetail ? (
            <>
              상세보기
              <Down width={38} height={39} />
            </>
          ) : (
            <>
              접기
              <Up width={38} height={39} />
            </>
          )}
        </AgreeRight>
      </AgreeContainer>
      <AgreeContents open={showDetail}>
        <AgreeContentsP>{detail}</AgreeContentsP>
      </AgreeContents>
    </>
  );
}

const AgreeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85rem;
`;

const AgreeLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 2.1rem;
`;
const AgreeLeftText = styled.p`
  color: ${({ theme }) => theme.colors.Black500};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 600;
`;

const AgreeLeftTextType = styled.span<{ type: string }>`
  display: inline;
  color: ${({ theme, type }) => (type === 'essential' ? theme.colors.Primary500 : theme.colors.Black500)};
`;

const AgreeRight = styled.button`
  border: none;
  background-color: inherit;
  color: ${({ theme }) => theme.colors.Black500};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
`;

const AgreeContents = styled.div<{ open: boolean }>`
  max-height: ${({ open }) => (open ? '80rem' : 0)};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

const AgreeContentsP = styled.p`
  font-size: 1.6rem;
  color: #535353;
  padding: 4.5rem 0 2rem 0;
`;

export default Agree;
