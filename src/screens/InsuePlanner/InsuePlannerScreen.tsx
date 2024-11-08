import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InsuePlannerQuestion from '@components/InsuePlanner/InsuePlannerQuestion';
import InsuePlannerLoading from '@components/InsuePlanner/InsuePlannerLoading';
import InsuePlannerAnswer from '@components/InsuePlanner/InsuePlannerAnswer';
import type { link } from '@apis/insuePlanner/insuePlanner.d';
import { useStore } from '@stores/useStore';
import { useNavigate } from 'react-router-dom';
import { deleteAccount } from '@apis/account/account';

function InsuePlannerScreen() {
  const { logOut } = useStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [question, setQuestion] = useState<string>(''); // 질문
  const [currentScreen, setCurrentScreen] = useState<'Q' | 'A'>('Q');
  // 답변
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [currentAnswerLinks, setCurrentAnswerLinks] = useState<link[] | []>([]);

  // 다른 답변 -> questionId가 필요
  const [currentQuestionId, setCurrentQuestionId] = useState(-1);

  useEffect(() => {
    if (currentAnswer !== '') {
      console.log('answer', currentAnswer);
    }
  }, [currentAnswer]);
  return (
    <>
      {currentScreen === 'Q' && (
        <InsuePlannerQuestion
          setQuestion={setQuestion}
          setCurrentScreen={setCurrentScreen}
          setCurrentAnswer={setCurrentAnswer}
          setCurrentAnswerLinks={setCurrentAnswerLinks}
          setCurrentQuestionId={setCurrentQuestionId}
        />
      )}
      {currentScreen === 'A' && (
        <InsuePlannerAnswer
          question={question}
          currentQuestionId={currentQuestionId}
          setCurrentScreen={setCurrentScreen}
          currentAnswer={currentAnswer}
          setCurrentAnswer={setCurrentAnswer}
          currentAnswerLinks={currentAnswerLinks}
          setCurrentAnswerLinks={setCurrentAnswerLinks}
        />
      )}
    </>
  );
}

export default InsuePlannerScreen;
