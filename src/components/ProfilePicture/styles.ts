import styled, { css } from 'styled-components';

import { ProfilePictureProps } from '.';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 30rem;
`;

export const Container = styled.div`
  border-radius: 50%;
  height: 31.2rem;
  -webkit-tap-highlight-color: transparent;
  transform: scale(0.48);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 40rem;

  &:hover {
    transform: scale(0.54);

    img {
      /* transform: translateY(0) scale(1.2); */
      width: 42rem;
      left: -0.5rem;
      top: 16rem;
    }
  }

  img {
    pointer-events: none;
    position: relative;
    transform: translateY(2rem) scale(1.15);
    transform-origin: 50% bottom;
    /* transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1); */
    /* will-change: transform; */
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1),
      top 300ms cubic-bezier(0.4, 0, 0.2, 1),
      left 300ms cubic-bezier(0.4, 0, 0.2, 1);
    left: 0.5rem;
    top: 19rem;
    width: 40rem;
  }
`;

export const ContainerInner = styled.div`
  clip-path: path(
    'M 390,400 C 390,504.9341 304.9341,590 200,590 95.065898,590 10,504.9341 10,400 V 10 H 200 390 Z'
  );
  position: relative;
  transform-origin: 50%;
  top: -20rem;
`;

type CircleProps = Omit<ProfilePictureProps, 'src'>;

const circleModifiers = {
  background: (background: string) => css`
    background-image: url(${background});
    background-position: center center;
  `
};

export const Circle = styled.span<CircleProps>`
  ${({ theme, color, background }) => css`
    background-color: ${theme.colors[color!]};
    border-radius: 50%;
    cursor: pointer;
    height: 38rem;
    left: 1rem;
    pointer-events: none;
    position: absolute;
    top: 21rem;
    width: 38rem;

    ${!!background && circleModifiers.background(background)}
  `}
`;
