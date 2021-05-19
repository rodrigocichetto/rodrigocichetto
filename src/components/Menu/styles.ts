import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    position: absolute;
    box-shadow: ${theme.shadow};
    padding: ${theme.spacings.xsmall};
    background: ${theme.colors.menu};
    border-radius: ${theme.spacings.xxlarge};
    bottom: ${theme.spacings.small};
    left: 50%;
    transform: translateX(-50%);

    & > * {
      margin: 0 ${theme.spacings.xsmall};
    }
  `}
`;

const linkModifiers = {
  active: () => css`
    opacity: 1;
  `
};

type LinkWrapperProps = {
  active?: boolean;
};

export const LinkWrapper = styled.div<LinkWrapperProps>`
  ${({ active }) => css`
    cursor: pointer;
    opacity: 0.5;

    ${!!active && linkModifiers.active()}
  `}
`;
