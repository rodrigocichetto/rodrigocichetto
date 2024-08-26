import styled, { css } from 'styled-components';

import { ThemeColors } from '@/types/global';

type WrapperProps = {
  background: ThemeColors;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, background }) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    color: ${theme.colors[background!]};
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.15);
    }
  `}
`;

export const HexagonWrapper = styled.div`
  display: contents;

  svg {
    filter: drop-shadow(rgba(0, 0, 0, 0.3) 0 0.1rem 0.15rem);
    height: 5rem;
  }
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    z-index: ${theme.layers.base};
    width: 100% !important;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
