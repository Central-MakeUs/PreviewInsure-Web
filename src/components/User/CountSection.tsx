import styled from 'styled-components';
import media from '@styles/media';
import { useNavigate } from 'react-router-dom';

interface CountSectionProp {
  insueCount: number | undefined;
  favoritCount: number | undefined;
}
function CountSection({ insueCount, favoritCount }: CountSectionProp) {
  const navigate = useNavigate();
  return (
    <Count>
      <Box onClick={() => navigate('/registInsue')}>
        <Number>{insueCount ? insueCount : '-'}</Number>
        <Text>가입 보험</Text>
      </Box>
      <Box>
        <Number>{insueCount ? 11 - insueCount : '-'}</Number>
        <Text>미가입 보험</Text>
      </Box>
      <Box>
        <Number>{favoritCount ? favoritCount : '-'}</Number>
        <Text>관심 보험</Text>
      </Box>
    </Count>
  );
}

const Count = styled.div`
  width: 87%;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  display: none;

  ${media.mobile`
  display: block;
    flex-wrap: nowrap;
    width: 75%;
    margin: 10.5px auto 0 auto;
    display: flex;
    justify-content: space-between;
  `}
`;
const Box = styled.div`
  width: 15rem;
  cursor: pointer;
`;

const Number = styled.p`
  color: ${({ theme }) => theme.colors.Black500};
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.Black500};
  font-weight: 400;
  font-size: 12px;
  text-align: center;
`;

export default CountSection;
