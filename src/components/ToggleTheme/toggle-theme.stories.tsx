import type { StoryObj, Meta } from '@storybook/react';
import ToggleTheme from './component';

const meta: Meta<typeof ToggleTheme> = {
  title: 'Components/ToggleTheme',
  component: ToggleTheme,
  tags: ['autodocs']
};

type Story = StoryObj<typeof ToggleTheme>;

export const Default: Story = {};
export default meta;
