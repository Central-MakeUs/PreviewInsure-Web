import { ReactComponent as Life } from '@/assets/icons/Insue/Life.svg';
import { ReactComponent as Saving } from '@/assets/icons/Insue/Saving.svg';
import { ReactComponent as Health } from '@/assets/icons/Insue/Health.svg';
import { ReactComponent as Accident } from '@/assets/icons/Insue/Accident.svg';
import { ReactComponent as CI } from '@/assets/icons/Insue/CI.svg';
import { ReactComponent as Dental } from '@/assets/icons/Insue/Dental.svg';
import { ReactComponent as Pension } from '@/assets/icons/Insue/Pension.svg';
import { ReactComponent as Education } from '@/assets/icons/Insue/Education.svg';
import { ReactComponent as Pet } from '@/assets/icons/Insue/Pet.svg';
import { ReactComponent as NursingCare } from '@/assets/icons/Insue/NursingCare.svg';
import { ReactComponent as Driver } from '@/assets/icons/Insue/Driver.svg';

import { ReactComponent as LifeImg } from '@/assets/icons/InsueCard/HeartBeat.svg';
import { ReactComponent as SavingImg } from '@/assets/icons/InsueCard/PiggyBank.svg';
import { ReactComponent as HealthImg } from '@/assets/icons/InsueCard/Health.svg';
import { ReactComponent as AccidentImg } from '@/assets/icons/InsueCard/HospitalSign.svg';
import { ReactComponent as CIImg } from '@/assets/icons/InsueCard/CI.svg';
import { ReactComponent as DentalImg } from '@/assets/icons/InsueCard/ToothBraces.svg';
import { ReactComponent as PensionImg } from '@/assets/icons/InsueCard/MoneyBag.svg';
import { ReactComponent as EducationImg } from '@/assets/icons/InsueCard/Book.svg';
import { ReactComponent as PetImg } from '@/assets/icons/InsueCard/PetFootprint.svg';
import { ReactComponent as NursingCareImg } from '@/assets/icons/InsueCard/WheelChair.svg';
import { ReactComponent as DriverImg } from '@/assets/icons/InsueCard/Car.svg';

const Categorys = [
  { name: '생명보험', value: 1, miniIcon: Life },
  { name: '저축보험', value: 2, miniIcon: Saving },
  { name: '건강보험', value: 3, miniIcon: Health },
  { name: '상해보험', value: 4, miniIcon: Accident },
  { name: 'CI보험', value: 5, miniIcon: CI },
  { name: '치아보험', value: 6, miniIcon: Dental },
  { name: '연금보험', value: 7, miniIcon: Pension },
  { name: '교육보험', value: 8, miniIcon: Education },
  { name: '애견보험', value: 9, miniIcon: Pet },
  { name: '간병/치매보험', value: 10, miniIcon: NursingCare },
  { name: '운전자보험', value: 11, miniIcon: Driver },
];

export const CategoryImg = [
  { name: '생명보험', value: 1, img: LifeImg, nav: 'life' },
  { name: '저축보험', value: 2, img: SavingImg, nav: 'saving' },
  { name: '건강보험', value: 3, img: HealthImg, nav: 'health' },
  { name: '상해보험', value: 4, img: AccidentImg, nav: 'accident' },
  { name: 'CI보험', value: 5, img: CIImg, nav: 'ci' },
  { name: '치아보험', value: 6, img: DentalImg, nav: 'dantal' },
  { name: '연금보험', value: 7, img: PensionImg, nav: 'pension' },
  { name: '교육보험', value: 8, img: EducationImg, nav: 'education' },
  { name: '애견보험', value: 9, img: PetImg, nav: 'pet' },
  { name: '간병/치매보험', value: 10, img: NursingCareImg, nav: 'nursingcare' },
  { name: '운전자보험', value: 11, img: DriverImg, nav: 'driver' },
];

