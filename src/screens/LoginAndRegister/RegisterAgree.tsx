import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Agree from '@components/LoginAndRegister/Agree';
import { useNavigate } from 'react-router-dom';
import FailAlarm from '@components/commons/FailAlarm';

const sampleP = (
  <>
    sample <br />
    sample <br /> sample <br /> sample <br />
    sample text
  </>
);

function RegisterAgree() {
  const navigate = useNavigate();
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [registerable, setRegisterable] = useState(false);
  const [alarmShown, setAlarmShown] = useState(false);
  const [registerBtnClicked, setRegisterBtnClicked] = useState(false);

  useEffect(() => {
    console.log('check1', check1);
    if (check1 && check2) {
      setRegisterable(true);
    } else {
      setRegisterable(false);
    }
  }, [check1, check2, check3]);

  useEffect(() => {
    // 가입가능하게 되었을 때 약관 동의 텍스트 빨간색 변하는 거 초기화
    if (registerable) {
      setRegisterBtnClicked(false);
    }
  }, [registerable]);

  useEffect(() => {
    if (alarmShown) {
      setTimeout(() => {
        setAlarmShown(false);
      }, 2000);
    }
  }, [alarmShown]);

  const goNextStep = () => {
    if (!registerable) {
      setAlarmShown(true);
      setRegisterBtnClicked(true);
      return;
    }
    navigate('/registerNickname');
  };

  return (
    <Container>
      <FailAlarm text={'서비스 약관에 동의해 주세요.'} alarmShown={alarmShown} />
      <Title>회원가입</Title>
      <Subtitle>
        <SubtitleP>맞춤형 서비스 제공을 위해</SubtitleP>
        <SubtitleP>서비스 약관에 동의해주세요.</SubtitleP>
      </Subtitle>
      <AgreeGroup>
        <Agree
          check={check1}
          setCheck={setCheck1}
          text={'프리뷰인슈 이용 약관에 동의합니다.'}
          type={'essential'}
          detail={sampleP}
          registerBtnClicked={registerBtnClicked}
        />
        <Agree
          check={check2}
          setCheck={setCheck2}
          text={`개인정보 수집 및 이용에 동의합니다.)`}
          type={'essential'}
          detail={sampleP}
          registerBtnClicked={registerBtnClicked}
        />
        <Agree
          check={check3}
          setCheck={setCheck3}
          text={'마케팅 활용 및 광고성 정보 수신에 동의합니다.'}
          type={'selectable'}
          detail={sampleP}
          registerBtnClicked={false}
        />
      </AgreeGroup>
      <RegisterBtn onClick={goNextStep} registerable={registerable}>
        가입하기
      </RegisterBtn>
      <Explain>
        <p>사용자는 이용 약관 . 및개인정보 수집 및 이용 동의를 거부할수 있으나,</p> 거부시 회원가입 및 서비스 이용이
        제한됩니다.
      </Explain>
    </Container>
  );
}

const Container = styled.div`
  padding: 7.6rem 0;
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  height: calc(100vh - 18rem);
`;

const Title = styled.h1`
  font-weight: 600;
  display: block;
  margin-bottom: 3.4rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.Black500};
`;

const Subtitle = styled.p`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 600;
  color: #000;
  line-height: 1.1;
  margin-bottom: 9.6rem;
`;

const SubtitleP = styled.p``;

const AgreeGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5.5rem;
  gap: 1.2rem;
`;

const RegisterBtn = styled.button<{ registerable: boolean }>`
  width: 86rem;
  height: 7.4rem;
  border: none;
  background-color: ${({ registerable, theme }) => (registerable ? theme.colors.Primary500 : '#f5f5f5;')};
  ${({ theme }) => theme.common.flexCenter};
  color: ${({ theme, registerable }) => (registerable ? '#fff' : theme.colors.Black500)};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 600;
  border-radius: 1.4rem;
  cursor: pointer;
  margin-bottom: 3.7rem;
  transition: all 0.3s ease;
`;

const Explain = styled.p`
  color: ${({ theme }) => theme.colors.Black500};
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  flex-direction: column;
  text-align: center;
  line-height: 1.5;
`;

export default RegisterAgree;
