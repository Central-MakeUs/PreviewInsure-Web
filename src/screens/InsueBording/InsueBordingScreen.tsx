import React, { useState } from 'react';
import styled from 'styled-components';
import Process2 from '@components/commons/Process2';

import Step1 from '@components/InsueBoarding/Step1';
import Step2 from '@components/InsueBoarding/Step2';
import Step3 from '@components/InsueBoarding/Step3';
import Step4 from '@components/InsueBoarding/Step4';
import Step5 from '@components/InsueBoarding/Step5';

function InsueBoardingScreen() {
  const [steps, setSteps] = useState(1);
  const goPreviousStep = () => {
    if (steps === 1) {
      return;
    }
    setSteps(steps - 1);
  };
  const goNextStep = () => {
    if (steps === 5) {
      return;
    }
    setSteps(steps + 1);
  };
  return (
    <Container>
      <Title>인슈보딩</Title>
      <ProcessWrapper>
        <Process2 activeStep={steps} />
      </ProcessWrapper>

      {steps === 1 && <Step1 goNextStep={goNextStep} goPreviousStep={goPreviousStep} />}
      {steps === 2 && <Step2 goNextStep={goNextStep} goPreviousStep={goPreviousStep} />}
      {steps === 3 && <Step3 goNextStep={goNextStep} goPreviousStep={goPreviousStep} />}
      {steps === 4 && <Step4 />}
      {steps === 5 && <Step5 />}
    </Container>
  );
}

const Container = styled.div`
  padding: 7.6rem 0;
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 600;
  display: block;
  margin-bottom: 3.4rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.Black500};
`;

const ProcessWrapper = styled.div`
  margin-bottom: 6rem;
`;

export default InsueBoardingScreen;
