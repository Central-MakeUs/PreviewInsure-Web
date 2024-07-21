import React from 'react';
import styled from 'styled-components';
import type { OAuthButtonProps } from '@/types/LoginAndRegisterComponents';

function OAuthButton({ icon, text, type, onClick }: OAuthButtonProps) {
  return (
    <OAuthButtonContainer onClick={onClick} type={type}>
      {icon}
      <OAuthP type={type}>{text}</OAuthP>
      <div></div>
    </OAuthButtonContainer>
  );
}

const OAuthButtonContainer = styled.button<{ type: string }>`
  width: 38.4rem;
  height: 5.6rem;
  padding: 0 5.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background-color: ${({ type }) => (type === 'google' ? '#f5f5f5' : '#000')};
  border-radius: 1.4rem;
  cursor: pointer;
`;

const OAuthP = styled.p<{ type: string }>`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 600;
  color: ${({ type, theme }) => (type === 'google' ? theme.colors.Black500 : '#fff')};
`;

export default OAuthButton;
