import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '@components/commons/Loading';

function AppleLoginCallback() {
  const navigate = useNavigate();
  const [idToken, setIdToken] = useState(null);
  const [code, setCode] = useState(null);
  const [state, setState] = useState(null);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const queryParams: any = new URLSearchParams(hash);
    setIdToken(queryParams.get('id_token'));
    setCode(queryParams.get('code'));
    setState(queryParams.get('state'));
  }, []);

  const handleSign = () => {
    const data = {
      id_token: idToken,
      code: code,
      state: state,
    };
    console.log(data);
  };

  useEffect(() => {
    if (state && idToken && code) {
      // console.log('state:', state);
      // console.log('id_token:', idToken);
      // console.log('code:', code);
      handleSign();
    }
  }, [state, idToken, code]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Loading type={'spinningBubbles'} color={'#6879FB'} width={69.33} height={69.33} />
    </div>
  );
}

export default AppleLoginCallback;
