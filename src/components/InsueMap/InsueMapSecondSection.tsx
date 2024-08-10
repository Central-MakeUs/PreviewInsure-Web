import styled, { keyframes } from 'styled-components';

import media from '@styles/media';
import InsueDetailIcon from './InsueDetailIcon';

function InsueMapSecondSection({
  insueName,
  insueRecommandExplain,
  insueIcon,
  isSubscribe,
  registInsueCompany,
  registInsueLink,
}: InsueMapSecondPorps) {
  const nickname = '춤추는 부엉이';
  const isRegist = registInsueCompany !== undefined;

  // content
  const myInsueTxt = isRegist
    ? `${nickname}님은 ${registInsueCompany}에 현재 가입되어 있어요!\n해당 사이트에 들어가서 정보를 확인할 수 있어요.`
    : `${nickname}님은 아직 ${insueName}을 보유하지 않았네요.\n차량을 보유하고 계신다면, 운전 보험에 가입하여 안전한 운전 생활을 경험해보아요!`;

  const btnTxt = registInsueCompany ? `${registInsueCompany} 바로가기` : '가입한 보험 정보 입력하기';

  // icon
  const iconTxt = isSubscribe ? '관심보험 등록 완료!' : isRegist ? `${insueName} 미등록` : '관심보험 미등록';
  const backTxt = isRegist ? `${nickname}님의\n운전자 보험` : `아직 ${insueName}에\n가입하지 않았어요!`;

  const handleMoveBtn = () => {
    if (registInsueCompany) {
      window.open(registInsueLink, '_blank', 'noopener, noreferrer');
    } else {
      // TODO : 보험 정보 입력하기 화면으로 이동
    }
  };

  return (
    <Container>
      <Left />
      <Right>
        <IconBox>
          <InsueDetailIcon
            Icon={insueIcon}
            nav="aa"
            frontTxt={iconTxt}
            backTxt={backTxt}
            backTitle={registInsueCompany}
            frontActive={isSubscribe}
            backActive={isRegist}
          />
          <ShadowBox />
        </IconBox>
        <Title>이런 분들에게 추천드려요!</Title>
        <Explain>{insueRecommandExplain}</Explain>
        <Explain2>{myInsueTxt}</Explain2>
        <Btn onClick={handleMoveBtn}>{btnTxt}</Btn>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  position: relative;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 11%;
  border-radius: 0 4rem 4rem 0;
  background-color: ${({ theme }) => theme.colors.Primary_W};

  ${media.small`
    display: none;
  `};
`;
const Right = styled.div`
  position: relative;
  width: 85%;
  height: fit-content;
  border-radius: 4rem 0 0 4rem;
  background-color: ${({ theme }) => theme.colors.Primary_W};
  padding: 6.9rem 0 8.7rem 6.8rem;

  ${media.small`
    width: 100%;
    padding: 7.8rem 4.9rem 6.1rem 3.6rem;
  `};
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  color: ${({ theme }) => theme.colors.Primary500};
  margin-bottom: 3.1rem;
`;

const Explain = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.Black500};
  white-space: pre-wrap;
  line-height: normal;
  margin-bottom: 8.1rem;
`;

const Explain2 = styled.b`
  display: block;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.Black500};
  white-space: pre-wrap;
  line-height: normal;
  margin-bottom: 2.5rem;
`;

const Btn = styled.button`
  display: block;
  border-radius: 3.2rem;
  border: 0px;
  background-color: ${({ theme }) => theme.colors.Primary100};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.Primary500};
  min-width: 29.5rem;
  height: 6.4rem;
  padding: 1rem;

  ${media.small`
    margin: 0 auto;
  `};
`;

const IconBox = styled.div`
  position: absolute;
  top: 9rem;
  right: 18.5%;
  width: 30rem;
  height: 33rem;

  ${media.small`
    position: relative;
    top: 0;
    right: 0;
    width: 24rem;
    height: 26rem;
    margin: 0 auto;
    margin-bottom: 3.5rem;
    
  `};
`;

const ShadowBox = styled.div`
  position: absolute;
  bottom: -5rem;
  width: 100%;
  height: 1.3rem;
  border-radius: 30rem;
  background: radial-gradient(50% 50% at 50% 50%, rgba(102, 102, 102, 0.4) 0%, rgba(115, 115, 115, 0) 100%);

  ${media.small`
  bottom: -1rem;
  `};
`;

export default InsueMapSecondSection;
