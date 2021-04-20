import styled, { css } from 'styled-components';

import { ThemeTypes } from 'types/global';

import { ToggleThemeProps } from '.';

type WrapperProps = {
  selectedTheme: ThemeTypes;
} & ToggleThemeProps;

const modifiers = {
  dark: () => css`
    background-color: #032b43;
  `,

  light: () => css`
    background-color: #0984e3;
  `,

  absolute: () => css`
    position: absolute;
    top: 2rem;
    right: 2rem;
  `
};

export const Wrapper = styled.label<WrapperProps>`
  ${({ selectedTheme, absolute }) => css`
    cursor: pointer;
    border-radius: 1.6em;
    display: inline-block;
    margin-left: 0.5rem;
    padding: 0.2rem;
    position: relative;
    height: 3rem;
    width: 5rem;

    svg {
      position: absolute;
      width: 2.5rem;
      height: 1.5rem;
      top: 0.7rem;
    }

    #sun {
      fill: #ffe4a1;
      right: 0;
    }

    #moon {
      fill: #b9c6d3;
      left: 0.25rem;
    }

    ${modifiers[selectedTheme]}
    ${absolute && modifiers.absolute()}
  `}
`;

export const Input = styled.input`
  visibility: hidden;
`;

const modifiersToggleButton = {
  dark: () =>
    css`
      left: 2.7rem;
    `,

  light: () =>
    css`
      left: 0.5rem;
    `
};

type ToggleButtonProps = WrapperProps;

export const ToggleButton = styled.span<ToggleButtonProps>`
  ${({ theme, selectedTheme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 1rem;
    display: inline-block;
    height: 2rem;
    width: 2rem;
    position: absolute;
    transition: left 0.1s ease;
    top: 0.5rem;

    ${modifiersToggleButton[selectedTheme]}
  `}
`;
