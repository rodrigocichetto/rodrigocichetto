import { addDecorator } from '@storybook/react';
import { withNextRouter } from 'storybook-addon-next-router';

import GlobalStyles from 'styles/global';
import { ThemeProvider } from 'context/ThemeContext';

addDecorator(withNextRouter());

export const decorators = [
  Story => (
    <ThemeProvider>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
];
