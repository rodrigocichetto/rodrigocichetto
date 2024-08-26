import type { StoryObj, Meta } from '@storybook/react';
import Tag from './component';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs']
};

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  render: args => <Tag {...args}>body</Tag>
};

export const Close: Story = {
  render: args => <Tag {...args}>/body</Tag>
};

export const AutoClose: Story = {
  render: args => <Tag {...args}>img /</Tag>
};
export default meta;
