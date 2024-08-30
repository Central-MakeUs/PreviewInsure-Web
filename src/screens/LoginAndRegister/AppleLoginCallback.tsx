import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '@components/commons/Loading';
import { useStore } from '@stores/useStore';
import { closeNewTab } from '@utils/common/openNewTab';

const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;

function AppleLoginCallback() {
  const navigate = useNavigate();
  const { login, setTempToken } = useStore();

  const [accessToken, setAccessToken] = useState<string>('');
  const [accessNickname, setAccessNickname] = useState<string>('');

  let getParameter = (key: string) => {
    return new URLSearchParams(location.search).get(key) as string;
  };

  useEffect(() => {
    // token 저장
    setAccessToken(getParameter('token'));
    setAccessNickname(getParameter('nickname'));

    closeNewTab(); //WebView로 전송
    // if (getParameter('nickname') !== 'null') {
    //   // 닉네임이 decoding 된 형태
    //   setAccessNickname(decodeURIComponent(getParameter('nickname'))); // decoding
    // } else {
    //   // nickname => null
    //   setAccessNickname(getParameter('nickname'));
    // }
  }, []);

  useEffect(() => {
    if (accessToken) {
      console.log('accessToken', accessToken);
      console.log('accessNickname', accessNickname);

      if (accessToken && (accessNickname === 'null' || accessNickname === 'none')) {
        //register
        console.log('register');
        setTempToken(accessToken); //temp token 저장

        closeNewTab(); //WebView로 전송
        navigate('/registerAgree');
      } else if (accessToken) {
        // login
        console.log('login');
        login(accessToken, accessNickname);

        closeNewTab(); //WebView로 전송
        navigate('/');
      }
    }
  }, [accessToken, accessNickname]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Loading type={'spinningBubbles'} color={'#6879FB'} width={69.33} height={69.33} />
    </div>
  );
}

export default AppleLoginCallback;
