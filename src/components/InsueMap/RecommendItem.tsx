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
    window.open(link, '_black');
  };
  return (
    <Container onClick={handleLink}>
      <Img src={insuranceImage} alt={insuranceCompany} />
      <Wrap>
        <Title>{insuranceCompany}</Title>
        <Content>{insuranceContent}</Content>
      </Wrap>
      <Detail>{insuranceRate}%</Detail>
      <Detail>약 {price}원</Detail>
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
  margin: 0 auto;
  /* width: 18rem; */

  ${media.mobile`
    flex: 3 1 0;
    padding-right: 15px;
    max-width:28rem;
  `}
`;

const Wrap = styled.div`
  flex: 8 1 0;
  display: flex;

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

const Content = styled.b`
  flex: 6 1 0;
  color: ${({ theme }) => theme.colors.Black500};
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
  text-overflow: ellipsis;

  ${media.mobile`
    font-size: 4rem;
    font-weight: 500;
    text-align: left;
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
