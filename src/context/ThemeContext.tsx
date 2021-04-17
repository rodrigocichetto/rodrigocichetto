import {
  createContext,
  useState,
  useContext,
  useCallback,
  ReactNode
} from 'react';

import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider
} from 'styled-components';

import { light, dark } from 'styles/theme';

import { ThemeTypes } from 'types/global';

type ContextData = {
  theme: DefaultTheme;
  selectedTheme: ThemeTypes;
  toggleTheme: () => void;
};

type ProviderData = {
  children: ReactNode;
};

const ThemeContext = createContext<ContextData>({} as ContextData);

const ThemeProvider = ({ children }: ProviderData) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeTypes>('light');
  const theme = selectedTheme === 'light' ? light : dark;

  const toggleTheme = useCallback(
    () => setSelectedTheme(selectedTheme === 'light' ? 'dark' : 'light'),
    [selectedTheme]
  );

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
