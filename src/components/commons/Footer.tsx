import media from '@styles/media';
import styled from 'styled-components';
import logo from '@assets/imgs/logo-gray.webp';

function Footer() {
  return (
    <Container>
      <IMG src={logo} />

      <Left>
        <nav>
          <Line>
            <NavItem>
              <Link href="/policy/service" className="big">
                서비스 이용약관
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/policy/privacy" className="big">
                개인정보 처리방침
              </Link>
            </NavItem>
            <NavItem>
              <Link href="https://lilee.notion.site/98c0b8efde894f929031a5fc68afb1c2?pvs=4">고객권리안내</Link>
            </NavItem>
            <NavItem className="last">
              <Link href="https://www.fss.or.kr/fss/s1332/s1332Index/sub.do?menuNo=200037">서민금융 1332</Link>
            </NavItem>
          </Line>
          <Line>
            <NavItem>
              <Link href="mailto:reviewInsue@gmail.com?subject=프리뷰인슈 문의하기" className="big">
                전자민원접수
              </Link>
            </NavItem>
            <NavItem>
              <Link href="https://www.fss.or.kr/fss/main/contents.do?menuNo=200647">보험사기신고</Link>
            </NavItem>
            <NavItem className="last">
              <Link href="https://lilee.notion.site/MEMBER-3ba7da7730be4143a2be2cf7e99f3c16?pvs=4">회사소개</Link>
            </NavItem>
          </Line>
        </nav>

        <Company>&copy; PreviewInsure Corp.</Company>
      </Left>
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;
  height: 21rem;
  bottom: 0;
  background-color: #f5f6f8;
  position: relative;
  transform: translateY(-100%);
`;

const IMG = styled.img`
  position: absolute;
  width: 15rem;
  top: 4.9rem;
  left: 19%;
`;
const Left = styled.div`
  position: absolute;
  left: 35.3%;
  top: 4.5rem;
  align-items: end;
`;
const Company = styled.address`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.Black500};
  margin-top: 2.2rem;
`;

const Line = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
`;
const NavItem = styled.li`
  &:after {
    content: '';
    border-style: solid;
    border-width: 1px;
    border-color: transparent ${({ theme }) => theme.colors.Black500} transparent transparent;
    height: 16px;
    width: 0px;
    margin-inline: 1.8rem;
  }
  &.last:after {
    display: none;
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.Black500};
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  font-weight: 400;

  &:hover {
    color: ${({ theme }) => theme.colors.Black500};
  }

  &.big {
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 600;
  }
`;

export default Footer;
