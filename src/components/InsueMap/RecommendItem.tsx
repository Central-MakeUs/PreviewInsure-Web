import media from '@styles/media';
import styled from 'styled-components';

function RecommendItem({
  insuranceImage,
  insuranceCompany,
  insuranceContent,
  insuranceRate,
  price,
  link,
}: RecommendItemProps) {
  const handleLink = () => {
    const userConfirmed = window.confirm('해당 보험 상품 페이지로 이동하시겠습니까?');

    if (userConfirmed) {
      window.open(link, '_blank');
    }
  };
  return (
    <Container onClick={handleLink}>
      <Img src={insuranceImage} alt={insuranceCompany} />
      <Wrap>
        <Title>{insuranceCompany}</Title>
        <Content>{insuranceContent}</Content>
      </Wrap>
      <Detail>{insuranceRate}%</Detail>
      <Detail>약 {price?.toLocaleString()}원</Detail>
      <Line />
    </Container>
  );
}

const Container = styled.div`
  height: fit-content;
  position: relative;
  display: flex;

  min-height: 11rem;
  align-items: center;
  cursor: pointer;

  ${media.mobile`
    min-height: 20rem;
  `}
`;

const Img = styled.img`
  flex: 2 1 0;
  object-fit: contain;
  margin: auto;
  padding-left: 3rem;
  max-width: 16rem;
  max-height: 7rem;
  /* width: 18rem; */

  ${media.mobile`
    flex: 3 1 0;
    margin-right: 10px;
    max-width: 18rem;
    max-height: 10rem;
    padding-left:0;
  `}
`;

const Wrap = styled.div`
  flex: 8 1 0;
  display: flex;
  overflow: hidden;

  ${media.mobile`
    flex-direction: column;
  `}
`;

const Title = styled.p`
  flex: 2 1 0;
  color: ${({ theme }) => theme.colors.Black500};
  font-weight: 400;
  font-size: 2rem;
  text-align: center;

  ${media.mobile`
    font-size: 3rem;
    font-weight: 500;
    text-align: left;
  `}
`;

const Content = styled.div`
  flex: 6 1 0;
  color: ${({ theme }) => theme.colors.Black500};
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${media.mobile`
    flex: 1 1 auto;
    font-size: 4rem;
    font-weight: 500;
    text-align: left;
    width: 90%;
  `}
`;

const Detail = styled.p`
  flex: 3 1 0;
  color: ${({ theme }) => theme.colors.Black500};
  font-weight: 400;
  font-size: 2rem;
  text-align: center;

  ${media.mobile`
    display: none;
  `}
`;

const Line = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  border-style: solid;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.Black100};
`;

export default RecommendItem;
