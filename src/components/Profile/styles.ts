import styled, { css, DefaultTheme } from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  max-width: 55rem;
`;

type TagWrapperProps = {
  position?: 'top' | 'bottom';
};

const tagWrapperModifiers = {
  top: (theme: DefaultTheme) => css`
    top: ${theme.spacings.xxsmall};
  `,

  bottom: (theme: DefaultTheme) => css`
    bottom: -${theme.spacings.xlarge};
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
    padding: 0 ${theme.spacings.medium};
  `}
`;

export const InnerProfile = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    & > div:nth-child(2) {
      margin-top: ${theme.spacings.medium};
    }
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.medium};

    & > p {
      margin-bottom: ${theme.spacings.small};
      padding: 0 ${theme.spacings.small};
    }
  `}
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-around;
`;
