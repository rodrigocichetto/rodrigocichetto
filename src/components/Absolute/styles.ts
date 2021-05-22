import styled, { css } from 'styled-components';

import { AbsoluteProps } from '.';

const wrapperModifiers = {
  center: () => css`
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  `
};

export const Wrapper = styled.div<Omit<AbsoluteProps, 'children'>>`
  ${({ center, top, right, bottom, left }) => css`
    position: absolute;

    ${!!center && wrapperModifiers.center()}

    ${!!top &&
    css`
      top: ${top};
    `}
    ${!!right &&
    css`
      right: ${right};
    `}
    ${!!bottom &&
    css`
      bottom: ${bottom};
    `}
    ${!!left &&
    css`
      left: ${left};
    `}
  `}
`;
