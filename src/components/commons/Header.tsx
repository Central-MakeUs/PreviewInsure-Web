import styled from 'styled-components';
import Logo from '@assets/imgs/logo.png';
import LogoWhite from '@assets/imgs/logo-white.webp';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
  const navigate = useNavigate();
  const [isHome, setIsHome] = useState(true);

  const goToMain = () => {
    navigate('/');
  };

  useEffect(() => {
    location.pathname === '/main' ? setIsHome(true) : setIsHome(false);
  }, [location.pathname, setIsHome]);

  return (
    <Container className={`${isHome ? 'primary' : ''}`}>
      <LogoImg src={isHome ? LogoWhite : Logo} onClick={goToMain} />
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  height: 12rem;

  &.primary {
    background-color: ${({ theme }) => theme.colors.Primary500};
  }
`;

const LogoImg = styled.img`
  width: 15.2rem;
  position: absolute;
  left: 18rem;
  top: 7rem;
`;

export default Header;
