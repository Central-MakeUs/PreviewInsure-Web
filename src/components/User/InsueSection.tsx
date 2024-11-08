import styled from 'styled-components';
import { CategoryImg } from '@utils/common/InsurCategory';
import { useEffect, useState } from 'react';
import media from '@styles/media';
import InsueBarItem from '@components/User/InsueBarItem';
import { convertInsureString } from '@utils/common/convertInsureType';
import { UseQueryResult } from '@tanstack/react-query';
import Loading from '@components/commons/Loading';
import { useInsueComponayPatchMutation } from '@apis/account/account';
import { PatchInsueRequest } from '@apis/account/account.d';

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
  // 가입한 보험사 수정 API
  const { insueCompanyPatchMutation } = useInsueComponayPatchMutation();

  function changeInsue(id: number, type: string, changeCompany: string) {
    console.log('change');
    console.log(type, changeCompany);

    const data: PatchInsueRequest = {
      accountInsuranceId: id,
      insuranceType: type,
      insuranceCompany: changeCompany,
    };

    insueCompanyPatchMutation.mutate(data);
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
            key={insue.accountInsuranceId}
            id={insue.accountInsuranceId}
            type={insue.insuranceType}
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
  width: 100%;
  padding: 0 32px;
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
