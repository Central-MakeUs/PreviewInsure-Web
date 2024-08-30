import Button from '@components/commons/Button';
import Loading from '@components/commons/Loading';
import { useStore } from '@stores/useStore';
import media from '@styles/media';
import axiosInstance from '@utils/axios';
import { closeNewTab } from '@utils/common/openNewTab';
import { platform } from 'os';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const GoogleLoginCallback = () => {
  const navigate = useNavigate();
  const { login, setTempToken } = useStore();
  const [accessToken, setAccessToken] = useState<string>('');
  const [accessNickname, setAccessNickname] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  // 현재 url에서 code 부분 추출
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  // 1
  useEffect(() => {
    if (code) {
      handleLoginPost(code);
    } else {
      console.log('로그인 재시도하세요.');
      // closeNewTab(); //WebView로 전송
      setErrorMessage('로그인에 실패하였습니다.');
    }
  }, [code, navigate]);

  // 2
  const handleLoginPost = async (code: string) => {
    //코드 받아와지는 거 확인됐음.
    // console.log(code);

    try {
      // 토큰 서버에 전송. 로그인 요청.
      const res = await axiosInstance.get(`/oauth?platform=GOOGLE&code=${code}`);
      console.log(res);
      // 토큰 zustand 저장
      setAccessToken(res.data.data.atk);
      setAccessNickname(res.data.data.nickname);
    } catch (error: any) {
      console.log('google login error', error);
      if (error?.response.data.code === -1004) {
        alert('탈퇴한 유저는 재가입할 수 없습니다.');
        setErrorMessage('탈퇴한 유저는 재가입할 수 없습니다.');
      } else {
        setErrorMessage('로그인에 실패하였습니다.');
      }
    }
  };

  // 3
  useEffect(() => {
    if (accessToken) {
      console.log('accessToken', accessToken);
      console.log('accessNickname', accessNickname);

      if (accessToken && accessNickname === 'null') {
        //register
        console.log('register');
        setTempToken(accessToken); //temp token 저장
        // closeNewTab(); //WebView로 전송
        navigate('/registerAgree');
      } else if (accessToken) {
        // login
        console.log('login');
        login(accessToken, accessNickname);
        // closeNewTab(); //WebView로 전송
        navigate('/');
      }

      closeNewTab(); //WebView로 전송
    }
  }, [accessToken, accessNickname]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}
    >
      <Loading type={'spinningBubbles'} color={'#6879FB'} width={69.33} height={69.33} />
      <br />
      {errorMessage && <Message>{errorMessage}</Message>}
      {errorMessage && (
        <Button
          size="big"
          kind="outline"
          handler={() => {
            navigate('/login');
          }}
        >
          로그인 화면으로
        </Button>
      )}
      {/* {code ? <h1>로그인 중입니다.</h1> : <h1>로그인에 실패하였습니다.</h1>} */}

      {/* <button onClick={handleCriticalLogin}>일단 로그인하기</button> */}
    </div>
  );
};

const Message = styled.p`
  width: fit-content;
  margin: 14rem auto;
  color: ${({ theme }) => theme.colors.Black300};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 500;
  white-space: pre-wrap;
  text-align: center;
  line-height: normal;

  ${media.mobile`
    margin: 4rem auto;
    font-size: 14px;
  `}
`;

export default GoogleLoginCallback;
