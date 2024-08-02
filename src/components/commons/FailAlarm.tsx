import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Warning } from '@/assets/icons/Warning.svg';
import type { FailAlarmProps } from '@/types/commonComponents';

function FailAlarm({ text, alarmShown }: FailAlarmProps) {
  return (
    <Container shown={alarmShown}>
      <Warning width={36} height={39} fill={'#FF0000'} />
      <Text>{text}</Text>
    </Container>
  );
}

export default FailAlarm;

const Container = styled.div<{ shown: boolean }>`
  width: 51.6rem;
  height: 7.7rem;
  background-color: ${({ theme }) => theme.colors.AlertB};
  border: 1px solid ${({ theme }) => theme.colors.AlertT};
  display: flex;
  gap: 1.8rem;
  align-items: center;
  padding: 4.5rem 6.5rem;
  border-radius: 1.2rem;
  position: absolute;
  top: 11%;
  opacity: ${({ shown }) => (shown ? '100%' : '0%')};
  transition: all 1s ease;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.AlertT};
`;
