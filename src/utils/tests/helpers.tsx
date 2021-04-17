import { ReactNode } from 'react';
import { render, RenderResult } from '@testing-library/react';

import { ThemeProvider } from 'context/ThemeContext';

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ThemeProvider>{children}</ThemeProvider>);
