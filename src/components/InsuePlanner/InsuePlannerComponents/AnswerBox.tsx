import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactTyped } from 'react-typed';
import media from '@styles/media';

type link = {
  insuranceCompany: string;
  insuranceLink: string;
};

type AnswerAnswerBoxProps = {
  text: string;
  links: link[];
};

function AnswerBox({ text, links }: AnswerAnswerBoxProps) {
  const [complete, setComplete] = useState(false);

  const textWithHtml = text.replace(/\n/g, '<br>');
  return (
    <Container>
      <TextContainer>
        <ReactTyped
          strings={[textWithHtml]}
          typeSpeed={20}
          showCursor={false}
          onComplete={() => setComplete(true)}
          startDelay={500}
          onBegin={() => {
            setComplete(false);
          }}
        />
      </TextContainer>

      {complete && (links ? links.length > 0 : '') && (
        <LinkContainer>
          <LinksTextContainer>해당 보험에 대한 링크를 전달드릴게요!</LinksTextContainer>
          <LinkBtnGroup>
            {links.map((e, i) => (
              <LinkBtn
                onClick={() => {
                  window.open(e.insuranceLink, '_blank', 'noopener, noreferrer');
                }}
              >
                {e.insuranceCompany}
              </LinkBtn>
            ))}
          </LinkBtnGroup>
        </LinkContainer>
      )}
    </Container>
  );
}

export default AnswerBox;

const Container = styled.div``;

const TextContainer = styled.div`
  max-width: 84rem;
  display: inline-block;
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.colors.Primary_W};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.Black500};
  font-weight: 300;
  border-radius: 1.2rem;
  margin-bottom: 1.2rem;

  ${media.mobile`
    // ~ 767 
    max-width: 68rem;
    font-size: 14px;
    border-radius: 12px;
    padding: 18px 27px 20px 17px;
    line-height:1.2;
  `}
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LinksTextContainer = styled.div`
  width: fit-content;
  border-radius: 1.2rem;
  margin-bottom: 1.2rem;
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.colors.Primary_W};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.Black500};
  display: inline-block;
  animation: ${fadeIn} 1s ease-in-out;

  ${media.mobile`
    font-size: 14px;
    border-radius: 12px;
  `}
`;

const LinkBtnGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  animation: ${fadeIn} 1s ease-in-out;
  animation-delay: 1s; // LinksTextContainer 애니메이션 종료 후 시작
  opacity: 0;
  animation-fill-mode: forwards; // 애니메이션 종료 후에도 최종 상태를 유지
`;

const LinkBtn = styled.button`
  padding: 1.7rem 1.9rem;
  display: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.Primary100};
  color: ${({ theme }) => theme.colors.Primary500};
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.small};
  border-radius: 1.2rem;
  cursor: pointer;

  ${media.mobile`
    font-size: 14px;
    border-radius: 12px;
  `}
`;
