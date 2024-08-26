import type { StoryObj, Meta } from '@storybook/react';
import Text from './component';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs']
};

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: args => <Text {...args}>Example</Text>
};

export const Title: Story = {
  args: {
    tag: 'h1',
    size: 'xxlarge',
    weight: 'bold'
  },
  render: args => <Text {...args}>Example</Text>
};

export const Span: Story = {
  args: {
    tag: 'span'
  },
  render: args => <Text {...args}>Example</Text>
};

export const Secondary: Story = {
  args: {
    family: 'secondary'
  },
  render: args => <Text {...args}>Example</Text>
};
export default meta;
