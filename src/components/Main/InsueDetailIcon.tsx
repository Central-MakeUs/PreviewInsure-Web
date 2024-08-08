import styled from 'styled-components';
import { InsueIconProps } from '@/types/MainComponents';

function InsueDetailIcon({ txt, Icon, isSelected = false }: InsueIconProps) {
  return (
    <Container>
      <MiniCircle />
      <ColorBack></ColorBack>
      <Front>
        <Blur />
        <Border />
        {/* <Icon src={imgsrc} />
          <BottomText>{txt}</BottomText> */}
      </Front>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  height: 330px;
  margin: 10rem;
  position: relative;
`;

const MiniCircle = styled.div`
  position: absolute;
  top: 25px;
  left: 25px;
  width: 13px;
  height: 13px;
  background-color: white;
  border-radius: 100%;
  z-index: 3;
`;
const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 3.5rem;
  overflow: hidden;
  transform: rotate(-0.157deg);
`;
const Border = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  border-radius: 3.5rem;

  box-sizing: border-box;
  background-clip: padding-box;

  padding: 3px;
  background-image: linear-gradient(to bottom right, rgba(104, 121, 251, 0.6), rgba(104, 121, 251, 0)),
    radial-gradient(farthest-corner at 0% 100%, rgba(255, 255, 255, 0) 0%, rgba(104, 121, 251, 0.25) 100%),
    linear-gradient(to bottom right, rgba(255, 255, 255, 0.5), rgba(104, 121, 251, 0.3), rgba(255, 255, 255, 0.5));
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0),
    radial-gradient(farthest-corner at 0 0, rgba(104, 121, 251, 0.4) 0%, rgba(255, 255, 255, 0) 80%);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
`;

const Blur = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(5px);
`;

const ColorBack = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3.3rem;

  position: absolute;
  top: -7%;
  left: 8%;
  transform: rotate(-11.202deg);

  background-color: ${({ theme }) => theme.colors.Primary500};
`;

const Icon = styled.img``;

const BottomText = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: white;
`;
export default InsueDetailIcon;
