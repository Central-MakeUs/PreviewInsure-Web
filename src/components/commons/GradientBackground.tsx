import media from '@styles/media';
import styled from 'styled-components';

/*
  GradientBackground를 감싸는 요소에
    position: relative를 추가하여 사용
*/
function GradientBackground() {
  return <Background />;
}

const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 3.5rem;

  box-sizing: border-box;
  background-clip: padding-box;

  padding: 3px;
  background: linear-gradient(to bottom right, rgba(104, 121, 251, 0.6), rgba(104, 121, 251, 0)),
    radial-gradient(farthest-corner at 0% 100%, rgba(255, 255, 255, 0) 0%, rgba(104, 121, 251, 0.25) 100%),
    linear-gradient(to bottom right, rgba(255, 255, 255, 0.5), rgba(104, 121, 251, 0.3), rgba(255, 255, 255, 0.5));
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0),
    radial-gradient(farthest-corner at 0 0, rgba(104, 121, 251, 0.4) 0%, rgba(255, 255, 255, 0) 80%);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  backdrop-filter: blur(1px);

  ${media.mobile`
    padding: 2px;
    border-radius: 5rem;
  `};
`;

export default GradientBackground;
