import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    position: absolute;
    box-shadow: ${theme.shadow};
    padding: ${theme.spacings.xsmall};
    background: ${theme.colors.menu};
    border-radius: ${theme.spacings.xxlarge};
    bottom: ${theme.spacings.small};
    left: 50%;
    transform: translateX(-50%);
  `}
`;
