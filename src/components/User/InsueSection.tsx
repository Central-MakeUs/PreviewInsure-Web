import styled from 'styled-components';
import { CategoryImg } from '@utils/common/InsurCategory';
import { useEffect, useState } from 'react';
import media from '@styles/media';
import InsueBarItem from '@components/User/InsueBarItem';
import { convertInsureString } from '@utils/common/convertInsureType';
import { UseQueryResult } from '@tanstack/react-query';
import Loading from '@components/commons/Loading';

interface InsueSectionProps {
  view?: 'VIEW | EDIT';
  insurancesData: any[] | undefined;
  isError: boolean;
  isLoading: boolean;
}
interface Item {
  type: string;
  insueCompany: string;
}
function InsueSection({ insurancesData, isError, isLoading }: InsueSectionProps) {
  // TODO: GET요청
  // const { insurancesQuery } = useInsueListQuery();
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

  if (isLoading) {
    return (
      <div style={{ margin: '0 auto', width: '30px' }}>
        <Loading width={30} height={30} type={'spinningBubbles'} color={'#6879FB'} />
      </div>
    );
  }

  if (isError) {
    return <Message>데이터를 가져오는 중 에러가 발생했어요.</Message>;
  }

  if (insurancesData?.length === 0) {
    return <Message>등록한 보험 정보가 없어요.</Message>;
  }

  return (
    <InsueBox>
      {insurancesData &&
        insurancesData?.map((insue) => (
          <InsueBarItem
            text={convertInsureString(insue.insuranceType)}
            SVG={CategoryImg.find((item) => item.value === insue.insuranceType)?.img}
            company={insue.insuranceCompany}
            handleInsue={changeInsue}
          />
        ))}
    </InsueBox>
  );
}

const InsueBox = styled.div`
  width: 89%;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  ${media.mobile`
    flex-wrap: nowrap;
  width: 89%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  `}
`;

const Message = styled.p`
  width: fit-content;
  margin: 14rem auto;
  color: ${({ theme }) => theme.colors.Black300};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 500;
  white-space: pre-wrap;
  text-align: center;
  line-height: normal;

  ${media.mobile`
    font-size: 14px;
  `}
`;

export default InsueSection;
