import { InsueMapCategorys } from '@utils/common/InsurCategory';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

import InsueMapHeadSection from '@components/InsueMap/InsueMapHeadSection';
import InsueMapSecondSection from '@components/InsueMap/InsueMapSecondSection';
import media from '@styles/media';
import { convertInsureType } from '@utils/common/convertInsureType';
import { useInsueDetailQuery } from '@apis/insuemap/insuemap';
import { recommendRequest } from '@apis/insuemap/insuemap.d';
import RecommendSection from '@components/InsueMap/RecommendSection';
import { useEffect, useState } from 'react';
import FailAlarm from '@components/commons/FailAlarm';
import { useStore } from '@stores/useStore';
import { useDeleteFavoritMutation, useFavoritMutation, useFavoritQuery } from '@apis/account/account';
import { DeleteFavoritRequest, PostFavoritRequest } from '@apis/account/account.d';

function InsueMapScreen() {
  const { isLogin } = useStore();
  const [alarmShown, setAlarmShown] = useState(false);
  // 첫 진입시 현재 선택된 보험 종류 판단
  const location = useLocation();
  const insue = { ...location.state };
  const insueItem = InsueMapCategorys.find((item) => item.nav === insue.nav);

  if (!insueItem)
    return (
      <Container>
        <h1>보험을 찾을 수 없습니다.</h1>
      </Container>
    );

  // GET으로 가져오는 내용 : Subscribe 유무, 등록한 보험과 링크, 추천보험 리스트
  const recommendRequestData: recommendRequest = { insuranceType: convertInsureType(insueItem.name) };
  const { detailQuery } = useInsueDetailQuery(recommendRequestData);

  // 관심보험 조회 및 등록 API
  const { favoritQuery } = useFavoritQuery();
  const { favoritMutation } = useFavoritMutation();
  const { deletefavoritMutation } = useDeleteFavoritMutation();

  // 관심 보험 등록 및 취소 PATCH API. 요청에 따라 현재 값도 달라져야함.
  function handleSubscribe(change: boolean) {
    if (!isLogin) {
      setAlarmShown(true);
      return;
    }

    // 등록하기
    if (insueItem && change) {
      const insueData: PostFavoritRequest = {
        insuranceType: insueItem?.value,
      };
      favoritMutation.mutate(insueData);
    }

    // 취소하기
    else if (insueItem && !change) {
      const id = favoritQuery.data?.find((item) => item.insuranceType === insueItem.value)?.favoriteInsuranceId;
      if (id) {
        const insueData: DeleteFavoritRequest = {
          favoriteInsuranceId: id,
        };
        deletefavoritMutation.mutate(insueData);
      }
    }
  }

  // 알림창
  useEffect(() => {
    if (alarmShown) {
      setTimeout(() => {
        setAlarmShown(false);
      }, 2000);
    }
  }, [alarmShown]);

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'center', zIndex: 2 }}>
        <FailAlarm text={'로그인이 필요한 서비스입니다.'} alarmShown={alarmShown} />
      </div>

      {/* 보험 설명, 관심보험 */}
      <InsueMapHeadSection
        insueName={insueItem.name}
        insueExplain={insueItem.explain}
        isSubscribe={favoritQuery.data && favoritQuery.data?.some((item) => item.insuranceType === insueItem.value)}
        handleSubscribe={handleSubscribe}
      />

      {/* 현재 등록한 보험, 관심 유무 */}
      <InsueMapSecondSection
        insueName={insueItem.name}
        insueRecommandPerson={insueItem.recommand}
        insueRecommandExplain={insueItem.recomtxt}
        insueIcon={insueItem.img}
        isSubscribe={favoritQuery.data && favoritQuery.data?.some((item) => item.insuranceType === insueItem.value)}
        registInsueCompany={detailQuery.data?.insuranceCompany}
        registInsueLink={detailQuery.data?.insuranceLink}
      />

      {/* 추천 리스트 */}
      <RecommendSection
        isLoading={detailQuery.isLoading}
        isError={detailQuery.isError}
        insuranceRecommends={detailQuery.data?.insuranceRecommends}
      />
    </Container>
  );
}

const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Recommand = styled.div`
  width: 63%;
  margin-top: 6.9rem;

  ${media.mobile`
    width: 86%;
    margin-top: 16rem;
  `};

  h1 {
    font-weight: 600;
    margin-bottom: 3rem;
    line-height: normal;
    font-size: ${({ theme }) => theme.fontSizes.subtitle};
    color: ${({ theme }) => theme.colors.Primary500};

    ${media.mobile`
      font-size: 20px;
      white-space: pre-wrap;
    `};
  }
  /* 
  p {
    margin: 20rem 0;
    text-align: center;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.paragraph};
    color: ${({ theme }) => theme.colors.Black500};
    line-height: normal;

    ${media.small`
      font-size: 18px;
      margin: 10rem 0;
    `};
  } */
`;

export default InsueMapScreen;
