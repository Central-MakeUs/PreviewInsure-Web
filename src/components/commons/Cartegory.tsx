import { CategoryProps } from '@/types/commonComponents';
import { ReactComponent as X } from '@/assets/icons/X.svg';
import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';

const Cartegory = ({ text, color, handler }: CategoryProps) => {
  const theme = useContext(ThemeContext);

  const tintColor = color === 'Primary' ? theme?.colors.Primary500 : theme?.colors.Black300;
  const bgColor = color === 'Primary' ? theme?.colors.Primary100 : theme?.colors.Black100;

  return (
    <Container tintColor={tintColor} bgColor={bgColor}>
      <p>{text}</p>
      <X width={21} height={21} fill={tintColor} onClick={handler} />
    </Container>
  );
};

const Container = styled.div<{ tintColor?: string; bgColor?: string }>`
  border-radius: 1.3rem;
  background-color: ${(prop) => prop.bgColor};
  padding: 1rem 2.4rem 1rem 3.1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;

  p {
    font-size: 3rem;
    font-weight: 600;
    color: ${(prop) => prop.tintColor};
    padding-right: 1.6rem;
  }

  path {
    stroke-width: 2;
    stroke: ${(prop) => prop.tintColor};
  }
`;

export default Cartegory;
