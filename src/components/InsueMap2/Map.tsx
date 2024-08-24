import React, { useEffect, useState } from 'react';
import media from '@styles/media';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as MapSVG } from '@assets/icons/InsueMap/Map.svg';
import { ReactComponent as MapLineSVG } from '@assets/icons/InsueMap/MapLine.svg';
import { useInsueListQuery } from '@apis/account/account';
import { useNavigate } from 'react-router-dom';

//icons

import { ReactComponent as Car } from '@/assets/icons/InsueCard/Car.svg';
import { ReactComponent as HeartBeat } from '@/assets/icons/InsueCard/HeartBeat.svg';
import { ReactComponent as Health } from '@/assets/icons/InsueCard/Health.svg';
import { ReactComponent as HospitalSign } from '@/assets/icons/InsueCard/HospitalSign.svg';
import { ReactComponent as ToothBraces } from '@/assets/icons/InsueCard/ToothBraces.svg';
import { ReactComponent as MoneyBag } from '@/assets/icons/InsueCard/MoneyBag.svg';
import { ReactComponent as PetFootprint } from '@/assets/icons/InsueCard/PetFootprint.svg';
import { ReactComponent as PiggyBank } from '@/assets/icons/InsueCard/PiggyBank.svg';
import { ReactComponent as Book } from '@/assets/icons/InsueCard/Book.svg';
import { ReactComponent as WheelChair } from '@/assets/icons/InsueCard/WheelChair.svg';
import { ReactComponent as CI } from '@/assets/icons/InsueCard/CI.svg';

function Map() {
  const navigate = useNavigate();
  const { insurancesQuery } = useInsueListQuery();
  // console.log(insurancesQuery.data);
  const [enrolledType, setEnrolledType] = useState<string[]>([]);
  useEffect(() => {
    const enrolled: string[] = [];
    insurancesQuery?.data?.map((e) => enrolled.push(e.insuranceType));
    setEnrolledType(enrolled);
  }, [insurancesQuery.isFetched, insurancesQuery.isRefetching]);

  // useEffect(() => {
  //   console.log('enrolledType:', enrolledType);
  // }, [enrolledType]);

  const handleMove = (nav: string) => {
    navigate('/insueMap', { state: { nav } });
  };

  return (
    <Container>
      <MapSVG width={'100%'} height={'100%'} />

      <MapLineIcon>
        <MapLineSVG width={'100%'} height={'100%'} />
      </MapLineIcon>

      {/* icons */}
      <ToothIcon onClick={() => handleMove('dantal')} enrolled={enrolledType.includes('TE') as boolean}>
        <ToothBraces width={'100%'} height={'100%'} />
      </ToothIcon>
      <HealthIcon onClick={() => handleMove('health')} enrolled={enrolledType.includes('HE') as boolean}>
        <Health width={'100%'} height={'100%'} />
      </HealthIcon>
      <HospitalIcon onClick={() => handleMove('accident')} enrolled={enrolledType.includes('PA') as boolean}>
        <HospitalSign width={'100%'} height={'100%'} />
      </HospitalIcon>
      <PetIcon onClick={() => handleMove('pet')} enrolled={enrolledType.includes('AN') as boolean}>
        <PetFootprint width={'100%'} height={'100%'} />
      </PetIcon>
      <CarICon onClick={() => handleMove('driver')} enrolled={enrolledType.includes('DR') as boolean}>
        <Car width={'100%'} height={'100%'} />
      </CarICon>
      <LifeIcon onClick={() => handleMove('life')} enrolled={enrolledType.includes('LF') as boolean}>
        <HeartBeat width={'100%'} height={'100%'} />
      </LifeIcon>
      <CIIcon onClick={() => handleMove('ci')} enrolled={enrolledType.includes('CI') as boolean}>
        <CI width={'100%'} height={'100%'} />
      </CIIcon>
      <PigIcon onClick={() => handleMove('saving')} enrolled={enrolledType.includes('SI') as boolean}>
        <PiggyBank width={'100%'} height={'100%'} />
      </PigIcon>
      <MoneyIcon onClick={() => handleMove('pension')} enrolled={enrolledType.includes('PI') as boolean}>
        <MoneyBag width={'100%'} height={'100%'} />
      </MoneyIcon>
      <BookIcon onClick={() => handleMove('education')} enrolled={enrolledType.includes('ED') as boolean}>
        <Book width={'100%'} height={'100%'} />
      </BookIcon>
      <WheelChariIcon onClick={() => handleMove('nursingcare')} enrolled={enrolledType.includes('TD') as boolean}>
        <WheelChair width={'100%'} height={'100%'} />
      </WheelChariIcon>
    </Container>
  );
}

