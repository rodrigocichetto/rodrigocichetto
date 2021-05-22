import { Story, Meta } from '@storybook/react/types-6-0';

import { Hexagon } from 'components';

import Absolute, { AbsoluteProps } from '.';

export default {
  title: 'Absolute',
  component: Absolute
} as Meta;

export const Default: Story<AbsoluteProps> = args => <Absolute {...args} />;

Default.args = {
  center: true,
  children: <Hexagon icon="cs" />
};
