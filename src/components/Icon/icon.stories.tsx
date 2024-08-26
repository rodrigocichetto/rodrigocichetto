import type { StoryObj, Meta } from '@storybook/react';
import Icon from './component';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  render: args => <Icon {...args} />
};

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: 'github',
    color: 'primary'
  }
};
export default meta;
