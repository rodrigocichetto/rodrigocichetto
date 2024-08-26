import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Hexagon from './component';

const meta: Meta<typeof Hexagon> = {
  title: 'Components/Hexagon',
  component: Hexagon,
  tags: ['autodocs'],
  render: args => <Hexagon {...args} />
};

type Story = StoryObj<typeof Hexagon>;

export const Default: Story = {
  args: {
    icon: 'github'
  }
};
export default meta;
