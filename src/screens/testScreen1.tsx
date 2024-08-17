import styled from 'styled-components';
import media from '@styles/media';
import Button from '@components/commons/Button';
import Cartegory from '@components/commons/Cartegory';
import Tab from '@components/commons/Tab';
import { useState } from 'react';
import { ReactComponent as Lock } from '@assets/icons/Lock.svg';
import { googleLogin } from '@utils/LoginAndRegister/Login';
import { useGetHealthQuery, useHealthMutation } from '@apis/health/health';
import { HealthRequest } from '@apis/health/health.d';

// Get 요청 방법
const GetTest = () => {
  const { healthQuery } = useGetHealthQuery();

  if (healthQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (healthQuery.isError) {
    return <div>Error: {healthQuery.error.message}</div>;
  }
  return (
    <>
      {healthQuery.isFetching && <p>fetch 요청중...</p>}
      <p>TEST GET 요청 결과 : {healthQuery.data?.isHealthCheck.toString()}</p>
      <button
        onClick={() => {
          healthQuery.refetch();
        }}
      >
        GET 요청 다시 보내기
      </button>
    </>
  );
};

// POST 요청 방법
const PostTest = () => {
  const { healthMutation } = useHealthMutation();

  const handleSubmit = () => {
    const updateData: HealthRequest = {
      name: '테스트',
      input: '테스트 input',
    };

    healthMutation.mutate(updateData);
  };

  return (
    <div>
      <p>POST TEST</p>
      <button onClick={() => handleSubmit()}>POST 보내기</button>

      {healthMutation.isPending && <p>요청 전송중...</p>}
      {healthMutation.isError && <p>Error: {healthMutation.error?.message}</p>}
      {healthMutation.isSuccess && <p>POST Success 결과 : {healthMutation.data?.input}</p>}
    </div>
  );
};

const testPage1 = () => {
  const [curStep, setCurStep] = useState(1);

  return (
    <div>
      <Title>test1</Title>
      <GetTest />
      <PostTest />
      <Title>dev 수정</Title>
      <Button kind="fill" disable={false} size="small" width="80%" handler={() => googleLogin()}>
        구글로그인
      </Button>
      <p>1번 페이지</p>
      <p>이노 테스트용</p>
      <a>aaaaaaaaaaaaa</a>
      <b>bbbbbbbbbb</b>
      <br />
      <Button
        kind="fill" // fill, outline, text
        size="small" // small, big
        disable={false}
        handler={() => {
          console.log('click!');
        }}
      >
        <Lock width={20} height={20} fill={'white'} style={{ marginRight: '1.6rem' }} />
        small
      </Button>
      <br />
      <br />
      <Cartegory color="Primary" text="Cartegory" handler={() => console.log('remove')} /> //Primary, Gray
      <div style={{ width: '100%' }}>
        <Tab stepText={['과거', '현재', '미래']} activeStep={curStep} handler={setCurStep}></Tab>
      </div>
      <Container></Container>
      <PcView>
        <p>pc에서만 보이는 영역</p>
      </PcView>
    </div>
  );
};

const PcView = styled.div`
  background-color: ${({ theme }) => theme.colors.Primary100};
  width: 100px;
  height: 100px;

  ${media.small`
    display: none;
    `};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
`;

const Container = styled.div`
  background-color: black;
  width: 100px;
  height: 100px;

  ${media.small`
    background-color: yellow;
  `};
`;

export default testPage1;
