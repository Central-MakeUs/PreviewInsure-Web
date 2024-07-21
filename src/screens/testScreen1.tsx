import styled from 'styled-components';
import media from '@styles/media';
import Button from '@components/commons/Button';
import Cartegory from '@components/commons/Cartegory';
import Tab from '@components/commons/Tab';
import { useState } from 'react';
import { ReactComponent as Lock } from '@assets/icons/Lock.svg';
import { googleLogin } from '@utils/LoginAndRegister/Login';
import { useQuery } from '@tanstack/react-query';

import { getRandomNickname } from '@utils/LoginAndRegister/RegisterApi';
interface NickNameInterface {
  code: number;
  message: string;
  data: object;
}
const testPage1 = () => {
  const [curStep, setCurStep] = useState(1);

  // const { isLoading, data } = useQuery<NickNameInterface>({ queryKey: ['nickname'], queryFn: getRandomNickname });

  return (
    <div>
      <Title>test1</Title>

      {/* <Title>{isLoading ? data : 'loading...'}</Title> */}

      <Button kind="fill" disable={false} size="big" width="80%" handler={() => googleLogin()}>
        구글로그인
      </Button>
      <p>1번 페이지</p>
      <p>이노 테스트용</p>

      <a>aaaaaaaaaaaaa</a>
      <b>bbbbbbbbbb</b>
      <br />
      <Button
        kind="fill"
        disable={false}
        size="big"
        width="100%"
        handler={() => {
          console.log('click!');
        }}
      >
        <Lock width={24} height={24} fill={'white'} />
        Button
      </Button>
      <Button
        kind="fill"
        size="small"
        handler={() => {
          console.log('click!');
        }}
      >
        <Lock width={20} height={20} fill={'white'} style={{ marginRight: '1.6rem' }} />
        small
      </Button>
      <br />
      <Button
        kind="outline"
        disable={false}
        size="big"
        handler={() => {
          console.log('click!');
        }}
      >
        <Lock width={24} height={24} fill={'black'} />
        버튼2
      </Button>
      <br />
      <Button
        kind="text"
        disable={false}
        size="big"
        handler={() => {
          console.log('click!');
        }}
      >
        버튼3
      </Button>

      <br />
      <Cartegory color="Primary" text="Cartegory" handler={() => console.log('remove')} />
      <Cartegory color="Gray" text="Cartegory" handler={() => console.log('remove')} />

      <div style={{ width: '100%' }}>
        <Tab stepText={['과거', '현재', '미래']} activeStep={curStep} handler={setCurStep}></Tab>
      </div>
      <Button
        kind="outline"
        disable={false}
        size="small"
        handler={() => {
          if (curStep !== 1) setCurStep(curStep - 1);
        }}
      >
        이전
      </Button>
      <Button
        kind="outline"
        disable={false}
        size="small"
        handler={() => {
          if (curStep !== 3) setCurStep(curStep + 1);
        }}
      >
        다음
      </Button>

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
  font-size: ${({ theme }) => theme.fontSizes.title};
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
