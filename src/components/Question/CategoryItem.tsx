import { CategoryProps } from '@/types/QuestionComponents';
import styled from 'styled-components';

import Colors from '@styles/Colors';
import media from '@styles/media';

function CategoryItem({ name, Icon, isSelected = false }: CategoryProps) {
  return (
    <Container isSelected={isSelected}>
      <IconSize>
        <Icon width={'100%'} height={'100%'} color={isSelected ? 'white' : Colors.Black500} />
      </IconSize>
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

const IconSize = styled.div`
  width: 23px;
  height: 22px;

  ${media.mobile`
    width: 18px;
    height: 16px;
  `}
`;

const Text = styled.span`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.small};

  ${media.mobile`
    font-size: 14px;
  `}
`;
export default CategoryItem;
