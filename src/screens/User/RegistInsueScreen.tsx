import styled from 'styled-components';
import media from '@styles/media';
import { useStore } from '@stores/useStore';
import InsueSection from '@components/User/InsueSection';
import { useInsueListQuery } from '@apis/account/account';

function RegistInsueScreen() {
  const { nickName } = useStore();
  const { insurancesQuery } = useInsueListQuery();

  return (
    <>
      <Head>
        <Title>{`${nickName}님의\n현재 가입된 보험이에요`}</Title>
        <SubTitle>{`입력된 보험사를 수정할 수 있어요.`}</SubTitle>
      </Head>
      <HeadCircle />

      <Container>
        <InsueSection
          insurancesData={insurancesQuery.data}
          isError={insurancesQuery.isError}
          isLoading={insurancesQuery.isLoading}
        />
      </Container>
    </>
  );
}

const Head = styled.div`
  width: 100%;
  padding: 7.5rem 32px;
  background-color: ${({ theme }) => theme.colors.Primary100};
`;

const HeadCircle = styled.div`
  background-color: ${({ theme }) => theme.colors.Primary100};
  width: 100%;
  height: 6rem;
  position: relative;
  top: -1px;
  border-radius: 0 0 50% 50%;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.Black500};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.title};
  line-height: normal;
  white-space: pre;
  margin-bottom: 6rem;

  ${media.mobile`
    font-size: 20px;
  `}
`;
const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.Black300};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  line-height: normal;
  white-space: pre;

  ${media.mobile`
    font-size: 14px;
  `}
`;
const Container = styled.div`
  position: relative;
  top: -8rem;
`;
export default RegistInsueScreen;
