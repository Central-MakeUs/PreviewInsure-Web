import styled from 'styled-components';
import Logo from '@assets/imgs/logo.png';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };

  return (
    <Container>
      <LogoImg src={Logo} onClick={goToMain} />
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  height: 12rem;
`;

const LogoImg = styled.img`
  width: 15.2rem;
  position: absolute;
  left: 18rem;
  top: 7rem;
`;

export default Header;
