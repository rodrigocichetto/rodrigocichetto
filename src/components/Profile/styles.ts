import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  position: relative;
  width: 80vw;

  ${media.greaterThan('medium')`
    max-width: 60rem;
  `}
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
    font-size: ${theme.font.sizes.small};

    & > div:nth-child(2) {
      margin: 0 0 ${theme.spacings.xsmall};
    }

    & > h1 {
      font-size: ${theme.font.sizes.large};
    }

    ${media.greaterThan('medium')`
      flex-direction: row;
      font-size: ${theme.font.sizes.medium};

      & > h1 {
        font-size: ${theme.font.sizes.xxlarge};
      }

      & > div:nth-child(2) {
        margin: ${theme.spacings.medium} 0 0;
      }
    `}
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    & > p {
      font-size: ${theme.font.sizes.small};
      margin-bottom: ${theme.spacings.small};
    }

    ${media.greaterThan('medium')`
      padding: 0 ${theme.spacings.medium};

      & > p {
        font-size: ${theme.font.sizes.medium};
        padding: 0 ${theme.spacings.small};
      }
    `}
  `}
`;

type SocialProps = {
  evenly?: boolean;
};

export const Social = styled.div<SocialProps>`
  ${({ evenly }) => css`
    display: flex;
    justify-content: ${evenly ? 'space-evenly' : 'space-around'};
  `}
`;
