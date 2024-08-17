import type { SelectorProps } from '@/types/commonComponents';
import styled from 'styled-components';
import media from '@styles/media';

function Switch({ check, setCheck }: SelectorProps) {
  return (
    <SwitchContainer check={check} onClick={() => setCheck(!check)}>
      <IconBox check={check} />
    </SwitchContainer>
  );
}

const SwitchContainer = styled.div<{ check: boolean }>`
  width: 8rem;
  height: 4rem;
  background-color: ${({ check, theme }) => (check ? theme.colors.Primary_W : theme.colors.Black100)};
  border-radius: 25rem;
  padding: 0.2rem;
  cursor: pointer;
  transition: all 1s;
`;

const IconBox = styled.div<{ check: boolean }>`
  width: 3.6rem;
  height: 3.6rem;
  background-color: ${({ check, theme }) => (check ? theme.colors.Primary500 : theme.colors.Black500)};
  border-radius: 50%;
  transform: ${({ check }) => (check ? 'translateX(100%)' : 'translateX(2%)')};
  transition: transform 0.3s ease;
`;

export default Switch;
