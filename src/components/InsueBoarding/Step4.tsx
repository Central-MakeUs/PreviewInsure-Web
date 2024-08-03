import React from 'react';
import styled from 'styled-components';

function Step4() {
  return (
    <>
      <Subtitle>
        <SubtitleP>가입한 보험을 모두 선택해 주세요</SubtitleP>
      </Subtitle>
    </>
  );
}

export default Step4;

const Subtitle = styled.p`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 600;
  color: #000;
  line-height: 1.1;
  margin-bottom: 6.8rem;
`;

const SubtitleP = styled.p``;
