import styled from 'styled-components';
import { useState } from 'react';
import media from '@styles/media';
import InsueSection from '@components/User/InsueSection';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@stores/useStore';
import InfoSection from '@components/User/InfoSection';
import { deleteAccount } from '@apis/account/account';

type NotiInfo = {
  alarm: boolean;
  advertise: boolean;
};

function UserInfoScreen() {
  const navigate = useNavigate();
  const { logOut } = useStore();
  const [view, setView] = useState<'VIEW' | 'EDIT'>('VIEW');

  function goToInsueBording() {
    navigate('/insueBording');
  }

  async function handleDeleteAccount() {
    const confirmed = window.confirm('계정을 탈퇴하시겠습니까?');
    if (confirmed) {
      console.log('작업을 수행합니다!');
      await deleteAccount();
      logOut();
      navigate('/');
    }
  }

  function handleReportFraud() {
    window.open('https://www.fss.or.kr/fss/main/contents.do?menuNo=200647', '_blank');
  }

  return (
    <Container>
      <Title>마이페이지</Title>
      {view === 'VIEW' ? <EditBtn onClick={() => setView('EDIT')}>수정하기</EditBtn> : <EditBtn>수정완료</EditBtn>}

      <InfoSection />

      <SeparateLine />

      <Setting>
        <SubTitle>| 계정 설정</SubTitle>
        <SettingBox>
          <p className="black" onClick={goToInsueBording}>
            인슈보딩 다시하기
          </p>
          <p onClick={logOut}>로그아웃</p>
          <p onClick={handleDeleteAccount}>탈퇴하기</p>
          <p className="only_mobile" onClick={handleReportFraud}>
            보험사기 신고하기
          </p>
        </SettingBox>
      </Setting>

      {/* PC */}
      <Insue>
        <SubTitle>| 인슈 정보</SubTitle>
        <Tip1>
          현재 가입한 보험의 <span>종류</span>를 확인해주세요.
        </Tip1>
        <Tip2>
          Tip! 가입한 보험의 <span>정보</span>는 해당 보험의 상세페이지에서 변경 가능해요.
        </Tip2>

        <div style={{ width: '100%', marginTop: '5.6rem' }}>
          <InsueSection />
        </div>
      </Insue>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 12%;
  display: grid;
  grid-template-areas:
    ' header   .    button'
    '   a    main    main  '
    '   b    main    main  '
    '   .    main    main  ';

  ${media.mobile`
    display: flex;
    flex-direction: column;
    margin: 0 6%;
  `}
`;

const Title = styled.h1`
  grid-area: header;
  color: ${({ theme }) => theme.colors.Primary500};
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  font-weight: 600;

  ${({ theme }) => media.mobile`
    color: ${theme.colors.Black500};
    font-size: 18px;
  `}
`;
const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.Primary500};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 600;

  ${media.mobile`
    display: none;
  `}
`;

const EditBtn = styled.button`
  grid-area: button;
  width: fit-content;
  margin-left: auto;
  margin-bottom: 2rem;
  padding: 1.5rem 3.5rem;
  border-radius: 1.5rem;
  border: 0px;
  background-color: ${({ theme }) => theme.colors.Primary_W};
  color: ${({ theme }) => theme.colors.Primary500};
  font-weight: 500;

  ${media.mobile`
    display:none;
  `}
`;

const SeparateLine = styled.div`
  display: none;
  position: relative;
  left: -7%;
  width: 100vw;
  border-top: 5px solid ${({ theme }) => theme.colors.Black_W};
  margin: 4rem 0;

  ${media.mobile`
    display: block;
  `}
`;

const Setting = styled.div`
  grid-area: b;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.Black_W};
  padding: 5.2rem;
  border-radius: 3.2rem;
  margin-bottom: 2.4rem;
  grid: 1 1 0;

  ${media.mobile`
    width: 100%;
    background-color: transparent;
    padding: 0;

  `}
`;
const SettingBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 2rem;
  align-items: left;

  p {
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.Black300};

    ${({ theme }) => media.mobile`
      font-size: 16px;
      background-color: ${theme.colors.Black_W};
      padding: 30px 35px;
      border-radius: 24px;
    `}
  }

  .black {
    ${({ theme }) => media.mobile`
      color: ${theme.colors.Black500};
    `}
  }

  .only_mobile {
    display: none;
    ${media.mobile`
      display: block;
    `}
  }
`;

const Insue = styled.div`
  grid-area: main;
  background-color: ${({ theme }) => theme.colors.Black_W};
  padding: 5.2rem;
  margin-left: 3.2rem;
  margin-bottom: 5rem;
  border-radius: 3.2rem;

  ${media.mobile`
    display: none;
  `}
`;

const Tip1 = styled.p`
  margin-top: 1.2rem;
  margin-left: 1.4rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.Black300};
  line-height: normal;

  span {
    font-weight: 600;
  }
`;
const Tip2 = styled.p`
  margin-left: 1.4rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.Black200};
  line-height: normal;

  span {
    font-weight: 600;
  }
`;

export default UserInfoScreen;