export const InsueMapCategorys = [
  {
    name: '생명 보험',
    value: 1,
    img: LifeImg,
    nav: 'life',
    explain: `피보험자의 사망 시 수혜자에게 일정 금액을 지급하여 가족의 재정적 안정을 돕는 보험입니다.\n주로 가족의 생활비나 자녀의 교육비, 주택 대출 상환 등을 목적으로 가입합니다.`,
    recommand: `가정의 경제적 책임을 지고 있는 20~60대 성인.\n자녀의 교육비나 주택 대출 상환 등을 대비하고 싶은 부모.`,
    recomtxt: `생명보험으로 든든한 재정적 안전망을 마련해 보세요!`,
  },
  {
    name: '저축 보험',
    value: 2,
    img: SavingImg,
    nav: 'saving',
    explain: `일정 기간 동안 보험료를 납입하고 만기 시 원금과 이자를 돌려받는 보험으로, 저축과 보험의 기능을 동시에 제공합니다.\n금리 연동형과 확정 금리형 등이 있으며, 중도 해지 시 원금 손실이 발생할 수 있습니다.`,
    recommand: `안정적인 저축을 원하는 20~60대 성인.\n은퇴 후 자금을 계획적으로 마련하고 싶은 사람.`,
    recomtxt: `저축과 보험의 기능을 동시에 제공하는 저축보험으로 미래를 대비해 보세요!`,
  },
  {
    name: '건강 보험',
    value: 3,
    img: HealthImg,
    nav: 'health',
    explain: `특정 질병 진단 시 치료비를 보장해주는 보험으로, 질병으로 인한 경제적 부담을 줄이는 데 도움이 됩니다.\n암, 뇌졸중, 심근경색 등 주요 질병에 대한 보장을 제공합니다.`,
    recommand: `만성질환이나 질병에 대비하고 싶은 성인.\n가족력에 특정 질병이 있는 30~50대 성인.`,
    recomtxt: `예기치 못한 질병에 대비하세요! 질병보험으로 건강과 재정을 동시에 지킬 수 있을 거예요.`,
  },
  {
    name: '상해 보험',
    value: 4,
    img: AccidentImg,
    nav: 'accident',
    explain: `사고로 인한 상해 시 치료비를 보장해주는 보험으로, 일상 생활이나 직장 내 사고 발생 시\n경제적 부담을 줄이는 데 도움이 됩니다. 낙상, 교통사고 등 다양한 사고를 보장합니다.`,
    recommand: `신체 활동이 많은 모든 성인.\n사고 위험이 높은 직업 종사자.`,
    recomtxt: `예상치 못한 사고를 대비할 수 있는 든든한 상해보험과 함께, 다양한 활동에 도전해 보세요!`,
  },
  {
    name: 'CI 보험',
    value: 5,
    img: CIImg,
    nav: 'ci',
    explain: `중대한 질병(Critical Illness) 진단 시 보험금을 지급하는 보험으로, 주요 질병에 대한 경제적 대비를 제공합니다.\n암, 심혈관 질환, 주요 장기 이식 등의 경우에 큰 도움이 됩니다.`,
    recommand: `중대한 질병에 대한 경제적 대비가 필요한 20~60대 성인.\n고위험 직업에 종사하거나 스트레스가 많은 직장인.`,
    recomtxt: `중대한 질병 앞에서도 든든하게, CI보험으로 큰 질병을 대비해 보세요!`,
  },
  {
    name: '치아 보험',
    value: 6,
    img: DentalImg,
    nav: 'dantal',
    explain: `치과 치료 비용을 보장해주는 보험으로, 임플란트, 크라운, 브릿지 등의\n고가 치료 비용을 대비할 수 있습니다. 정기적인 치과 검진 및 예방 치료도 포함됩니다.`,
    recommand: `치아 건강에 관심이 많고, 정기적인 치과 진료가 필요한 10~60대.`,
    recomtxt: `먹는 즐거움을 포기할 수 없죠, 치아보험이 있다면 부담없이 치과를 방문할 수 있을 거예요.`,
  },
  {
    name: '연금 보험',
    value: 7,
    img: PensionImg,
    nav: 'pension',
    explain: `일정 기간 보험료를 납입하고, 만기 후 연금을 지급받는 보험으로, 안정적인 노후 생활을 지원합니다.\n연금 수령 방법은 일시금, 종신 연금 등 다양합니다.`,
    recommand: `노후 자금을 준비하고 싶은 30~60대 성인.\n안정적인 노후 생활을 계획하는 사람.`,
    recomtxt: `행복한 노후를 위해, 연금보험으로 안정적인 미래를 설계하세요!`,
  },
  {
    name: '교육 보험',
    value: 8,
    img: EducationImg,
    nav: 'education',
    explain: `자녀의 교육비를 대비할 수 있는 보험으로, 초등학교부터 대학까지의 학자금을\n미리 준비할 수 있습니다. 만기 시 자녀의 교육 자금으로 지급됩니다.`,
    recommand: `자녀의 학자금을 미리 준비하고 싶은 부모.\n자녀의 미래 교육비 부담을 줄이고 싶은 30~50대 부모.`,
    recomtxt: `자녀의 미래를 위해, 교육보험으로 학자금을 미리 마련해 보세요!`,
  },
  {
    name: '애견 보험',
    value: 9,
    img: PetImg,
    nav: 'pet',
    explain: `반려동물의 의료비를 보장해주는 보험으로, 질병이나 상해 시 치료비를 보장합니다.\n예방 접종, 정기 검진 등의 비용도 포함될 수 있습니다.`,
    recommand: `반려동물을 키우고 있는 모든 성인.\n반려동물의 건강 관리를 체계적으로 하고 싶은 사람.`,
    recomtxt: `소중한 반려동물의 건강을 위해, 애견보험과 함께 부담 없이 검진을 받아보세요!`,
  },
  {
    name: '간병/치매 보험',
    value: 10,
    img: NursingCareImg,
    nav: 'nursingcare',
    explain: `장기 간병이나 치매 발생 시 간병비를 보장해주는 보험으로,\n장기 요양 서비스나 시설 이용 비용을 지원합니다. 고령화 사회에서 필수적인 보험으로 각광받고 있습니다.`,
    recommand: `노후 대비를 하고 싶은 50~70대 성인.\n가족 중 치매 환자가 있거나 치매를 걱정하는 사람.`,
    recomtxt: `예측할 수 없는 노후 질병, 간병/치매보험으로 편안한 미래를 준비해 보세요.`,
  },
  {
    name: '운전자 보험',
    value: 11,
    img: DriverImg,
    nav: 'driver',
    explain: `사고가 발생했을 때 자동차보험에서 보장해주는 내용 이외에\n추가로 발생할 수 있는 각종 책임에 대한 배상을 처리해주는 보험입니다.`,
    recommand: `운전을 일주일에 1~2시간 이상 정기적으로 하는 성인.\n19세 ~ 80세 사이의 운전 할 가능성이 있는 성인.`,
    recomtxt: `차량을 보유하고 계신다면, 운전 보험에 가입하여 안전한 운전 생활을 경험해 보아요!`,
  },
];

export default Categorys;
export type CategoryType = (typeof Categorys)[0];
