import styled, { css } from 'styled-components';

import { IconProps } from '.';

export const Wrapper = styled.div<Omit<IconProps, 'icon'>>`
  ${({ theme, size, color }) => css`
    display: inline-flex;
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes[size!]};

    svg {
      height: ${theme.font.sizes[size!]};
    }
  `}
`;
