import React from 'react';
import styled from 'styled-components';
import { ReactComponent as GoogleIcon } from '@/assets/icons/GoogleIcon.svg';
import { ReactComponent as AppleIcon } from '@/assets/icons/AppleIcon.svg';
import OAuthButton from '@components/LoginAndRegister/OAuthButton';

function RegisterScreen() {
  const RegisterGoogle = () => {
    console.log('Register Google');
  };

  const RegisterApple = () => {
    console.log('Register Apple');
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <Subtitle>
        <SubtitleP>인생 보험 설계,</SubtitleP>
        <SubtitleP>
          <SubTitleTitle>프리뷰인슈</SubTitleTitle>에서 내 보험을 그려보세요
        </SubtitleP>
      </Subtitle>
      <ButtonGroup>
        <OAuthButton
          onClick={RegisterGoogle}
          icon={<GoogleIcon width={25} height={25} />}
          text={'Google로 시작하기'}
          type={'google'}
        />
        <OAuthButton
          onClick={RegisterApple}
          icon={<AppleIcon width={23} height={25} />}
          text={'Apple로 시작하기'}
          type={'apple'}
        />
      </ButtonGroup>
      <Line />
      <Explain>
        <p>소셜 정보 없이 회원가입을 원하신다면,</p> 아래 [문의하기]로 문의해 주세요.
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
  margin-bottom: 9.5rem;
`;

const SubtitleP = styled.p``;

const SubTitleTitle = styled.span`
  display: inline;
  color: ${({ theme }) => theme.colors.Primary500};
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  margin-bottom: 7rem;
`;

const Line = styled.div`
  width: 49.7rem;
  height: 0;
  border: 0.5px solid ${({ theme }) => theme.colors.Black200};
  margin-bottom: 4.3rem;
`;

const Explain = styled.p`
  color: ${({ theme }) => theme.colors.Black200};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  flex-direction: column;
  text-align: center;
  line-height: 1.5;
`;

export default RegisterScreen;
