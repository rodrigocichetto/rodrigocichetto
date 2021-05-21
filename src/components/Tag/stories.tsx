import { Story, Meta } from '@storybook/react/types-6-0';

import Tag, { TagProps } from '.';

export default {
  title: 'Tag',
  component: Tag
} as Meta;

export const Default: Story<TagProps> = args => <Tag {...args} />;

Default.args = {
  children: 'body'
};

export const Close: Story<TagProps> = args => <Tag {...args} />;

Close.args = {
  children: '/body'
};

export const AutoClose: Story<TagProps> = args => <Tag {...args} />;

AutoClose.args = {
  children: 'img /'
};
