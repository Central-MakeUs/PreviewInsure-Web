import { ReactComponent as Check } from '@/assets/icons/Selector.svg';
import type { SelectorProps } from '@/types/commonComponents';
import styled from 'styled-components';
import media from '@styles/media';
import { useStore } from '@stores/useStore';

function Selector({ check, setCheck, type, redFlag }: SelectorProps) {
  //ios
  const { platform } = useStore();
  return (
    <SelectorContainer platform={platform} redFlag={redFlag} type={type} check={check} onClick={() => setCheck(!check)}>
      {check && (
        <IconBox platform={platform}>
          <Check width={'100%'} height={'100%'} fill={'#fff'} />
        </IconBox>
      )}
    </SelectorContainer>
  );
}

const SelectorContainer = styled.button<{ check: boolean; type: string; redFlag: boolean; platform: string }>`
  width: ${({ type }) => (type === 'circle' ? '4.5rem' : '3.2rem')};
  height: ${({ type }) => (type === 'circle' ? '4.5rem' : '3.2rem')};
  background-color: ${({ check, theme, redFlag }) =>
    redFlag ? theme.colors.AlertB : check ? theme.colors.Primary500 : '#fff'};
  border-radius: ${({ type }) => (type === 'circle' ? '50%' : '0.8rem')};
  border: 1px solid ${({ theme, redFlag }) => (redFlag ? theme.colors.AlertT : theme.colors.Primary500)};
  cursor: pointer;
  position: relative;

  ${media.small`
    // 767 < 
    width: ${({ type }: any) => (type === 'circle' ? '4.5rem' : '4rem')};
    height: ${({ type }: any) => (type === 'circle' ? '4.5rem' : '4rem')};
    border-radius: ${({ type }: any) => (type === 'circle' ? '50%' : '1.5rem')};
    border-width:2px;
  `}

  ${media.mobile`
    // 767 < 

    width: ${({ type, platform }: any) => (platform === 'ios' ? 'fit-content' : type === 'circle' ? '4.5rem' : '5rem')};
    height: ${({ type, platform }: any) => (platform === 'ios' ? '21px' : type === 'circle' ? '4.5rem' : '5rem')};
    border-radius: ${({ type }: any) => (type === 'circle' ? '50%' : '1.5rem')};
    border-width:2px;
    border-radius:7px;
    padding: 1px 8px;

    
    /* width: 25px;  */
    /* height: 25px; */


  `}
`;

const IconBox = styled.div<{ platform: string }>`
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  left: -30%;

  ${media.medium`
   // 992 ~ 1199
    width: 2.2rem;
    height: 2.2rem;
    left: -90%;
  `}

  ${media.small`   
    // 768 ~ 990  모바일 기준
    width: 2.8rem;
    height: 2.8rem;
    left: -250%;
  `}

  ${media.mobile`
    // 767 < 
    width: 13px;
    height: 10px;
    position: absolute;
    left: 10%;
    bottom:25%;
    //
    bottom:${({ platform }: any) => platform === 'ios' && '15%'};
  
  `}
`;

export default Selector;
