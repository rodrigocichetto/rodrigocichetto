import theme from 'styles/theme';

export type ThemeTypes = 'light' | 'dark';

export type ThemeColors = keyof typeof theme.colors;
