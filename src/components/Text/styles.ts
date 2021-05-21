import styled, { css } from 'styled-components';

import { TextProps } from '.';

export const Wrapper = styled.p<TextProps>`
  ${({ theme, size, color, weight, family, align }) => css`
    color: ${theme.colors[color!]};
    font-family: ${theme.font[family!]};
    font-size: ${theme.font.sizes[size!]};
    font-weight: ${theme.font.weights[weight!]};
    text-align: ${align};

    strong {
      font-weight: ${theme.font.weights.bold};
    }
  `}
`;
