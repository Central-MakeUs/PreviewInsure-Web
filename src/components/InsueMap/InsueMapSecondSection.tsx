import styled, { keyframes } from 'styled-components';

import media from '@styles/media';
import InsueDetailIcon from './InsueDetailIcon';
import { useStore } from '@stores/useStore';
import { useNavigate } from 'react-router-dom';

function InsueMapSecondSection({
  insueName,
  insueRecommandPerson,
  insueRecommandExplain,
  insueIcon,
  isSubscribe,
  registInsueCompany,
  registInsueLink,
}: InsueMapSecondPorps) {
  const navigate = useNavigate();
  const isRegist = registInsueCompany !== undefined;

  // 닉네임
  const { nickName, isLogin } = useStore();

  // content
  const myInsueTxt = !isLogin
    ? `로그인 후 가입한 보험 정보를 입력해 주세요.`
    : isRegist
      ? `${nickName}님은 ${registInsueCompany}에 현재 가입되어 있어요!\n해당 사이트에 들어가서 정보를 확인할 수 있어요.`
      : `${nickName}님은 아직 ${insueName}을 보유하지 않았네요.\n${insueRecommandExplain}`;

  const btnTxt = registInsueCompany ? `${registInsueCompany} 바로가기` : '가입한 보험 정보 입력하기';

  // icon
  const iconTxt = isSubscribe ? '관심보험 등록 완료!' : isRegist ? '관심보험 미등록' : `${insueName} 미등록`;
  const backTxt = isRegist ? `${nickName}님의\n운전자 보험` : `아직 ${insueName}에\n가입하지 않았어요!`;

  const handleMoveBtn = () => {
    if (!isLogin) navigate('/login');
    if (registInsueCompany) {
      window.open(registInsueLink, '_blank', 'noopener, noreferrer');
    } else {
      // TODO : 보험 정보 입력하기 화면으로 이동
      navigate('/myInsue');
    }
  };

  const goToMap = () => {
    navigate('/');
  };

  return (
    <Container>
      <Left onClick={goToMap}>
        <p>{`맵으로\n돌아가기`}</p>
      </Left>
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
        <Explain>{insueRecommandPerson}</Explain>
        <Explain2>{myInsueTxt}</Explain2>
        {/* <Btn onClick={handleMoveBtn}>{btnTxt}</Btn> */}
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
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.mobile`
    display: none;
  `};

  p {
    font-size: ${({ theme }) => theme.fontSizes.subtitle};
    color: ${({ theme }) => theme.colors.Primary500};
    font-weight: 600;
    white-space: pre;
    text-align: center;
    line-height: normal;
    cursor: pointer;
  }
`;
const Right = styled.div`
  position: relative;
  width: 85%;
  height: fit-content;
  border-radius: 4rem 0 0 4rem;
  background-color: ${({ theme }) => theme.colors.Primary_W};
  padding: 6.9rem 0 8.7rem 6.8rem;

  ${media.mobile`
    width: 100%;
    padding: 20% 9% 10% 9%;
    border-radius: 15rem 0 0 15rem;
  `};
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  color: ${({ theme }) => theme.colors.Primary500};
  margin-bottom: 3.1rem;

  ${media.mobile`
    font-size: 18px;
    margin-bottom: 6.5rem;
  `};
`;

const Explain = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.Black500};
  white-space: pre-wrap;
  line-height: normal;
  margin-bottom: 8.1rem;

  ${media.mobile`
    font-size: 14px;
    margin-bottom: 13.5rem;
  `};
`;

const Explain2 = styled.b`
  display: block;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.Black500};
  white-space: pre-wrap;
  line-height: normal;
  margin-bottom: 2.5rem;

  ${media.mobile`
    font-size: 15px;
    margin-bottom: 12rem;
  `};
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
  width: fit-content;
  min-height: 6.4rem;
  height: fit-content;
  padding: 1rem;

  ${media.mobile`
  border-radius: 32px;
    margin: 0 auto;
    font-size: 15px;
    padding: 3rem;
    min-width: 60rem;
  `};
`;

const IconBox = styled.div`
  position: absolute;
  top: 9rem;
  right: 18.5%;
  width: 30rem;
  height: 33rem;

  ${media.mobile`
    position: relative;
    top: 0;
    right: 0;
    width: 49rem;
    height: 52rem;
    margin: 0 auto;
    margin-bottom: 9rem;
    
  `};
`;

const ShadowBox = styled.div`
  position: absolute;
  bottom: -5rem;
  width: 100%;
  height: 1.3rem;
  border-radius: 30rem;
  background: radial-gradient(50% 50% at 50% 50%, rgba(102, 102, 102, 0.4) 0%, rgba(115, 115, 115, 0) 100%);

  ${media.mobile`
  bottom: -1rem;
  `};
`;

export default InsueMapSecondSection;
