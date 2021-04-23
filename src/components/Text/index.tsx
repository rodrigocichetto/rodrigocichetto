import { ElementType, ReactNode } from 'react';

import {
  ThemeFontSizes,
  ThemeColors,
  ThemeFontWeights,
  ThemeFontFamilies
} from 'types/global';

import * as S from './styles';

export type TextProps = {
  size?: ThemeFontSizes;
  color?: ThemeColors;
  weight?: ThemeFontWeights;
  family?: ThemeFontFamilies;
  tag?: ElementType;
  children?: ReactNode;
};

const Text = ({
  size = 'medium',
  color = 'text',
  weight = 'regular',
  family = 'primary',
  tag,
  children
}: TextProps) => (
  <S.Wrapper as={tag} size={size} color={color} weight={weight} family={family}>
    {children}
  </S.Wrapper>
);

export default Text;
