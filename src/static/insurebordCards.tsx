import styled from 'styled-components';
import media from '@styles/media';

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

const HeartBeatIconBox = styled.div`
  width: 15.7rem;
  height: 15.7rem;

  ${media.mobile`
    // 767 < 
    width: 24rem;
    height: 24rem;
  `}
`;

const HealthBeatIconBox = styled.div`
  width: 14rem;
  height: 14rem;

  ${media.mobile`
    // 767 < 
    width: 22rem;
    height: 22rem;
  `}
`;

const HospitalSignIconBox = styled.div`
  width: 13.3rem;
  height: 13.3rem;

  ${media.mobile`
    // 767 < 
    width: 20rem;
    height: 20rem;
  `}
`;

const CIIconBox = styled.div`
  width: 12rem;
  height: 12.4rem;

  ${media.mobile`
    // 767 < 
    width: 18rem;
    height: 20rem;
  `}
`;

const ToothBracesIconBox = styled.div`
  width: 14.7rem;
  height: 14.7rem;

  ${media.mobile`
    // 767 < 
    width: 22rem;
    height: 22rem;
  `}
`;

const WheelChairIconBox = styled.div`
  width: 13rem;
  height: 13rem;

  ${media.mobile`
    // 767 < 
    width: 21rem;
    height: 21rem;
  `}
`;

const MoneyBagIconBox = styled.div`
  width: 12.7rem;
  height: 12.7rem;

  ${media.mobile`
    // 767 < 
    width: 20rem;
    height: 20rem;
  `}
`;

const BookIconBox = styled.div`
  width: 13rem;
  height: 13rem;

  ${media.mobile`
    // 767 < 
    width: 21rem;
    height: 21rem;
  `}
`;

const PiggyBankIconBox = styled.div`
  width: 12.7rem;
  height: 12.7rem;

  ${media.mobile`
    // 767 < 
    width: 20rem;
    height: 20rem;
  `}
`;

const PetFootprintIconBox = styled.div`
  width: 11.3rem;
  height: 11.3rem;

  ${media.mobile`
    // 767 < 
    width: 19rem;
    height: 19rem;
  `}
`;

const CarIconBox = styled.div`
  width: 13.6rem;
  height: 14.6rem;

  ${media.mobile`
    // 767 < 
    width: 20rem;
    height: 22rem;
  `}
`;

export const initialCards = [
  {
    text: '생명보험',
    SVG: (
      <HeartBeatIconBox>
        <HeartBeat width={'100%'} height={'100%'} />
      </HeartBeatIconBox>
    ),
  },
  {
    text: '건강보험',
    SVG: (
      <HealthBeatIconBox>
        <Health width={'100%'} height={'100%'} />
      </HealthBeatIconBox>
    ),
  },
  {
    text: '상해보험',
    SVG: (
      <HospitalSignIconBox>
        <HospitalSign width={'100%'} height={'100%'} />
      </HospitalSignIconBox>
    ),
  },
  {
    text: 'CI보험',
    SVG: (
      <CIIconBox>
        <CI width={'100%'} height={'100%'} />
      </CIIconBox>
    ),
  },
  {
    text: '치아보험',
    SVG: (
      <ToothBracesIconBox>
        <ToothBraces width={'100%'} height={'100%'} />
      </ToothBracesIconBox>
    ),
  },
  {
    text: '간병/치매보험',
    SVG: (
      <WheelChairIconBox>
        <WheelChair width={'100%'} height={'100%'} />
      </WheelChairIconBox>
    ),
  },
  {
    text: '연금보험',
    SVG: (
      <MoneyBagIconBox>
        <MoneyBag width={'100%'} height={'100%'} />
      </MoneyBagIconBox>
    ),
  },
  {
    text: '교육보험',
    SVG: (
      <BookIconBox>
        <Book width={'100%'} height={'100%'} />{' '}
      </BookIconBox>
    ),
  },
  {
    text: '저축보험',
    SVG: (
      <PiggyBankIconBox>
        <PiggyBank width={'100%'} height={'100%'} />
      </PiggyBankIconBox>
    ),
  },
  {
    text: '애견보험',
    SVG: (
      <PetFootprintIconBox>
        <PetFootprint width={'100%'} height={'100%'} />
      </PetFootprintIconBox>
    ),
  },
  {
    text: '운전자보험',
    SVG: (
      <CarIconBox>
        <Car width={'100%'} height={'100%'} />
      </CarIconBox>
    ),
  },
];
