import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Warning } from '@/assets/icons/Warning.svg';
import { ReactComponent as Close } from '@/assets/icons/Close.svg';
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
        <RegisterBtn onClick={resetNickname}>
          <Close width={25} height={25} fill={'#fff'} /> 다시 설정할래요
        </RegisterBtn>
        <RegisterBtn onClick={confirmNickname}>
          <Heart width={24} height={21} fill={'#fff'} /> 마음에 들어요!
        </RegisterBtn>
      </RegisterBtnGroup>
      <Explain>
        <Warning width={32} height={32} fill={'#000'} />
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
  margin-bottom: 6.8rem;
`;

const SubtitleP = styled.p``;

const NicknameLine = styled.p`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.small};
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

const RegisterBtn = styled.button`
  width: 22.5rem;
  height: 6rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.Black100};
  ${({ theme }) => theme.common.flexCenter};
  color: #fff;
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
  }
`;

const Explain = styled.p`
  color: ${({ theme }) => theme.colors.Black500};
  font-size: ${({ theme }) => theme.fontSizes.small};
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export default RegisterNickname;
