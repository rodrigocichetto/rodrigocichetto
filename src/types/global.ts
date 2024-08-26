import theme from '@/styles/theme';
import type { AvailableIcons } from '@/components/Icon';

export type ThemeTypes = 'light' | 'dark';

export type ThemeColors = keyof typeof theme.colors;
export type ThemeFontSizes = keyof typeof theme.font.sizes;
export type ThemeFontFamilies = 'primary' | 'secondary';
export type ThemeFontWeights = keyof typeof theme.font.weights;

export type SocialLink = {
  icon: AvailableIcons;
  url: string;
};

export type { AvailableIcons };
