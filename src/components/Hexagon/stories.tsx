import { Story, Meta } from '@storybook/react/types-6-0';
import Hexagon, { HexagonProps } from '.';

export default {
  title: 'Hexagon',
  component: Hexagon
} as Meta;

export const Default: Story<HexagonProps> = args => <Hexagon {...args} />;

Default.args = {
  icon: 'github'
};
