import { ReactComponent as Check } from '@/assets/icons/Selector.svg';
import type { SelectorProps } from '@/types/commonComponents';
import styled from 'styled-components';

function Selector({ check, setCheck, type }: SelectorProps) {
  return (
    <SelectorContainer type={type} check={check} onClick={() => setCheck(!check)}>
      {check && <Check width={30} height={27} fill={'#fff'} />}
    </SelectorContainer>
  );
}

const SelectorContainer = styled.button<{ check: boolean; type: string }>`
  width: ${({ type }) => (type === 'circle' ? '45px' : '32px')};
  height: ${({ type }) => (type === 'circle' ? '45px' : '32px')};
  background-color: ${({ check, theme }) => (check ? theme.colors.Primary500 : '#fff')};
  border-radius: ${({ type }) => (type === 'circle' ? '50%' : '8px')};
  border: 1px solid ${({ theme }) => theme.colors.Primary500};
  cursor: pointer;
  ${({ theme }) => theme.common.flexCenter}
`;

export default Selector;
