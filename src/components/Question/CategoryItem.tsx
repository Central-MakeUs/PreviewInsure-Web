import { CategoryProps } from '@/types/QuestionComponents';
import styled from 'styled-components';

import Colors from '@styles/Colors';

function CategoryItem({ name, Icon, isSelected = false }: CategoryProps) {
  return (
    <Container isSelected={isSelected}>
      <Icon width={23} height={22} color={isSelected ? 'white' : Colors.Black500} />
      <Text>{name}</Text>
    </Container>
  );
}

const Container = styled.div<{ isSelected: boolean }>`
  padding: 1.9rem 3.8rem;
  border-radius: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: ${(props) => (props.isSelected ? props.theme.colors.Primary500 : props.theme.colors.Primary_W)};
  color: ${(props) => (props.isSelected ? 'white' : props.theme.colors.Black500)};
  transition: 0.2s;
`;

const Text = styled.span`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
export default CategoryItem;
