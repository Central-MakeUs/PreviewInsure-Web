import Reac, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Information } from '@/assets/icons/Information.svg';
import { ReactComponent as Heart } from '@/assets/icons/Heart.svg';

function RegisterNickname() {
  const [nickname, setNickname] = useState('춤추는 부엉이');

  const resetNickname = () => {
    console.log('reset Nickname');
  };
  const confirmNickname = () => {
    console.log('confirm Nickname');
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <Subtitle>
        <SubtitleP>익명 서비스를 사용하기 위해</SubtitleP>
        <SubtitleP>닉네임을 설정해 드릴게요.</SubtitleP>
      </Subtitle>
      <NicknameLine>
        나는 <Nickname>{nickname}</Nickname>에요.
      </NicknameLine>
      <RegisterBtnGroup>
        <RegisterBtn onClick={resetNickname} registerable={false}>
          다시 설정할래요...
        </RegisterBtn>
        <RegisterBtn onClick={confirmNickname} registerable={true}>
          <Heart width={24} height={21} /> 마음에 들어요!
        </RegisterBtn>
      </RegisterBtnGroup>
      <Explain>
        <Information width={32} height={32} fill={'#000'} />
        <p>닉네임은 설정 이후 변경할 수 없어요.</p>
      </Explain>
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
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
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
  margin-bottom: 6.8rem;
`;

const SubtitleP = styled.p``;

const NicknameLine = styled.p`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.Black500};
  font-weight: 600;
  margin-bottom: 7rem;
`;

const Nickname = styled.p`
  margin: 0 3rem 0 3rem;
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.colors.Primary500};
`;

const RegisterBtnGroup = styled.div`
  display: flex;
  gap: 4rem;
`;

const RegisterBtn = styled.button<{ registerable: boolean }>`
  width: 22.5rem;
  height: 6rem;
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
  gap: 1.6rem;
`;

const Explain = styled.p`
  color: ${({ theme }) => theme.colors.Black500};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export default RegisterNickname;
