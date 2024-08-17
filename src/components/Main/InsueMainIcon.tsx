import styled from 'styled-components';
import { InsueIconProps } from '@/types/MainComponents';
import GradientBackground from '@components/commons/GradientBackground';
import media from '@styles/media';
import { useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function InsueMainIcon({ txt, Icon, isSelected = false, nav }: InsueIconProps) {
  const navigate = useNavigate();
  const handleMove = () => {
    navigate('/insueMap', { state: { nav } });
  };

  return (
    <TransitionGroup>
      <CSSTransition in={isSelected} timeout={300} classNames="box" unmountOnExit>
        <Box isSelected={isSelected}>
          <GradientBackground />
          <TopText isSelected={isSelected}>{txt}</TopText>
          <IconBox isSelected={isSelected}>
            <Icon width={'100%'} height={'100%'} />
          </IconBox>
          <Move onClick={handleMove} isSelected={isSelected}></Move>
        </Box>
      </CSSTransition>
    </TransitionGroup>
  );
}

const Box = styled.div<{ isSelected: boolean }>`
  position: relative;
  width: fit-content;
  height: ${({ isSelected }) => (isSelected ? '100%' : '80%')};
  padding: ${({ isSelected }) => (isSelected ? '3.5rem 3.2rem 2.5rem 3.2rem' : '2.6rem 2.7rem 2.3rem 2.7rem')};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  justify-content: space-between;
  transition: all 0.7s ease;

  &.box-enter {
    transform: scale(0.8);
    opacity: 0;
  }
  &.box-enter-active {
    transform: scale(1);
    opacity: 1;
  }
  &.box-exit {
    transform: scale(1);
    opacity: 1;
  }
  &.box-exit-active {
    transform: scale(0.8);
    opacity: 0;
  }

  ${({ isSelected }) => media.small`
  padding: ${isSelected ? '5.5rem 3.2rem 2rem 3.2rem' : '3rem 2.8rem 1.8rem 2.8rem'};

  `};
`;

const IconBox = styled.div<{ isSelected: boolean }>`
  min-width: ${({ isSelected }) => (isSelected ? '18rem' : '13rem')};
  min-height: ${({ isSelected }) => (isSelected ? '18rem' : '13rem')};
  transition: max-height 0.3s ease;

  ${({ isSelected }) => media.medium`
  min-width: ${isSelected ? '24rem' : '16rem'};
  min-height: ${isSelected ? '24rem' : '16rem'};
  `};
  ${({ isSelected }) => media.small`
  min-width: ${isSelected ? '30rem' : '22rem'};
  min-height: ${isSelected ? '30rem' : '22rem'};
  `};
`;

const TopText = styled.span<{ isSelected: boolean }>`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: white;
  white-space: nowrap;
  transform: ${({ isSelected }) => (isSelected ? `scale(1.4)` : 'none')};
  /* transition: transform 0.2s ease; */

  ${media.small`
    font-size: 2.8rem;
  `}
`;

const Move = styled.span<{ isSelected: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSizes.small};
  display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
`;

export default InsueMainIcon;
