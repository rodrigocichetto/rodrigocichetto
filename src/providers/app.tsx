'use client';
import { ThemeProvider } from '@/context/theme';
import GlobalStyles from '@/styles/global';

type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
}
