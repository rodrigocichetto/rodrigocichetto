import { ThemeTypes } from '@/types/global';

const STORAGE_THEME = '@RodrigoCichetto:theme';

export const setStorageTheme = (theme: ThemeTypes) => {
  localStorage.setItem(STORAGE_THEME, theme);
};

export const getStorageTheme = () =>
  localStorage.getItem(STORAGE_THEME) as ThemeTypes;
