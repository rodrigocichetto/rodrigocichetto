import { Story, Meta } from '@storybook/react/types-6-0';

import ToggleTheme, { ToggleThemeProps } from '.';

export default {
  title: 'ToggleTheme',
  component: ToggleTheme
} as Meta;

export const Default: Story<ToggleThemeProps> = args => (
  <ToggleTheme {...args} />
);
