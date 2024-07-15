import styled from 'styled-components';
import media from '@styles/media';

const testPage1 = () => {
  return (
    <div>
      <Title>test1</Title>
      <p>1번 페이지</p>
      <p>이노 테스트용</p>

      <a>aaaaaaaaaaaaa</a>
      <b>bbbbbbbbbb</b>
      <br />
      <button>button</button>

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
