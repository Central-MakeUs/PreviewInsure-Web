import { ReactComponent as Chatting } from '@/assets/icons/Chatting.svg';
import { ReactComponent as X } from '@/assets/icons/X.svg';

const testPage2 = () => {
  return (
    <div>
      <div>
        <h1>test2</h1>
        <p>2번 페이지</p>
        <p>티즈 테스트용</p>
      </div>
      <Chatting width={30} height={30} fill="orange" />
      <X width={30} height={30} fill="orange" />
    </div>
  );
};

export default testPage2;
