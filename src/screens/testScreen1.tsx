import styled from 'styled-components';
import media from '@styles/media';
import Button from '@components/commons/Button';
import Cartegory from '@components/commons/Cartegory';
import Tab from '@components/commons/Tab';
import { useState } from 'react';

const testPage1 = () => {
  const [curStep, setCurStep] = useState(1);
  return (
    <div>
      <Title>test1</Title>
      <p>1번 페이지</p>
      <p>이노 테스트용</p>

      <a>aaaaaaaaaaaaa</a>
      <b>bbbbbbbbbb</b>
      <br />
      <Button
        kind="fill"
        disable={false}
        text="Button"
        size="big"
        handler={() => {
          console.log('click!');
        }}
      ></Button>
      <Button
        kind="fill"
        disable={false}
        text="small"
        size="small"
        handler={() => {
          console.log('click!');
        }}
      ></Button>
      <br />
      <Button
        kind="outline"
        disable={false}
        text="버튼2"
        size="big"
        handler={() => {
          console.log('click!');
        }}
      ></Button>
      <br />
      <Button
        kind="text"
        disable={false}
        text="버튼3"
        size="big"
        handler={() => {
          console.log('click!');
        }}
      ></Button>

      <br />
      <Cartegory color="Primary" text="Cartegory" handler={() => console.log('remove')} />
      <Cartegory color="Gray" text="Cartegory" handler={() => console.log('remove')} />

      <div style={{ width: '100%' }}>
        <Tab stepText={['과거', '현재', '미래']} activeStep={curStep} handler={setCurStep}></Tab>
      </div>
      <Button
        kind="outline"
        disable={false}
        text="이전"
        size="small"
        handler={() => {
          if (curStep !== 1) setCurStep(curStep - 1);
        }}
      ></Button>
      <Button
        kind="outline"
        disable={false}
        text="다음"
        size="small"
        handler={() => {
          if (curStep !== 3) setCurStep(curStep + 1);
        }}
      ></Button>

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
