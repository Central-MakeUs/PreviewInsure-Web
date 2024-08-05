import media from '@styles/media';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <div>
        <Left>
          <Text>SITE MAP</Text>

          <Nav>
            <Link to="/">
              <NavItem>회사소개</NavItem>
            </Link>
            <VerticalLine />
            <Link to="/">
              <NavItem>공지사항</NavItem>
            </Link>
            <VerticalLine />
            <Link to="/">
              <NavItem>이용약관</NavItem>
            </Link>
            <VerticalLine />
            <Link to="/">
              <NavItem>문의하기</NavItem>
            </Link>
          </Nav>
        </Left>

        <Right>
          <address>
            <Text>&copy;PreviewInsure Corp.</Text>
          </address>
        </Right>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;
  height: 19rem;
  bottom: 0;
  background-color: #f5f6f8;
  position: relative;
  transform: translateY(-100%);

  ${media.small`
    display: none;
  `}
`;
const Left = styled.div`
  position: absolute;
  left: 36rem;
  top: 5rem;
  display: flex;
  align-items: end;
`;
const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.Black500};
`;
const Nav = styled.nav`
  margin-left: 10rem;

  display: flex;
  gap: 10px;

  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
`;
const NavItem = styled.span`
  color: ${({ theme }) => theme.colors.Black500};
`;

const VerticalLine = styled.div`
  height: 23;
  border-width: 0px 1px 0px 0px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.Black500};
`;

const Right = styled.div`
  position: absolute;
  right: 36rem;
  top: 12rem;
`;

export default Footer;
