import { NextIntlClientProvider } from 'next-intl';
import type { StoryObj, Meta } from '@storybook/react';
import Menu from './component';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  decorators: [
    storyFn => (
      <NextIntlClientProvider locale="pt">{storyFn()}</NextIntlClientProvider>
    )
  ]
};

type Story = StoryObj<typeof Menu>;

export const Default: Story = {};
export default meta;
