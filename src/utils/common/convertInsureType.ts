const insuranceTypes = [
  { code: 'LF', name: '생명 보험' }, // = 종신 보험
  { code: 'LF', name: '종신 보험' },
  { code: 'HE', name: '건강 보험' }, // = 질병 보험
  { code: 'HE', name: '질병 보험' },
  { code: 'CI', name: 'CI 보험' },
  { code: 'TE', name: '치아 보험' },
  { code: 'TD', name: '간병/치매 보험' },
  { code: 'PA', name: '상해 보험' },
  { code: 'PI', name: '연금 보험' },
  { code: 'ED', name: '교육 보험' },
  { code: 'SI', name: '저축 보험' },
  { code: 'DR', name: '운전자 보험' },
  { code: 'DE', name: '전체 카테고리' },
  { code: 'DE', name: '그 외' },

  // 붙여놓기 ver.
  { code: 'LF', name: '생명보험' }, // = 종신 보험
  { code: 'LF', name: '종신보험' },
  { code: 'HE', name: '건강보험' }, // = 질병 보험
  { code: 'HE', name: '질병보험' },
  { code: 'CI', name: 'CI보험' },
  { code: 'TE', name: '치아보험' },
  { code: 'TD', name: '간병/치매보험' },
  { code: 'PA', name: '상해보험' },
  { code: 'PI', name: '연금보험' },
  { code: 'ED', name: '교육보험' },
  { code: 'SI', name: '저축보험' },
  { code: 'DR', name: '운전자보험' },
  { code: 'DE', name: '전체카테고리' },
];

export const convertInsureType = (name: string) => {
  let code = '';
  for (let i = 0; i < insuranceTypes.length; i++) {
    if (name === insuranceTypes[i].name) {
      return insuranceTypes[i].code;
    }
  }
  if (code === '') {
    return 'DE'; // 그 외
  }

  return 'ERROR';
};
