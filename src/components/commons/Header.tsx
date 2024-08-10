import styled from 'styled-components';
import Logo from '@assets/imgs/logo.png';
import LogoWhite from '@assets/imgs/logo-white.webp';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import media from '@styles/media';
import { useStore } from '@stores/useStore';

function Header() {
  const navigate = useNavigate();
  const [isHome, setIsHome] = useState(true);
  const [current, setCurrent] = useState<string>(''); // main, insuePlanner, insueMap, question 등등..
  // const nickName = '춤추는 부엉이';
  const { nickName, isLogin } = useStore();

  const goToMain = () => {
    navigate('/');
  };
  const goToLogin = () => {
    navigate('/login');
  };

  useEffect(() => {
    location.pathname === '/' ? setIsHome(true) : setIsHome(false);
    const cur = location.pathname.split('/')[1];
    setCurrent(cur);
  }, [location.pathname, setIsHome]);

  return (
    <Container className={`${isHome ? 'primary' : ''}`}>
      <LogoImg src={isHome ? LogoWhite : Logo} onClick={goToMain} />

      <PC>
        <LinkBox>
          <Link to="/">
            <span className={`${current === 'insueMap' ? 'active' : ''}`}>인슈맵</span>
          </Link>
          <Link to="/insuePlanner">
            <span className={`${current === 'insuePlanner' ? 'active' : ''}`}>AI인슈플래너</span>
          </Link>
          <Link to="/question">
            <span className={`${current === 'question' ? 'active' : ''}`}>Q&A</span>
          </Link>
        </LinkBox>
        {isLogin ? (
          <Nickname colorWhite={isHome}>{nickName} 님</Nickname>
        ) : (
          <Login onClick={goToLogin} colorWhite={isHome}>
            로그인
          </Login>
        )}
      </PC>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  height: 18rem;

  &.primary {
    background-color: ${({ theme }) => theme.colors.Primary500};
  }
`;

const PC = styled.div`
  position: relative;
  top: 6.3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 11rem;
  margin-left: auto;
  margin-right: 10.7rem;

  ${media.mobile`
    display: none;
  `};
`;

const LogoImg = styled.img`
  width: 15.2rem;
  position: absolute;
  left: 18rem;
  top: 7rem;
  z-index: 3;
  cursor: pointer;
  ${media.small`
    width: 100px;
    left: 29px;
    top: 5.2rem
  `};

  ${media.mobile`
    width: 100px;
    left: 29px;
    top: 5.2rem
  `};
`;

const LinkBox = styled.div`
  display: flex;
  gap: 5.1rem;

  span {
    color: ${({ theme }) => theme.colors.Black500};
    font-size: ${({ theme }) => theme.fontSizes.paragraph};
    font-weight: 500;
  }

  span.active {
    color: ${({ theme }) => theme.colors.Primary500};
  }
`;

const Nickname = styled.span<{ colorWhite: boolean }>`
  float: right;
  color: white;
  border-radius: 1.5rem;
  padding: 1rem;
  width: fit-content;
  height: fit-content;
  min-width: 23.6rem;
  min-height: 6.6rem;
  display: block;
  text-align: center;
  align-content: center;
  background-color: ${(props) => (props.colorWhite ? props.theme.colors.Primary400 : props.theme.colors.Primary500)};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 500;
`;

const Login = styled.span<{ colorWhite: boolean }>`
  float: right;
  color: white;
  border-radius: 1.5rem;
  padding: 1rem;
  width: fit-content;
  height: fit-content;
  min-width: 13.6rem;
  min-height: 6.6rem;
  display: block;
  text-align: center;
  align-content: center;
  background-color: ${(props) => (props.colorWhite ? props.theme.colors.Primary400 : props.theme.colors.Primary500)};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-weight: 500;
  cursor: pointer;
`;

export default Header;
