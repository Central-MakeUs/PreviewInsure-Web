import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Warning } from '@/assets/icons/Warning.svg';
import { ReactComponent as Close } from '@/assets/icons/Close.svg';
import { ReactComponent as Heart } from '@/assets/icons/Heart.svg';
import media from '@styles/media';
import { useGetRandomNicknameQuery, useNicknameMutation } from '@apis/register/register';
import type { patchNickNameData } from '@apis/register/register.d';
import { useStore } from '@stores/useStore';
import { useNavigate } from 'react-router-dom';

function RegisterNickname() {
  const { temporaryToken, login } = useStore(); // 이걸 통해 서버에 엑세스
  const { nicknameMutation } = useNicknameMutation();
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const { nickNameQuery } = useGetRandomNicknameQuery();
  const { isLoading, isFetched, refetch } = nickNameQuery;

  const getNickname = () => {
    refetch();
  };

  const resetNickname = () => {
    // console.log('reset Nickname');
    getNickname();
  };

  const confirmNickname = () => {
    console.log('confirm Nickname');
    //
    //api POST   -> temporaryToken 엑세스
    const nicknameData: patchNickNameData = {
      nickname: nickname,
    };
    console.log('tempToken', temporaryToken);
    console.log('nicknameData', nicknameData);
    nicknameMutation.mutate(nicknameData, {
      onSuccess: (data) => {
        console.log('confirm nickname success');
        login(temporaryToken, nickname);
        navigate('/insueBording');
      },
    });
    // login(temporaryToken, nickname);
    // navigate('/insueBording');
  };

  useEffect(() => {
    // 최초 렌더링
    // console.log(isLoading, nickNameQuery?.data?.nickName);
    if (nickNameQuery.isFetched) {
      setNickname(nickNameQuery?.data?.nickName as string);
    }
  }, [isFetched]);

  useEffect(() => {
    // refetch 되면 변경
    setNickname(nickNameQuery?.data?.nickName as string);
  }, [nickNameQuery?.data?.nickName]);

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
          <XIconBOx>
            <Close width={'100%'} height={'100%'} fill={'#6879FB'} />{' '}
          </XIconBOx>
          다시 설정할래요
        </RegisterBtn>
        <RegisterBtn onClick={confirmNickname}>
          <HeartIconBox>
            <Heart width={'100%'} height={'100%'} fill={'#6879FB'} />
          </HeartIconBox>
          마음에 들어요!
        </RegisterBtn>
      </RegisterBtnGroup>
      <Explain>
        <WarningIconBox>
          <Warning width={'100%'} height={'100%'} fill={'#000'} />
        </WarningIconBox>

        <p>닉네임은 설정 이후 변경할 수 없어요.</p>
      </Explain>
    </Container>
  );
}

const Container = styled.div`
  padding: 7.6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: calc(100vh - 18rem);

  ${media.mobile`
    // 767 < 
    min-height: calc(100vh - 32rem);
    /* justify-content: center; */
    margin-top: 140px;
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
    font-size: 12px;
    color: ${({ theme }: any) => theme.colors.Black200};
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
  margin-bottom: 6.8rem;

  ${media.mobile`
    // 767 < 
    font-size:22px;
  `}
`;

const SubtitleP = styled.p``;

const NicknameLine = styled.p`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.Black500};
  font-weight: 600;
  margin-bottom: 7rem;

  ${media.mobile`
    // 767 < 
    font-size:16px;
    font-weight: 400;
  `}
`;

const Nickname = styled.p`
  margin: 0 3rem 0 3rem;
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.colors.Primary500};
  font-weight: 500;

  ${media.mobile`
    // 767 < 
    font-size:30px;
  `}
`;

const RegisterBtnGroup = styled.div`
  display: flex;
  gap: 4rem;

  ${media.mobile`
    // 767 < 
    width:100%;
    justify-content:center;
  `}
`;

const HeartIconBox = styled.div`
  width: 3rem;
  height: 3rem;

  ${media.mobile`
    // 767 < 
    width: 18px;
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

  ${media.mobile`
    // 767 < 
    font-size: 14px;
    width:42%;
    height:48px;
    border-radius:14px;
  `}

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
    /* width:82%; */
    font-size: 13px;
    color: ${({ theme }: any) => theme.colors.Black200};

    ${WarningIconBox} {
      svg {
        fill: ${({ theme }: any) => theme.colors.Black200};
      }
    }
  `}
`;

export default RegisterNickname;
