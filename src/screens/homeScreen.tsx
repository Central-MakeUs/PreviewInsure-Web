import { Link } from 'react-router-dom';
import styled from 'styled-components';

const homeScreen = () => {
  return (
    <div>
      <Text>Routing table</Text>
      <Link to="/test1">
        <NavItem>test1</NavItem>
      </Link>
      <br />
      <Link to="/test2">
        <NavItem>test2</NavItem>
      </Link>
      <br />
      <Link to="/login">
        <NavItem>login</NavItem>
      </Link>
      <br />
      <Link to="/main">
        <NavItem>main</NavItem>
      </Link>
      <br />
      <Link to="/insueBording">
        <NavItem>Insue Bording</NavItem>
      </Link>
      <br />
      <Link to="/insuePlanner">
        <NavItem>Insue Planner</NavItem>
      </Link>
      <br />
      <Link to="/question">
        <NavItem>QNA</NavItem>
      </Link>
      <br />
      <Link to="/user">
        <NavItem>User</NavItem>
      </Link>
    </div>
  );
};

const NavItem = styled.div`
  color: ${({ theme }) => theme.colors.Black500};
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 5rem 0 5rem;
`;

const Text = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
`;

export default homeScreen;
