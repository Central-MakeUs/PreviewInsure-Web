import React, { useState } from 'react';
import { ReactComponent as Chatting } from '@/assets/icons/Chatting.svg';
import { ReactComponent as Magnifier } from '@/assets/icons/Magnifier.svg';
import SearchBar from '@components/commons/SearchBar';
import Selector from '@components/commons/Selector';
import Loading from '@components/commons/Loading';
import Process from '@components/commons/Process';
import Process2 from '@components/commons/Process2';

const testPage2 = () => {
  //searchBar icon 클릭 시
  const SearchBarHandler = () => {
    console.log(1);
  };
  //selector check 여부
  const [check, setCheck] = useState(false);

  // process active step
  const [activeStep, setActiveStep] = useState(1);
  return (
    <div>
      <div>
        <h1>test2</h1>
        <p>2번 페이지</p>
        <p>티즈 테스트용</p>
        <p>배포자동화 되나?</p>
      </div>
      <br />
      <Chatting width={30} height={30} fill="orange" />
      {/* SearchBar */}
      <SearchBar
        backgroundColor={'#fff'}
        icon={<Magnifier width={27} height={29} fill={'#000'} />}
        handler={SearchBarHandler}
        height={9}
        placeholder={'awefewf'}
      />
      {/* Selector */}
      <Selector type={'circle'} check={check} setCheck={setCheck} redFlag={false} />
      {/* Loading */}
      <Loading type={'spinningBubbles'} color={'#6879FB'} width={69.33} height={69.33} />
      {/* process  밑에는 샘플 버튼  */}
      <Process stepNumber={4} activeStep={activeStep} />
      <Process2 activeStep={activeStep} />
      <br />
      <br />
      <button disabled={activeStep === 1} onClick={() => setActiveStep(activeStep - 1)}>
        prev
      </button>
      <button disabled={activeStep === 4} onClick={() => setActiveStep(activeStep + 1)}>
        next
      </button>
    </div>
  );
};

export default testPage2;
