import { Story, Meta } from '@storybook/react/types-6-0';

import Text, { TextProps } from '.';

export default {
  title: 'Text',
  component: Text
} as Meta;

export const Default: Story<TextProps> = args => <Text {...args}>Example</Text>;

export const Title: Story<TextProps> = args => (
  <Text {...args} tag="h1">
    Example
  </Text>
);

Title.args = {
  size: 'xxlarge',
  weight: 'bold'
};

export const Span: Story<TextProps> = args => (
  <Text {...args} tag="span">
    Example
  </Text>
);

export const Secondary: Story<TextProps> = args => (
  <Text {...args} family="secondary">
    Example
  </Text>
);
