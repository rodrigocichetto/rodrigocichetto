import { Story, Meta } from '@storybook/react/types-6-0';
import Tag from '.';

export default {
  title: 'Tag',
  component: Tag
} as Meta;

export const Default: Story = args => <Tag {...args} />;

Default.args = {
  children: 'body'
};

export const Close: Story = args => <Tag {...args} />;

Close.args = {
  children: '/body'
};

export const AutoClose: Story = args => <Tag {...args} />;

AutoClose.args = {
  children: 'img /'
};
