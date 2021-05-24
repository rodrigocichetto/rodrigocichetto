import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  position: relative;
  max-width: 55rem;
`;

type TagWrapperProps = {
  position?: 'top' | 'bottom';
};

const tagWrapperModifiers = {
  top: (theme: DefaultTheme) => css`
    top: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      top: ${theme.spacings.xxsmall};
    `}
  `,

  bottom: (theme: DefaultTheme) => css`
    bottom: -${theme.spacings.medium};

    ${media.greaterThan('medium')`
      bottom: -${theme.spacings.xlarge};
    `}
  `
};

export const TagWrapper = styled.div<TagWrapperProps>`
  ${({ theme, position }) => css`
    position: absolute;

    ${!!position && position === 'top'
      ? tagWrapperModifiers.top(theme)
      : tagWrapperModifiers.bottom(theme)}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 0 ${theme.spacings.small};

    ${media.greaterThan('medium')`
      padding: 0 ${theme.spacings.medium};
    `}
  `}
`;

export const InnerProfile = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;

    & > div:nth-child(2) {
      margin: 0 0 ${theme.spacings.xsmall};
    }

    ${media.greaterThan('medium')`
      flex-direction: row;

      & > div:nth-child(2) {
        margin: ${theme.spacings.medium} 0 0;
      }
    `}

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};

      & > h1 {
        font-size: ${theme.font.sizes.large};
      }
    `}
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    & > p {
      margin-bottom: ${theme.spacings.small};
    }

    ${media.greaterThan('medium')`
      padding: 0 ${theme.spacings.medium};

      & > p {
        padding: 0 ${theme.spacings.small};
      }
    `}

    ${media.lessThan('medium')`
      & > p {
        font-size: ${theme.font.sizes.small};
      }
    `}
  `}
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-around;
`;
