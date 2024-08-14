import React, { useState } from 'react';
import styled from 'styled-components';
import Selector from '@components/commons/Selector';
import { ReactComponent as Up } from '@assets/icons/Up.svg';
import { ReactComponent as Down } from '@assets/icons/Down.svg';
import type { AgreeProps } from '@/types/LoginAndRegisterComponents';
import media from '@styles/media';

function Agree({ check, setCheck, text, type, detail, registerBtnClicked }: AgreeProps) {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <>
      <AgreeContainer>
        <AgreeLeft>
          <Selector type={'square'} check={check} setCheck={setCheck} redFlag={!check && registerBtnClicked} />
          <AgreeLeftText check={check} registerBtnClicked={registerBtnClicked}>
            {text}{' '}
            <AgreeLeftTextType check={check} registerBtnClicked={registerBtnClicked} type={type}>
              {type === 'essential' ? '(필수)' : '(선택)'}
            </AgreeLeftTextType>
          </AgreeLeftText>
        </AgreeLeft>
        <AgreeRight onClick={() => setShowDetail(!showDetail)}>
          {!showDetail ? (
            <>
              <AgreeRightText>상세보기</AgreeRightText>
              <Down width={38} height={39} />
            </>
          ) : (
            <>
              <AgreeRightText>접기</AgreeRightText>
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
  ${media.mobile`
    // 767 < 
    width:75%;
  `}
`;
const AgreeLeftText = styled.p<{ registerBtnClicked: boolean; check: boolean }>`
  color: ${({ theme, check, registerBtnClicked }) =>
    !check && registerBtnClicked ? theme.colors.AlertT : theme.colors.Black500};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;

  ${media.mobile`
    // 767 < 
    font-size:3.1rem;
    font-weight:500;
  `}
`;

const AgreeLeftTextType = styled.span<{ type: string; registerBtnClicked: boolean; check: boolean }>`
  display: inline;
  color: ${({ theme, type, registerBtnClicked, check }) =>
    !check && registerBtnClicked
      ? theme.colors.AlertT
      : type === 'essential'
        ? theme.colors.Primary500
        : theme.colors.Black500};
`;

const AgreeRight = styled.button`
  border: none;
  background-color: inherit;
  color: ${({ theme }) => theme.colors.Black500};
  font-size: ${({ theme }) => theme.fontSizes.small};
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
`;

const AgreeRightText = styled.p`
  ${media.mobile`
    // 767 < 
    display:none;
  `}
`;

const AgreeContents = styled.div<{ open: boolean }>`
  max-height: ${({ open }) => (open ? '30rem' : 0)};
  overflow: scroll;
  transition: all 0.3s ease-in-out;
  margin-bottom: 2rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const AgreeContentsP = styled.p`
  width: 85rem;
  color: #535353;
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  margin-top: 4.5rem;
  font-weight: 400;
  white-space: pre-wrap;
`;

export default Agree;
