import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    position: fixed;
    box-shadow: ${theme.shadow};
    padding: ${theme.spacings.xsmall};
    background: ${theme.colors.menu};
    border-radius: ${theme.spacings.xxlarge};
    bottom: ${theme.spacings.small};
    left: 50%;
    transform: translateX(-50%);
    z-index: ${theme.layers.menu};
    transition: all 0.3s ease-in-out;

    svg {
      height: ${theme.font.sizes.medium};
    }

    & > * {
      margin: 0 ${theme.spacings.xsmall};
    }

    ${media.greaterThan('medium')`
      position: absolute;

      &:hover {
        bottom: ${theme.spacings.medium};
      }

      svg {
        height: ${theme.font.sizes.large};
      }
    `}
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
  ${({ theme, active = false }) => css`
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-${theme.spacings.xxsmall});
    }

    ${!!active && linkModifiers.active()}
  `}
`;
