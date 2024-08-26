import type { StoryObj, Meta } from '@storybook/react';
import Absolute from './component';

const meta: Meta<typeof Absolute> = {
  title: 'Components/Absolute',
  component: Absolute,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  }
};

type Story = StoryObj<typeof Absolute>;

export const Default: Story = {
  args: {
    center: true
  },
  render: args => (
    <Absolute {...args}>
      <h1>Example</h1>
    </Absolute>
  )
};
export default meta;
