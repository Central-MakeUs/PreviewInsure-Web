import styled from 'styled-components';

const content = `프리뷰인슈(이하 "회사" 또는 "프리뷰인슈"라 함)는 개인정보보호를 매우 중요시하며, 개인 회원 정보의 이용 및 보호에 관한 법률, 정보보호 등에 관한 법률, 개인정보보호법 등 관계법령의 규정을 준수하여 개인정보를 최선을 다하여 보호함은 물론 개인정보보호법에 의거한 개인정보 처리방침을 통하여 정보주체의 개인정보보호 및 권익을 보호하고 이와 관련한 고충을 원활하게 처리할 수 있도록 합니다.

이 방침은 회사의 정책에 따라 수시로 변경될 수 있으며, 중요한 내용이 변경되는 경우에는 이용자가 변경 내용을 확인할 수 있도록 공개하고 있습니다.

제 1 장. 개인정보의 수집 및 이용 목적
제 2 장 수집하는 개인정보 항목 및 수집방법
제 3 장 수집한 개인정보의 보유 및 이용기간
제 4 장 개인정보의 파기절차 및 방법
제 5 장 개인정보의 제공 및 공유
제 6 장 개인정보 위탁처리 업체
제 7 장 개인정보 자동 수집 장치의 설치, 운영 및 거부에 관한 사항
제 8 장 개인정보의 안전성 확보 조치
제 9 장 이용자 권리와 그 행사방법
제 10 장 개인정보 보호책임자 및 담당자 안내
제 11 장 고지

## 제 1 장. 개인정보의 수집 및 이용 목적

프리뷰인슈가 수집한 개인정보는 다음의 목적을 위해 활용합니다.

1. 입력된 정보에 기반한 서비스 제공 및 요금정산
콘텐츠 제공, 물품배송 또는 청구서 등 발송, 본인 인증 및 구매, 요금 결제, 요금추심
2. 회원 관리
회원제 서비스 이용에 따른 본인 확인, 개인식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 가입 및 가입횟수 제한, 분쟁 조정을 위한 기록보존, 불만처리 등 민원처리, 고지사항 전달
3. 마케팅 및 광고에 활용
신규 서비스(제품) 개발 및 특화, 접속 빈도 파악, 회원의 서비스 이용에 대한 통계, 이벤트 등 광고성 정보 전달

공고 일자 : 2024년 8월 10일

시행 일자 : 2024년 8월 20일`;

const PolicyPrivacyScreen = () => {
  return (
    <>
      <Head>개인정보 처리방침</Head>

      <Subtitle>|ㅤ개인정보 처리방침</Subtitle>

      <Content>{content}</Content>
    </>
  );
};
const Head = styled.div`
  background: linear-gradient(90deg, #3e4895 0%, #6879fb 50%, #3e4895 100%);
  color: white;
  padding: 15rem;
  font-size: 5rem;
  font-weight: 600;
  text-align: center;
`;

const Subtitle = styled.h2`
  width: 80%;
  margin: 9.6rem auto 0 auto;
  color: ${({ theme }) => theme.colors.Primary500};
  font-size: 3rem;
  font-weight: 600;
`;

const Content = styled.p`
  width: 80%;
  margin: 7rem auto 20rem auto;
  color: ${({ theme }) => theme.colors.Black500};
  font-size: 2.5rem;
  font-weight: 400;
  white-space: pre-wrap;
`;

export default PolicyPrivacyScreen;
