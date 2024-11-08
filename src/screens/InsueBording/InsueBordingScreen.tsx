import React, { useState } from 'react';
import styled from 'styled-components';
import Process2 from '@components/commons/Process2';

import Step1 from '@components/InsueBoarding/Step1';
import Step2 from '@components/InsueBoarding/Step2';
import Step3 from '@components/InsueBoarding/Step3';
import Step4 from '@components/InsueBoarding/Step4';
import Step5 from '@components/InsueBoarding/Step5';
import Complete from '@components/InsueBoarding/Complete';
import media from '@styles/media';

type insure = {
  insuranceType: string;
  insuranceCompany: string;
};

function InsueBoardingScreen() {
  const [steps, setSteps] = useState(1);
  const [complete, setComplete] = useState(false);
  const [toSelectInsures, setToSelectInsures] = useState([]); //step4~5
  const [selectedInsures, setSelectedInsures] = useState([]); //step4~5

  //infos
  const [birthYear, setBirthYear] = useState<number>(1);
  const [birthMonth, setBirthMonth] = useState<number>(1);
  const [gender, setGender] = useState<'M' | 'W' | null>(null);
  const [insures, setInsures] = useState<insure[]>([]);

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
      {complete ? (
        <Complete birthYear={birthYear} birthMonth={birthMonth} gender={gender} insures={insures} />
      ) : (
        <ProcessWrapper>
          <Process2 activeStep={steps} />
        </ProcessWrapper>
      )}

      {!complete && steps === 1 && (
        <Step1
          goNextStep={goNextStep}
          goPreviousStep={goPreviousStep}
          setBirthYear={setBirthYear}
          setBirthMonth={setBirthMonth}
        />
      )}
      {!complete && steps === 2 && (
        <Step2 goNextStep={goNextStep} goPreviousStep={goPreviousStep} setGender={setGender} />
      )}
      {!complete && steps === 3 && (
        <Step3 goNextStep={goNextStep} goPreviousStep={goPreviousStep} setComplete={setComplete} />
      )}
      {!complete && steps === 4 && (
        <Step4
          goNextStep={goNextStep}
          goPreviousStep={goPreviousStep}
          setToSelectInsures={setToSelectInsures}
          setSelectedInsures={setSelectedInsures}
        />
      )}
      {!complete && steps === 5 && (
        <Step5
          selectedInsures={selectedInsures}
          toSelectInsures={toSelectInsures}
          setInsures={setInsures}
          setComplete={setComplete}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 7.6rem 0;
  height: calc(100vh - 18rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* justify-content: center; */
  align-items: center;

  ${media.mobile`
    padding-top: 30rem;
    height: calc(100vh - 18rem - 78px); // header + nav
  `}
`;

const Title = styled.h1`
  font-weight: 600;
  display: block;
  margin-bottom: 3.4rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.Black500};

  ${media.mobile`
    // 767 < 
    font-size: 12px;
    color: ${({ theme }: any) => theme.colors.Black200};
    font-weight: 400;
  `}
`;

const ProcessWrapper = styled.div`
  margin-bottom: 6rem;

  ${media.mobile`
    // 767 < 
    margin-bottom: 8rem;
  `}
`;

export default InsueBoardingScreen;
