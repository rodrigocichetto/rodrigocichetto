import type { StoryObj, Meta } from '@storybook/react';
import Welcome from './component';

const meta: Meta<typeof Welcome> = {
  title: 'Components/Welcome',
  component: Welcome,
  tags: ['autodocs']
};

type Story = StoryObj<typeof Welcome>;

export const Default: Story = {};
export default meta;
