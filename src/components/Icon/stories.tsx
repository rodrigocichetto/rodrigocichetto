import { Story, Meta } from '@storybook/react/types-6-0';
import Icon from '.';

export default {
  title: 'Icon',
  component: Icon
} as Meta;

export const Default: Story = args => <Icon {...args} icon={args.icon} />;

Default.args = {
  icon: 'github'
};
