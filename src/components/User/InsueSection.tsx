import styled from 'styled-components';
import { CategoryImg } from '@utils/common/InsurCategory';
import { useState } from 'react';
import media from '@styles/media';
import InsueBarItem from '@components/User/InsueBarItem';

interface InsueSectionProps {
  view?: 'VIEW | EDIT';
}
interface Item {
  type: string;
  insueCompany: string;
}
function InsueSection({}: InsueSectionProps) {
  // TODO: GET요청
  const myinsue = [
    { type: '생명보험', insueCompany: 'KB손해보험' },
    { type: '건강보험', insueCompany: 'KB손해보험' },
    { type: '상해보험', insueCompany: 'KB손해보험' },
    { type: 'CI보험', insueCompany: 'KB손해보험' },
    { type: '운전자보험', insueCompany: 'KB손해보험' },
    { type: '연금보험', insueCompany: 'KB손해보험' },
    { type: '애견보험', insueCompany: 'KB손해보험' },
    { type: '건강보험', insueCompany: 'KB손해보험' },
  ];

  const [insues, setInsues] = useState<Item[]>(myinsue);

  function changeInsue(type: string, company: string) {
    const updatedInsues = insues.map((item) => (item.type === type ? { ...item, insueCompany: company } : item));
    setInsues(updatedInsues);

    // TODO : POST 요청
  }

  return (
    <InsueBox>
      {insues.map((insue) => (
        <InsueBarItem
          text={insue.type}
          SVG={CategoryImg.find((item) => item.name === insue.type)?.img}
          company={insue.insueCompany}
          handleInsue={changeInsue}
        />
      ))}
    </InsueBox>
  );
}

const InsueBox = styled.div`
  width: 89%;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  ${media.mobile`
    flex-wrap: nowrap;
  width: 89%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  `}
`;

export default InsueSection;
