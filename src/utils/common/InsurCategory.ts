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

export default Categorys;
export type CategoryType = (typeof Categorys)[0];
