'use client';
import {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect
} from 'react';

import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider
} from 'styled-components';

import { light, dark } from '@/styles/theme';

import { ThemeTypes } from '@/types/global';

import { setStorageTheme, getStorageTheme } from '@/utils/storage';

type ContextData = {
  theme: DefaultTheme;
  selectedTheme: ThemeTypes;
  toggleTheme: () => void;
};

type ProviderData = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ContextData>({} as ContextData);

const ThemeProvider = ({ children }: ProviderData) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeTypes>('dark');
  const theme = selectedTheme === 'light' ? light : dark;

  useEffect(() => {
    const storageTheme = getStorageTheme();

    setSelectedTheme(storageTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = selectedTheme === 'light' ? 'dark' : 'light';

    setSelectedTheme(newTheme);
    setStorageTheme(newTheme);
  }, [selectedTheme]);

  return (
    <ThemeContext.Provider value={{ theme, selectedTheme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

function useTheme(): ContextData {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error('useTheme must be used within an ThemeProvider');

  return context;
}

export { useTheme, ThemeProvider };
