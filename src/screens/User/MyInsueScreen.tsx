import styled from 'styled-components';
import { CategoryImg } from '@utils/common/InsurCategory';
import { useState } from 'react';
import media from '@styles/media';
import { useStore } from '@stores/useStore';
import InsueBarItem from '@components/User/InsueBarItem';

interface Item {
  type: string;
  insueCompany: string;
}
function MyInsueScreen() {
  const { nickName } = useStore();
  // TODO: GET요청
  const myinsue = [
    { type: '생명보험', insueCompany: 'KB손해보험' },
    { type: '건강보험', insueCompany: 'KB손해보험' },
    { type: '상해보험', insueCompany: 'KB손해보험' },
    { type: 'CI보험', insueCompany: 'KB손해보험' },
    { type: '운전자보험', insueCompany: 'KB손해보험' },
    { type: '연금보험', insueCompany: 'KB손해보험' },
    { type: '애견보험', insueCompany: 'KB손해보험' },
    { type: '건강보험', insueCompany: 'KB손해보험' },
  ];

  const [insues, setInsues] = useState<Item[]>(myinsue);

  function changeInsue(type: string, company: string) {
    const updatedInsues = insues.map((item) => (item.type === type ? { ...item, insueCompany: company } : item));
    setInsues(updatedInsues);

    // TODO : POST 요청
  }

  return (
    <>
      <Head>
        <Title>{`${nickName}님의\n현재 가입된 보험이에요`}</Title>
        <SubTitle>{`입력된 보험사를 수정할 수 있어요.`}</SubTitle>
      </Head>
      <HeadCircle />

      <InsueBox>
        {insues.map((insue) => (
          <InsueBarItem
            text={insue.type}
            SVG={CategoryImg.find((item) => item.name === insue.type)?.img}
            company={insue.insueCompany}
            handleInsue={changeInsue}
          />
        ))}
      </InsueBox>
    </>
  );
}

const Head = styled.div`
  width: 100%;
  padding: 7.5rem 6rem;
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

const InsueBox = styled.div`
  width: 89%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  top: -8rem;
`;

export default MyInsueScreen;
