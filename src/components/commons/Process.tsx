import React, { useEffect, useState } from 'react';
import { ProcessProps } from '@/types/commonComponents';
import styled from 'styled-components';

type step = {
  step: number;
};
type steps = step[];

const Process = ({ stepNumber, activeStep }: ProcessProps) => {
  const [steps, setSteps] = useState<steps>([]);
  useEffect(() => {
    let temp = [];
    for (let i = 1; i <= stepNumber; i++) {
      let stepJson = {
        step: i,
      };
      temp.push(stepJson);
    }
    setSteps([...temp]);
  }, []);

  const totalSteps = steps.length;

  const ProcessingWidth = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

  return (
    <ProcessContainer>
      <ProcessWrapper>
        <ProcessBar></ProcessBar>
        <ProcessingBar ProcessingWidth={ProcessingWidth}></ProcessingBar>
        {steps.map(({ step }) => (
          <ProcessCircleContainer key={step}>
            <ProcessCircle activeStep={activeStep} step={step}></ProcessCircle>
          </ProcessCircleContainer>
        ))}
      </ProcessWrapper>
    </ProcessContainer>
  );
};

const ProcessContainer = styled.div`
  width: 480px;
  padding: 16px 16px;
`;

const ProcessWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const ProcessBar = styled.div`
  content: '';
  position: absolute;
  background-color: ${({ theme }) => theme.colors.Black100};
  height: 6px;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
`;

const ProcessingBar = styled.div<{ ProcessingWidth: string }>`
  content: '';
  position: absolute;
  background-color: ${({ theme }) => theme.colors.Primary500};
  height: 4px;
  width: ${({ ProcessingWidth }) => ProcessingWidth};
  top: 50%;
  transition: 0.4s ease;
  transform: translateY(-50%);
  left: 0;
`;

const ProcessCircleContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const ProcessCircle = styled.div<{ activeStep: number; step: number }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.Primary200};
  transform: scale(${({ activeStep, step }) => (activeStep === step ? 1.75 : 1)});
  transition: 0.4s ease;
  ${({ theme }) => theme.common.flexCenter}
`;

export default Process;
