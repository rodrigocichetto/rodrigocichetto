import React from 'react';
import type { Preview } from '@storybook/react';

import GlobalStyles from '../src/styles/global';
import { ThemeProvider } from '../src/context/theme';

const preview: Preview = {
  decorators: [
    Story => {
      return (
        <ThemeProvider>
          <GlobalStyles />
          <Story />
        </ThemeProvider>
      );
    }
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
