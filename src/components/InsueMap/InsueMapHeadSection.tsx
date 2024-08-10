import styled, { keyframes } from 'styled-components';

import { ReactComponent as Plus } from '@assets/icons/Plus.svg';
import { ReactComponent as Approve } from '@assets/icons/Approve.svg';
import { ReactComponent as Info } from '@assets/icons/Information.svg';
import Colors from '@styles/Colors';
import { useState } from 'react';
import media from '@styles/media';

function InsueMapHeadSection({ insueName, insueExplain, isSubscribe, handleSubscribe }: InsueMapHeadPorps) {
  const [isSubscribeHelp, setIsSubscribeHelp] = useState<boolean>(false);

  const handleHelpClick = () => {
    setIsSubscribeHelp(true);
    setTimeout(() => {
      setIsSubscribeHelp(false);
    }, 3000); // 3초
  };

  return (
    <Head>
      <h1>{insueName}</h1>
      <p>{insueExplain}</p>
      <SubscribeBox>
        {isSubscribe ? (
          <AddBtn isAdded={true} onClick={() => handleSubscribe(false)}>
            <Approve width={26} height={26} fill="white" />
            <span>관심보험</span>
          </AddBtn>
        ) : (
          <AddBtn isAdded={false} onClick={() => handleSubscribe(true)}>
            <Plus width={20} height={20} fill="white" />
            <span>관심보험으로 저장</span>
          </AddBtn>
        )}
        <HelpBox>
          <Info width={34} height={35} fill={Colors.Black100} onClick={() => handleHelpClick()} />

          <SubscribeHelp visible={isSubscribeHelp}>
            {'관심보험으로 저장하면,\n인슈 플래너가 관련된 보험소식을 알림으로 전달해드려요.'}
          </SubscribeHelp>
        </HelpBox>
      </SubscribeBox>
    </Head>
  );
}

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6.2rem;
  color: ${({ theme }) => theme.colors.Black500};
  max-width: 60%;

  ${media.small`
    max-width: 80%
  `};

  h1 {
    font-weight: 600;
    margin-bottom: 2.9rem;
    line-height: normal;
    font-size: ${({ theme }) => theme.fontSizes.title};
  }
  p {
    white-space: pre-wrap;
    text-align: center;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 3.5rem;
    font-size: ${({ theme }) => theme.fontSizes.paragraph};

    ${media.small`
      word-break: keep-all;
      white-space: normal;
    `};
  }
`;
const SubscribeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const AddBtn = styled.div<{ isAdded: boolean }>`
  padding: 1rem;
  border-radius: 3.2rem;
  background-color: ${(props) => (props.isAdded ? props.theme.colors.Primary500 : props.theme.colors.Black100)};
  min-width: 22rem;
  height: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition:
    background-color 0.3s ease,
    transform 0.2s;

  span {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: white;
    margin-left: 1rem;
    line-height: normal;
  }
`;

const HelpBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: calc(50% + 12rem);
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
`;

const SubscribeHelp = styled.div<{ visible: boolean }>`
  width: max-content;
  display: block;
  white-space: pre-line;
  font-weight: 400;
  line-height: normal;
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  background-color: ${({ theme }) => theme.colors.Black_W};
  border: 1px solid ${({ theme }) => theme.colors.Black100};
  border-radius: 2.2rem;
  margin-left: 0.9rem;
  padding: 2.4rem 3rem 2.3rem 3.1rem;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  animation: ${({ visible }) => (visible ? fadeIn : fadeOut)} 0.5s ease;

  ${media.small`
    position: fixed;
    left: 50%;
    transform: translate(-50%,110%);
    margin: 0;
    z-index: 2;
  `};
`;

export default InsueMapHeadSection;
