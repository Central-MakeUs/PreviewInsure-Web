import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '@components/commons/Loading';
import { closeNewTab } from '@utils/common/openNewTab';

function AppleErrorCallback() {
  const navigate = useNavigate();

  let getParameter = (key: string) => {
    return new URLSearchParams(location.search).get(key) as string;
  };

  useEffect(() => {
    closeNewTab(); //WebView로 전송

    // 에러 파라미터 들고오기
    const isRegistered = getParameter('isRegistered');
    if (isRegistered === 'true') {
      alert('탈퇴한 유저는 재가입할 수 없습니다.');
      navigate('/login');
    }
  }, []);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Loading type={'spinningBubbles'} color={'#6879FB'} width={69.33} height={69.33} />
    </div>
  );
}

export default AppleErrorCallback;