export default Map;

const moving = keyframes`
  0%{
    transform: translateY(-1px);
  }
  100%{
    transform: translateY(5px);
    /* transform: translateX(-5px); */
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  /* border: 1px solid #000; */
`;

const MapLineIcon = styled.div`
  width: 96%;
  height: 97%;
  position: absolute;
  top: 0;
`;

const ToothIcon = styled.div<{ enrolled: boolean }>`
  width: 23.5%;
  height: 23.5%;
  position: absolute;
  top: -13%;
  left: 5%;
  opacity: ${({ enrolled }) => (enrolled ? 1 : 0.3)};
  animation: ${moving} 1s 0s linear alternate infinite;
  animation-delay: 0s;
`;

const HealthIcon = styled.div<{ enrolled: boolean }>`
  width: 23%;
  height: 23%;
  position: absolute;
  top: -13.5%;
  left: 37%;
  opacity: ${({ enrolled }) => (enrolled ? 1 : 0.3)};
  animation: ${moving} 1s 0s linear alternate infinite;
  animation-delay: 1s;
`;

const HospitalIcon = styled.div<{ enrolled: boolean }>`
  width: 21%;
  height: 21%;
  position: absolute;
  top: -12.5%;
  left: 63%;
  opacity: ${({ enrolled }) => (enrolled ? 1 : 0.3)};
  animation: ${moving} 1s 0s linear alternate infinite;
  animation-delay: 0s;
`;

const PetIcon = styled.div<{ enrolled: boolean }>`
  width: 21%;
  height: 21%;
  position: absolute;
  top: 12.5%;
  left: 78%;
  opacity: ${({ enrolled }) => (enrolled ? 1 : 0.3)};
  animation: ${moving} 1s 0s linear alternate infinite;
  animation-delay: 1s;
`;

const CarICon = styled.div<{ enrolled: boolean }>`
  width: 22%;
  height: 22%;
  position: absolute;
  top: 20%;
  left: 50%;
  opacity: ${({ enrolled }) => (enrolled ? 1 : 0.3)};
  animation: ${moving} 1s 0s linear alternate infinite;
  animation-delay: 0s;
`;

const LifeIcon = styled.div<{ enrolled: boolean }>`
  width: 23%;
  height: 23%;
  position: absolute;
  top: 17%;
  left: 22%;
  opacity: ${({ enrolled }) => (enrolled ? 1 : 0.3)};
  animation: ${moving} 1s 0s linear alternate infinite;
  animation-delay: 1s;
`;

const CIIcon = styled.div<{ enrolled: boolean }>`
  width: 24%;
  height: 24%;
  position: absolute;
  top: 35%;
  left: 4%;
  opacity: ${({ enrolled }) => (enrolled ? 1 : 0.3)};
  animation: ${moving} 1s 0s linear alternate infinite;
  animation-delay: 0s;
`;

const PigIcon = styled.div<{ enrolled: boolean }>`
  width: 24%;
  height: 24%;
  position: absolute;
  top: 42%;
  left: 35%;
  opacity: ${({ enrolled }) => (enrolled ? 1 : 0.3)};
  animation: ${moving} 1s 0s linear alternate infinite;
  animation-delay: 1s;
`;

const MoneyIcon = styled.div<{ enrolled: boolean }>`
  width: 23%;
  height: 23%;
  position: absolute;
  top: 44%;
  left: 70%;
  opacity: ${({ enrolled }) => (enrolled ? 1 : 0.3)};
  animation: ${moving} 1s 0s linear alternate infinite;
  animation-delay: 0s;
`;

const BookIcon = styled.div<{ enrolled: boolean }>`
  width: 23%;
  height: 23%;
  position: absolute;
  top: 71%;
  left: 53%;
  opacity: ${({ enrolled }) => (enrolled ? 1 : 0.3)};
  animation: ${moving} 1s 0s linear alternate infinite;
  animation-delay: 1s;
`;

const WheelChariIcon = styled.div<{ enrolled: boolean }>`
  width: 25%;
  height: 25%;
  position: absolute;
  top: 69%;
  left: 19%;
  opacity: ${({ enrolled }) => (enrolled ? 1 : 0.3)};
  animation: ${moving} 1s 0s linear alternate infinite;
  animation-delay: 0s;
`;
