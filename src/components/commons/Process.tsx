import React, { useEffect, useState } from 'react';
import { ProcessProps } from '@/types/commonComponents';

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

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

  return (
    <div style={{ width: '480px', padding: '0 16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '70px', position: 'relative' }}>
        <div
          style={{
            content: '""',
            position: 'absolute',
            background: '#c7c7c7',
            height: '6px',
            width: '100%',
            top: '50%',
            transform: 'translateY(-50%)',
            left: '0',
          }}
        ></div>
        <div
          style={{
            content: '""',
            position: 'absolute',
            background: '#6879FB',
            height: '4px',
            width: width,
            top: '50%',
            transition: '0.4s ease',
            transform: 'translateY(-50%)',
            left: '0',
          }}
        ></div>
        {steps.map(({ step }) => (
          <div key={step} style={{ position: 'relative', zIndex: '1' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#B6BFFF',
                transform: `scale(${activeStep === step ? 1.75 : 1})`,
                transition: '0.4s ease',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
