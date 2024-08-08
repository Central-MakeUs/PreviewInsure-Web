import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InsuePlannerQuestion from '@components/InsuePlanner/InsuePlannerQuestion';
import InsuePlannerLoading from '@components/InsuePlanner/InsuePlannerLoading';
import InsuePlannerAnswer from '@components/InsuePlanner/InsuePlannerAnswer';

function InsuePlannerScreen() {
  const [loading, setLoading] = useState<boolean>(false);
  const [question, setQuestion] = useState<string>('');
  const [currentScreen, setCurrentScreen] = useState<'Q' | 'A'>('Q');
  useEffect(() => {
    console.log('newQuestion', question);
  }, [question]);
  return (
    <>
      {currentScreen === 'Q' && <InsuePlannerQuestion setQuestion={setQuestion} setCurrentScreen={setCurrentScreen} />}
      {currentScreen === 'A' && <InsuePlannerAnswer question={question} setCurrentScreen={setCurrentScreen} />}
    </>
  );
}

export default InsuePlannerScreen;

const Container = styled.div`
  padding: 10rem 36rem;
  display: flex;
  flex-direction: column;
`;
