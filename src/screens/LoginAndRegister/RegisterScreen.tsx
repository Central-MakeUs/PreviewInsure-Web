import React from 'react';
import styled from 'styled-components';
import { ReactComponent as GoogleIcon } from '@/assets/icons/GoogleIcon.svg';
import { ReactComponent as AppleIcon } from '@/assets/icons/AppleIcon.svg';
import OAuthButton from '@components/LoginAndRegister/OAuthButton';
import { useNavigate } from 'react-router-dom';

import { googleLogin } from '@utils/LoginAndRegister/Login';
import { appleLogin } from '@utils/LoginAndRegister/AppleLogin';
import media from '@styles/media';

function RegisterScreen() {
  const navigate = useNavigate();
  const RegisterGoogle = () => {
    console.log('Register Google');
    googleLogin();
  };

  const RegisterApple = async () => {
    console.log('Register Apple');
    appleLogin();
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
          icon={
            <IconBox>
              <GoogleIcon width={'100%'} height={'100%'} />
            </IconBox>
          }
          text={'Google로 시작하기'}
          type={'google'}
        />
        <OAuthButton
          onClick={RegisterApple}
          icon={
            <IconBox>
              <AppleIcon width={'100%'} height={'100%'} />
            </IconBox>
          }
          text={'Apple로 시작하기'}
          type={'apple'}
        />
      </ButtonGroup>
      <Line />
      <Explain>
        <p>소셜 정보로 회원가입이 어려운 경우, </p> reviewInsue@gmail.com 로 문의해주세요.
      </Explain>
    </Container>
  );
}

const Container = styled.div`
  padding: 7.6rem 0;
  /* ${({ theme }) => theme.common.flexCenter}; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 18rem);

  ${media.mobile`
    // 767 < 
    height: calc(100vh - 16rem - 22rem);
  `}
`;

const Title = styled.h1`
  font-weight: 600;
  display: block;
  margin-bottom: 3.4rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.Black500};

  ${media.mobile`
    // 767 < 
    display:none;
  `}
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

  ${media.mobile`
    // 767 < 
    flex-grow:1;
  `}
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

  ${media.mobile`
    // 767 < 
    width:100%;
    gap: 2rem;
  `}
`;

const IconBox = styled.div`
  width: 3rem;
  height: 3rem;

  ${media.mobile`
    // 767 < 
    width: 5rem;
    height: 5rem;
  `}
`;

const Line = styled.div`
  width: 49.7rem;
  height: 0;
  border: 0.5px solid ${({ theme }) => theme.colors.Black200};
  margin-bottom: 4.3rem;

  ${media.mobile`
    // 767 < 
    width:82%;
  `}
`;

const Explain = styled.p`
  color: ${({ theme }) => theme.colors.Black200};
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  flex-direction: column;
  text-align: center;
  line-height: 1.5;

  ${media.mobile`
    // 767 < 
    font-size: ${({ theme }: any) => theme.fontSizes.paragraph};
  `}
`;

export default RegisterScreen;
