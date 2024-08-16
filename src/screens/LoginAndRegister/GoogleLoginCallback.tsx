import Loading from '@components/commons/Loading';
import { useStore } from '@stores/useStore';
import axiosInstance from '@utils/axios';
import { platform } from 'os';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleLoginCallback = () => {
  const navigate = useNavigate();
  const { login, setTempToken } = useStore();
  const [accessToken, setAccessToken] = useState<string>('');
  const [accessNickname, setAccessNickname] = useState<string>('');

  // 이미 가입한 유저일 시 : 메인 페이지로 이동
  const handleHome = () => {
    navigate('/');
    window.location.reload();
  };

  // 처음 가입한 유저일 시 : 닉네임 설정 페이지로 이동
  const handleRegist = () => {
    navigate('/registerAgree');
    window.location.reload();
  };

  // 현재 url에서 code 부분 추출
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  const handleLoginPost = async (code: string) => {
    //코드 받아와지는 거 확인됐음.
    // console.log(code);

    const data = {
      platform: 'GOOGLE',
      code: code,
    };

    try {
      // 토큰 서버에 전송. 로그인 요청.
      const res = await axiosInstance.post(`/oauth?platform=GOOGLE&code=${code}`);
      console.log(res);
      // 토큰 zustand 저장
      // TODO : api 반환값에 따른 처리
      // const accessToken = res.data.data.atk;
      // const accessNickname = res.data.data.nickname;
      setAccessToken(res.data.atk);
      setAccessNickname(res.data.nickname);

      // 신규/기존 회원 여부에 따라 페이지 이동
      // res.data.isExistingMember ? handleHome() : handleRegist();
    } catch (error) {
      console.log(error);
    }
  };

  function handleCriticalLogin() {
    login('aaaaaaaaaaaaa', '춤추는 부엉이');
    navigate('/');
  }

  useEffect(() => {
    if (code) {
      handleLoginPost(code);
    } else {
      console.log('로그인 재시도하세요.');
    }
  }, [code, navigate]);

  useEffect(() => {
    if (accessToken) {
      console.log('accessToken', accessToken);
      console.log('accessNickname', accessNickname);

      if (accessToken && accessNickname === 'null') {
        //register
        console.log('register');
        setTempToken(accessToken); //temp token 저장
        navigate('/registerAgree');
      } else if (accessToken) {
        // login
        console.log('login');
        login(accessToken, accessNickname);
        navigate('/');
      }
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
      {code ? <h1>로그인 중입니다.</h1> : <h1>로그인에 실패하였습니다.</h1>}

      <button onClick={handleCriticalLogin}>일단 로그인하기</button>
    </div>
  );
};

export default GoogleLoginCallback;
