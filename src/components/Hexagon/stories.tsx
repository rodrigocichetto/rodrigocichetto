import { Story, Meta } from '@storybook/react/types-6-0';
import Hexagon from '.';

export default {
  title: 'Hexagon',
  component: Hexagon
} as Meta;

export const Default: Story = args => <Hexagon icon={args.icon} {...args} />;

Default.args = {
  icon: 'github'
};
