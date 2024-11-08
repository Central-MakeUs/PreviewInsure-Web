import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import media from '@styles/media';

function InsuePlannerLoadingWithSkeleton() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767); //767
  window.addEventListener('resize', function (e: any) {
    if (e.currentTarget.innerWidth <= 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  return (
    <ContainerSkeleton>
      {isMobile ? (
        <HistoryContainerSkeletonInMobile>
          <TitleWrapperSkeleton>
            <TitleSkeleton>
              <p>1</p>
              <p>2</p>
            </TitleSkeleton>
          </TitleWrapperSkeleton>
          <ParagraphSkeleton>
            <ParagraphWrapperSkeleton>
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </ParagraphWrapperSkeleton>
          </ParagraphSkeleton>
        </HistoryContainerSkeletonInMobile>
      ) : (
        <HistoryContainerSkeletonInWeb></HistoryContainerSkeletonInWeb>
      )}
      <TextContainerSkeleton>
        <TextWrapperSkeleton></TextWrapperSkeleton>
        <BtnGroupSkeleton>
          <BtnSkeleton>
            <BtnText>1</BtnText>
          </BtnSkeleton>
          <BtnSkeleton>
            <BtnText>2</BtnText>
          </BtnSkeleton>
        </BtnGroupSkeleton>
      </TextContainerSkeleton>
    </ContainerSkeleton>
  );
}

export default InsuePlannerLoadingWithSkeleton;

const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(100%);
  }
`;

const ContainerSkeleton = styled.div`
  width: 100%;
  display: flex;
  padding: 5rem 14.4rem;
  gap: 2rem;

  ${media.mobile`
    // 767 < 
    flex-direction:column;
    padding: 3rem 4.8rem;
    height: calc(100vh - 40rem);
  `}
`;

const HistoryContainerSkeletonInWeb = styled.div`
  position: relative;
  background: #f2f2f2;
  overflow: hidden;

  width: 30%;
  height: 79.4rem;
  border-radius: 2.4rem;
  padding-left: 2.9rem;
  padding-right: 2.9rem;
  padding-top: 5.8rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 1.5s infinite ease-in-out;
  }

  ${media.mobile`
    // 767 < 
    width: 100%;
    height:fit-content;
    background-color: #fff;
  `}
`;

const HistoryContainerSkeletonInMobile = styled.div`
  width: 30%;
  height: 79.4rem;
  border-radius: 2.4rem;
  padding-left: 2.9rem;
  padding-right: 2.9rem;
  padding-top: 5.8rem;

  ${media.mobile`
    // 767 < 
    border: none;
    width: 100%;
    height:fit-content;
    background-color: #fff;
    padding-left: 0;
    padding-right: 0;
  `}
`;

const TitleWrapperSkeleton = styled.div`
  position: relative;
  background: #f2f2f2;
  overflow: hidden;

  border-radius: 2.4rem;
  margin-bottom: 2.4rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 1.5s infinite ease-in-out;
  }

  ${media.mobile`
    // 767 < 
    margin-bottom: 27px;
  `}
`;

const TitleSkeleton = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 600;
  line-height: 1.5;
  opacity: 0;

  ${media.mobile`
    // 767 < 
    font-size: 20px;
    line-height: 1;
  `}
`;

const ParagraphSkeleton = styled.p`
  position: relative;
  background: #f2f2f2;
  overflow: hidden;

  border-radius: 2.4rem;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 2.4rem;
  margin-bottom: 7.3rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 1.5s infinite ease-in-out;
  }

  ${media.mobile`
    // 767 < 
    font-size: 4rem;
    line-height: 1.3;
  `}
`;

const ParagraphWrapperSkeleton = styled.p`
  opacity: 0;
`;

const TextContainerSkeleton = styled.div`
  width: 70%;
  height: 79.4rem;

  ${media.mobile`
    width: 100%;
    flex-grow:1;
  `}
`;

const TextWrapperSkeleton = styled.div`
  position: relative;
  background: #f2f2f2;
  overflow: hidden;

  width: 100%;
  border-radius: 2.4rem;
  height: 85%;
  margin-bottom: 2rem;
  padding: 5rem 1.8rem 2rem 1.8rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 1.5s infinite ease-in-out;
  }
`;

const BtnGroupSkeleton = styled.div`
  width: 100%;
  height: 13%;
  ${({ theme }) => theme.common.flexCenter};
  gap: 1.6rem;
`;

const BtnSkeleton = styled.div`
  position: relative;
  background: #f2f2f2;
  overflow: hidden;

  min-width: 28rem;
  padding: 2rem 3.6rem;
  border-radius: 3.2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 1.5s infinite ease-in-out;
  }

  ${media.mobile`
      border-radius: 30px;
      padding: 3rem 3.6rem;
      font-size: 12px;
      height: 42px;
      width: 164px;
  `}
`;

const BtnText = styled.p`
  opacity: 0;
  font-size: ${({ theme }) => theme.fontSizes.small};

  ${media.mobile`
      font-size: 12px;
  `}
`;
