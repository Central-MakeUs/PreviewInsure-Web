import Switch from '@components/commons/Switch';
import InsureCard from '@components/User/InsueCard';
import styled from 'styled-components';
import { CategoryImg } from '@utils/common/InsurCategory';
import { useState } from 'react';
import media from '@styles/media';

type NotiInfo = {
  alarm: boolean;
  advertise: boolean;
};

function UserInfoScreen() {
  // TODO: GET요청
  const userInfo = { ninkname: '춤추는 부엉이', year: '1998', month: '12', gender: '여성' };
  const [notiInfo, setNotiInfo] = useState<NotiInfo>({ alarm: true, advertise: false });
  const myinsue = [
    { type: '생명보험', insueCompany: 'KB손해보험' },
    { type: '건강보험', insueCompany: 'KB손해보험' },
    { type: '상해보험', insueCompany: 'KB손해보험' },
    { type: 'CI보험', insueCompany: 'KB손해보험' },
    { type: '운전자보험', insueCompany: 'KB손해보험' },
    { type: '연금보험', insueCompany: 'KB손해보험' },
    { type: '애견보험', insueCompany: 'KB손해보험' },
    { type: '건강보험', insueCompany: 'KB손해보험' },
  ];

  function handleNoti(change: 'alarm' | 'adv') {
    if (change === 'alarm') {
      setNotiInfo((cur) => ({
        alarm: !cur.alarm,
        advertise: cur.advertise,
      }));
    } else {
      setNotiInfo((cur) => ({
        alarm: cur.alarm,
        advertise: !cur.advertise,
      }));
    }
  }

  return (
    <Container>
      <Title>마이페이지</Title>
      <EditBtn>수정하기</EditBtn>
      <Info>
        <SubTitle>| 내 정보</SubTitle>
        <InfoBox>
          <p>닉네임</p>
          <b>{userInfo.ninkname}</b>
          <p>생년월일</p>
          <b>
            {userInfo.year}-{userInfo.month}
          </b>
          <p>성별</p>
          <b>{userInfo.gender}</b>
        </InfoBox>
      </Info>
      <Noti>
        <SubTitle>| 알림.광고 설정</SubTitle>
        <NotiBox>
          <p>알림</p>
          <b>{notiInfo.alarm ? '켬' : '끔'}</b>
          <Switch check={notiInfo.alarm} setCheck={() => handleNoti('alarm')} redFlag={false} type="circle" />
          <p>광고</p>
          <b>{notiInfo.advertise ? '켬' : '끔'}</b>
          <Switch check={notiInfo.advertise} setCheck={() => handleNoti('adv')} redFlag={false} type="circle" />
        </NotiBox>
      </Noti>
      <Insue>
        <SubTitle>| 인슈 정보</SubTitle>
        <Tip1>
          현재 가입한 보험의 <span>종류</span>를 확인해주세요.
        </Tip1>
        <Tip2>
          Tip! 가입한 보험의 <span>정보</span>는 해당 보험의 상세페이지에서 변경 가능해요.
        </Tip2>
        <InsueBox>
          {myinsue.map((insue) => (
            <InsureCard text={insue.type} SVG={CategoryImg.find((item) => item.name === insue.type)?.img} />
          ))}
        </InsueBox>
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
    grid-template-areas:
      ' header    button'
      '   a    a  '
      '   b    b'
      '  main   main ';
  `}
`;

const Title = styled.h1`
  grid-area: header;
  color: ${({ theme }) => theme.colors.Primary500};
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  font-weight: 600;
`;
const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.Primary500};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 600;
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
`;

const Info = styled.div`
  grid-area: a;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.Black_W};
  padding: 5.2rem 5.2rem 9.1rem 5.2rem;
  margin-bottom: 2.4rem;
  border-radius: 3.2rem;
`;

const InfoBox = styled.div`
  margin-top: 3.2rem;
  display: grid;
  grid-template-columns: 10rem 18rem;
  row-gap: 4rem;

  p {
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.Black300};
  }

  b {
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.Black500};
  }
`;
const Noti = styled.div`
  grid-area: b;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.Black_W};
  padding: 5.2rem;
  border-radius: 3.2rem;
  margin-bottom: 2.4rem;
  grid: 1 1 0;
`;
const NotiBox = styled.div`
  display: grid;
  grid-template-columns: 10rem 4rem 14rem;
  row-gap: 4rem;
  margin-top: 2rem;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.Black300};
  }

  b {
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.Black500};
  }
`;

const Insue = styled.div`
  grid-area: main;
  background-color: ${({ theme }) => theme.colors.Black_W};
  padding: 5.2rem;
  margin-left: 3.2rem;
  margin-bottom: 5rem;
  border-radius: 3.2rem;
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

const InsueBox = styled.div`
  display: grid;
  margin: 2rem 2.5rem;
  row-gap: 5.2rem;
  column-gap: 2.4rem;
  grid-template-columns: repeat(5, 18.3rem);

  ${media.small`
    grid-template-columns: repeat(4, 22rem);
  `}

  ${media.mobile`
    grid-template-columns: repeat(2, 30rem);
  `}
`;
export default UserInfoScreen;
