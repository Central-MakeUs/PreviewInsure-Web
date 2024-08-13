import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InsuePlannerQuestion from '@components/InsuePlanner/InsuePlannerQuestion';
import InsuePlannerLoading from '@components/InsuePlanner/InsuePlannerLoading';
import InsuePlannerAnswer from '@components/InsuePlanner/InsuePlannerAnswer';
import type { link } from '@apis/insuePlanner/insuePlanner.d';

//dummy
const answer = {
  text: '안녕하세요! 운전자 보험에 대해 상담해드리겠습니다. 운전자 보험은 사고 시 법률 비용, 벌금, 치료비 등을 보장해주는 보험입니다. 고객님의 요청사항을 바탕으로 가격이 저렴하고 실속 있는 운전자 보험 상품 세 가지를 추천드립니다.<br/><br/> 1. 삼성화재 운전자보험 특징: 교통사고 처리 지원금 변호사 선임비용 교통사고 벌금 지원 입원비 및 상해 치료비 보장 <br/><br/>2. 현대해상 운전자보험 특징: 자동차 사고 벌금 및 변호사 비용 보장 교통사고 처리 지원금 중상해 치료비 보장',
  links: [
    {
      insuranceCompany: '삼성화재 운전자보험',
      insuranceLink: 'https://www.hanwhalife.com/index.jsp',
    },
    {
      insuranceCompany: '현대해상 운전자보험',
      insuranceLink: 'https://www.hanwhalife.com/index.jsp',
    },
    {
      insuranceCompany: 'KB손해보험 운전자보험',
      insuranceLink: 'https://www.hanwhalife.com/index.jsp',
    },
  ],
};

function InsuePlannerScreen() {
  const [loading, setLoading] = useState<boolean>(false);
  const [question, setQuestion] = useState<string>(''); // 질문
  const [currentScreen, setCurrentScreen] = useState<'Q' | 'A'>('Q');
  // 답변
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [currentAnswerLinks, setCurrentAnswerLinks] = useState<link[] | []>([]);

  useEffect(() => {
    console.log('answer', currentAnswer);
  }, [currentAnswer]);
  return (
    <>
      {currentScreen === 'Q' && (
        <InsuePlannerQuestion
          setQuestion={setQuestion}
          setCurrentScreen={setCurrentScreen}
          setCurrentAnswer={setCurrentAnswer}
          setCurrentAnswerLinks={setCurrentAnswerLinks}
        />
      )}
      {currentScreen === 'A' && (
        <InsuePlannerAnswer
          question={question}
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
