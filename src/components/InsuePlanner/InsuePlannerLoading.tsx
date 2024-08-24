import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchingForContent } from '@/assets/icons/InsuePlanner/SearchingForContent.svg';
import media from '@styles/media';

function InsuePlannerLoading() {
  return (
    <Container>
      <IconBox>
        <SearchingForContent width={'100%'} height={'100%'} />
      </IconBox>

      <Title>
        <TitleP>추천해주는 정보는 인공지능을 통해 분석된 내용으로, 정확하지 않을 수 있어요.</TitleP>
        <TitleP>보험 가입시 제공되는 상품 설명서 및 이용 약관에서 더 정확한 정보를 얻을 수 있어요.</TitleP>
      </Title>
    </Container>
  );
}

export default InsuePlannerLoading;

const Container = styled.div`
  display: flex;
  padding: 10rem 36rem;
  flex-direction: column;
  align-items: center;

  ${media.mobile`
    // 767 < 
    padding: 10rem 0;
    
  `}
`;

const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.Black500};
  line-height: 1.4;
  text-align: center;

  ${media.mobile`
    // 767 < 
    font-size: 10px;
    
  `}
`;

const TitleP = styled.p``;

const IconBox = styled.div`
  width: 61.6rem;
  height: 61.6rem;
`;
