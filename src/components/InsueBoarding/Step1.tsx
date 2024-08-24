import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FailAlarm from '@components/commons/FailAlarm';
import { ReactComponent as Close } from '@/assets/icons/Close.svg';
import { ReactComponent as Heart } from '@/assets/icons/Heart.svg';
import { ReactComponent as Warning } from '@/assets/icons/Warning.svg';
import MonthPicker from './InsueBoardingCompononets/MonthPicker';
import YearPicker from './InsueBoardingCompononets/YearPicker';
import { useNavigate } from 'react-router-dom';
import media from '@styles/media';

type StepProps = {
  goNextStep: () => void;
  goPreviousStep: () => void;
  setBirthYear: (arg: number) => void;
  setBirthMonth: (arg: number) => void;
};

function Step1({ goNextStep, goPreviousStep, setBirthYear, setBirthMonth }: StepProps) {
  const navigate = useNavigate();
  // 나이 선택
  const [alarmShown, setAlarmShown] = useState(false);
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const cancelHandler = () => {
    // setAlarmShown(true);
    navigate('/congratulate');
  };

  const inputYearAndMonth = () => {
    console.log(month, year);
    setBirthYear(year);
    setBirthMonth(month);
    goNextStep();
  };

  //month.year
  useEffect(() => {
    console.log(month, year);
  }, [month, year]);
  //alarm
  useEffect(() => {
    if (alarmShown) {
      setTimeout(() => {
        setAlarmShown(false);
      }, 2000);
    }
  }, [alarmShown]);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FailAlarm text={'질문 내용을 입력해 주세요.'} alarmShown={alarmShown} />
      </div>
      <Subtitle>
        <SubtitleP>보험 맵을 구성하는</SubtitleP>
        <SubtitleP>정보를 입력해볼게요!</SubtitleP>
      </Subtitle>
      <DateSelectWrapper>
        <PickerContainer>
          <YearPicker setYear={setYear} /> 년
        </PickerContainer>
        <PickerContainer>
          <MonthPicker setMonth={setMonth} /> 월
        </PickerContainer>
      </DateSelectWrapper>
      <RegisterBtnGroup>
        <RegisterBtn onClick={cancelHandler}>
          <XIconBOx>
            <Close width={'100%'} height={'100%'} fill={'#6879FB'} />{' '}
          </XIconBOx>{' '}
          다음에 할래요
        </RegisterBtn>
        <RegisterBtn onClick={inputYearAndMonth}>
          <HeartIconBox>
            <Heart width={'100%'} height={'100%'} fill={'#6879FB'} />
          </HeartIconBox>{' '}
          맵을 만들어볼래요!
        </RegisterBtn>
      </RegisterBtnGroup>
      <Explain>
        <WarningIconBox>
          <Warning width={'100%'} height={'100%'} fill={'#aaaaaa'} />
        </WarningIconBox>
        <p>기입한 정보는 내 정보에서 다시 수정할 수 있어요.</p>
      </Explain>
    </>
  );
}

const Subtitle = styled.p`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 600;
  color: #000;
  line-height: 1.1;
  margin-bottom: 6.8rem;

  ${media.mobile`
    // 767 < 
    margin-bottom: 10rem;
    font-size: 22px;
  `}
`;

const SubtitleP = styled.p``;

const DateSelectWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.Black500};
  margin-bottom: 5.3rem;

  ${media.mobile`
    // 767 < 
    gap: 10rem;
    margin-bottom: 10rem;
  `}
`;

const PickerContainer = styled.div`
  display: flex;
  align-items: center;

  ${media.mobile`
    // 767 < 
    font-size: ${({ theme }: any) => theme.fontSizes.subtitle};
    font-weight:400;
  `}
`;

const RegisterBtnGroup = styled.div`
  display: flex;
  gap: 4rem;

  ${media.mobile`
    // 767 < 
    width:100%;
    justify-content: center;
  `}
`;

const HeartIconBox = styled.div`
  width: 3rem;
  height: 3rem;

  ${media.mobile`
    // 767 < 
    width: 17px;
    height: 17px;
  `}
`;

const XIconBOx = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  ${media.mobile`
    // 767 < 
    width: 16px;
    height: 16px;
  `}
`;

const RegisterBtn = styled.button`
  width: 22.5rem;
  height: 6rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.Primary_W};
  ${({ theme }) => theme.common.flexCenter};
  color: ${({ theme }) => theme.colors.Primary500};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  border-radius: 1.4rem;
  cursor: pointer;
  margin-bottom: 5rem;
  transition: all 0.3s ease;
  gap: 1.6rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.Primary500};
    transition: 0.5s;
    color: #fff;

    ${HeartIconBox} {
      svg {
        fill: #fff;
      }
    }

    ${XIconBOx} {
      svg {
        fill: #fff;
      }
    }
  }

  ${media.mobile`
    // 767 < 
    width:42%;
    height:48px;
    font-size: 14px;
    border-radius: 14px;
  `}
`;

const WarningIconBox = styled.div`
  width: 3.2rem;
  height: 3.2rem;

  ${media.mobile`
    // 767 < 
    width: 18px;
    height: 18px;
  `}
`;

const Explain = styled.p`
  color: ${({ theme }) => theme.colors.Black500};
  font-size: ${({ theme }) => theme.fontSizes.small};
  display: flex;
  align-items: center;
  gap: 1.6rem;

  ${media.mobile`
    // 767 < 
    font-size: 13px;
    color: ${({ theme }: any) => theme.colors.Black200};
  `}
`;

export default Step1;
