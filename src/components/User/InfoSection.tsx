import styled from 'styled-components';
import { useState } from 'react';
import media from '@styles/media';
import { ReactComponent as Pencle } from '@assets/icons/Pencle.svg';
import { useStore } from '@stores/useStore';

function InfoSection() {
  // TODO: GET요청
  const { nickName } = useStore();
  const userInfo = { ninkname: nickName, year: '1998', month: '12', gender: '여성', email: 'qwer@qwerty.com' };
  const [editInfo, setEditInfo] = useState(userInfo);
  const [view, setView] = useState<'VIEW' | 'EDIT'>('VIEW');

  function changEdit() {
    setEditInfo(userInfo);
    setView('EDIT');
  }

  function saveEditInfo() {
    //TODO: POST 요청
    setView('VIEW');
    console.log(editInfo);
    // 요청이 유효한지 확인 필요
  }
  function handleEditGender(value: string) {
    setEditInfo((cur) => ({ ...cur, gender: value }));
  }
  function handleEditYear(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value === '') setEditInfo({ ...editInfo, month: value });
    // 숫자 허용 4자리
    if (/^\d{0,4}$/.test(value)) {
      setEditInfo({ ...editInfo, year: value });
    }
  }
  function handleEditMonth(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value === '') setEditInfo({ ...editInfo, month: value });
    // 숫자 허용 2자리, 1~12
    else if (/^\d{0,2}$/.test(value)) {
      const numValue = parseInt(value, 10);
      if (numValue >= 1 && numValue <= 12) {
        setEditInfo({ ...editInfo, month: value });
      }
    }
  }

  return (
    <Info>
      <SubTitle>| 내 정보</SubTitle>
      <InfoBoxPC>
        <p>닉네임</p>
        <b>{userInfo.ninkname}</b>
        <p>생년월일</p>
        <b>
          {userInfo.year}-{userInfo.month}
        </b>
        <p>성별</p>
        <b>{userInfo.gender}</b>
      </InfoBoxPC>
      <InfoBoxMobile>
        <Flex>
          <b>
            <span style={{ fontWeight: '600', fontSize: '18px' }}>{userInfo.ninkname}</span> 님
          </b>
          <EditIcon>
            {view === 'VIEW' ? (
              <Pencle width={13} height={13} fill="white" onClick={changEdit} />
            ) : (
              <span onClick={saveEditInfo}>수정완료</span>
            )}
          </EditIcon>
        </Flex>
        {view === 'VIEW' ? (
          <Flex>
            <p>
              {userInfo.year}-{userInfo.month}
            </p>
            <p>{userInfo.gender}</p>
          </Flex>
        ) : (
          <>
            <Flex>
              <Block selected={false}>
                <Input type="number" value={editInfo.year} onChange={handleEditYear} />
                {`-`}
                <Input type="number" value={editInfo.month} onChange={handleEditMonth} />
              </Block>
            </Flex>
            <Flex>
              <Block selected={editInfo.gender === '여성'} onClick={() => handleEditGender('여성')}>
                여성
              </Block>
              <Block selected={editInfo.gender === '남성'} onClick={() => handleEditGender('남성')}>
                남성
              </Block>
              <Block selected={editInfo.gender === '선택안함'} onClick={() => handleEditGender('선택안함')}>
                선택안함
              </Block>
            </Flex>
          </>
        )}

        <Email>{userInfo.email}</Email>
      </InfoBoxMobile>
    </Info>
  );
}
const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.Primary500};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 600;

  ${media.mobile`
    display: none;
  `}
`;

const Info = styled.div`
  grid-area: a;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.Black_W};
  padding: 5.2rem 5.2rem 9.1rem 5.2rem;
  margin-bottom: 2.4rem;
  border-radius: 3.2rem;

  ${({ theme }) => media.mobile`
    margin-top: 6rem;
    background-color: ${theme.colors.Primary500} ;
    width: 100%;
    padding: 6rem 0 0 0;
  `}
`;

const InfoBoxPC = styled.div`
  margin-top: 3.2rem;
  display: grid;
  grid-template-columns: 10rem 18rem;
  row-gap: 4rem;

  ${media.mobile`
    display: none;
  `}

  p {
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.Black300};
  }

  b {
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.Black500};
  }
`;

const InfoBoxMobile = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  display: none;

  ${media.mobile`
    display: block;
  `}
`;

const Flex = styled.div`
  display: flex;
  margin: 0 4rem 2rem 4rem;

  p {
    margin-right: 1rem;
  }
`;

const Block = styled.span<{ selected: boolean }>`
  font-size: 12px;
  padding: 2.5rem;
  border-radius: 2rem;
  color: ${({ selected, theme }) => (selected ? 'white' : theme.colors.Primary500)};
  background-color: ${({ selected, theme }) => (selected ? theme.colors.Primary400 : theme.colors.Primary200)};
  margin-right: 2rem;
`;

const Input = styled.input`
  background: none;
  border: none;
  color: inherit;
  width: 9rem;
  cursor: text;
  appearance: none;
`;

const EditIcon = styled.div`
  margin-left: auto;
  cursor: pointer;

  span {
    font-size: 12px;
    padding: 2.5rem;
    border-radius: 2rem;
    border: 1px solid white;
  }
`;

const Email = styled.div`
  background-color: ${({ theme }) => theme.colors.Primary400};
  padding: 2.5rem 4rem;
  border-radius: 0 0 3.2rem 3.2rem;
`;

export default InfoSection;
