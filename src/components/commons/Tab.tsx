import React, { useEffect, useState } from 'react';
import { TabProps } from '@/types/commonComponents';
import styled from 'styled-components';

const Tab = ({ stepText, activeStep, handler }: TabProps) => {
  const totalSteps = stepText.length;

  return (
    <Container>
      <Line />
      {stepText.map((value, index) => (
        <div key={index} style={{ position: 'relative', zIndex: '1' }}>
          {activeStep === index + 1 ? (
            <BigCircle>
              <p>{value}</p>
            </BigCircle>
          ) : (
            <SmallCircle onClick={() => handler(index + 1)}>
              <div />
            </SmallCircle>
          )}
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  margin: 0 20px;
`;

const Line = styled.div`
  border-width: 1px 0px 0px 0px;
  border-color: ${({ theme }) => theme.colors.Primary500};
  border-style: dashed;
  width: 100%;
  height: 0;
  position: absolute;
`;

const SmallCircle = styled.div`
  width: 6.1rem;
  height: 6.1rem;
  border-radius: 50%;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.Primary500};
  border-style: solid;
  background-color: white;
  ${({ theme }) => theme.common.flexCenter}

  div {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.Primary200};
  }
`;

const BigCircle = styled.div`
  width: 14.8rem;
  height: 14.8rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.Primary500};
  ${({ theme }) => theme.common.flexCenter}

  p {
    color: white;
    font-size: 3.5rem;
    font-weight: 600;
  }
`;
export default Tab;
