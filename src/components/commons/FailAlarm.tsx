import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Warning } from '@/assets/icons/Warning.svg';
import type { FailAlarmProps } from '@/types/commonComponents';
import media from '@styles/media';

function FailAlarm({ text, alarmShown }: FailAlarmProps) {
  return (
    <Container shown={alarmShown}>
      <IconBox>
        <Warning width={'100%'} height={'100%'} fill={'#FF0000'} />
      </IconBox>

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
  top: 13%;
  opacity: ${({ shown }) => (shown ? '100%' : '0%')};
  transition: all 1s ease;
`;

const IconBox = styled.div`
  width: 3.6rem;
  height: 3.9rem;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  color: ${({ theme }) => theme.colors.AlertT};
`;
