import { Story, Meta } from '@storybook/react/types-6-0';
import Welcome, { WelcomeProps } from '.';

export default {
  title: 'Welcome',
  component: Welcome
} as Meta;

export const Default: Story<WelcomeProps> = args => <Welcome {...args} />;
