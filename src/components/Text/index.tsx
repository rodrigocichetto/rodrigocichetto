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
  align?: 'left' | 'center' | 'right' | 'justify';
  tag?: ElementType;
  children?: ReactNode;
};

const Text = ({
  size = 'medium',
  color = 'text',
  weight = 'regular',
  family = 'primary',
  align = 'left',
  tag,
  children
}: TextProps) => (
  <S.Wrapper as={tag} {...{ size, color, weight, family, align }}>
    {children}
  </S.Wrapper>
);

export default Text;
