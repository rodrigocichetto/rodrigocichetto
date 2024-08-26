import styled, { css } from 'styled-components';
import { ThemeColors, ThemeFontSizes } from '@/types/global';

type WrapperProps = {
  size?: ThemeFontSizes;
  color?: ThemeColors;
};

export const Wrapper = styled.div<Omit<WrapperProps, 'icon'>>`
  ${({ theme, size, color }) => css`
    display: inline-flex;
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes[size!]};

    svg {
      height: ${theme.font.sizes[size!]};
    }
  `}
`;
