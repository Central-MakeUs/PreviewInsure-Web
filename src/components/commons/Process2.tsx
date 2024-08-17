import React, { useEffect, useState } from 'react';
import { Process2Props } from '@/types/commonComponents';
import styled from 'styled-components';
import media from '@styles/media';

const Process2 = ({ activeStep }: Process2Props) => {
  return (
    <ProcessContainer>
      <ProcessBlock step={1} activeStep={activeStep} />
      <ProcessBlock step={2} activeStep={activeStep} />
      <ProcessBlock step={3} activeStep={activeStep} />
      <ProcessBlock step={4} activeStep={activeStep} />
      <ProcessBlock step={5} activeStep={activeStep} />
    </ProcessContainer>
  );
};

const ProcessContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ProcessBlock = styled.div<{ step: number; activeStep: number }>`
  width: 4rem;
  border: 2.5px solid
    ${({ theme, step, activeStep }) =>
      step < activeStep
        ? theme.colors.Primary200
        : step === activeStep
          ? theme.colors.Primary500
          : theme.colors.Black100};
  transition: border 0.6s ease-in-out;

  ${media.mobile`
    // 767 < 
    width: 7rem;
    border-width:2px;
  `}
`;

export default Process2;
