import { InsueMapCategorys } from '@utils/common/InsurCategory';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

import { useState } from 'react';
import InsueMapHeadSection from '@components/InsueMap/InsueMapHeadSection';
import InsueMapSecondSection from '@components/InsueMap/InsueMapSecondSection';
import media from '@styles/media';

function InsueMapScreen() {
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
  // TODO: 관심 보험 등록 및 취소 PATCH API. 요청에 따라 현재 값도 달라져야함.
  const nickname = '춤추는 부엉이';
  const [isSubscribe, setIsSubscribe] = useState<boolean>(false); // TODO : GET 요청
  const insuranceCompany = '한화생명';
  //   const insuranceCompany = undefined;
  const insuranceLink = 'https://www.hanwhalife.com/index.jsp';
  const insuranceRecommends = [
    {
      insuranceId: 61,
      insuranceCompany: '회사 III',
      insuranceContent: '종신 보험 보장 내용',
      insuranceRate: 0.65,
      price: 65500,
      link: 'http://link61.com',
    },
    {
      insuranceId: 1,
      insuranceCompany: '회사 A',
      insuranceContent: '종신 보험 보장 내용',
      insuranceRate: 0.05,
      price: 5500,
      link: 'http://link1.com',
    },
    {
      insuranceId: 91,
      insuranceCompany: '회사 MMMM',
      insuranceContent: '종신 보험 보장 내용',
      insuranceRate: 0.95,
      price: 95500,
      link: 'http://link91.com',
    },
    {
      insuranceId: 71,
      insuranceCompany: '회사 SSS',
      insuranceContent: '종신 보험 보장 내용',
      insuranceRate: 0.75,
      price: 75500,
      link: 'http://link71.com',
    },
  ];

  function handleSubscribe() {
    console.log('Subscribe변경 요청: ', !isSubscribe);
    setIsSubscribe((cur) => !cur);
  }

  return (
    <Container>
      {/* 보험 설명, 관심보험 */}
      <InsueMapHeadSection
        insueName={insueItem.name}
        insueExplain={insueItem.explain}
        isSubscribe={isSubscribe}
        handleSubscribe={handleSubscribe}
      />

      {/* 현재 등록한 보험, 관심 유무 */}
      <InsueMapSecondSection
        insueName={insueItem.name}
        insueRecommandExplain={insueItem.recommand}
        insueIcon={insueItem.img}
        isSubscribe={isSubscribe}
        registInsueCompany={insuranceCompany}
        registInsueLink={insuranceLink}
      />

      {/* 추천 리스트 */}
      <Recommand>
        <h1>{`${nickname}님,\n이런 보험은 어떤가요?`}</h1>
        <p>보험 추천기능은 현재 준비중 입니다.</p>
      </Recommand>
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
  }
`;

export default InsueMapScreen;
