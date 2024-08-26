import type { StoryObj, Meta } from '@storybook/react';
import Profile from './component';

const meta: Meta<typeof Profile> = {
  title: 'Components/Profile',
  component: Profile,
  tags: ['autodocs']
};

type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  args: {
    picture:
      'https://rodrigocichetto.s3.us-east-2.amazonaws.com/IMG_0286-SQUARE-ZOOM_OUT.png',
    name: 'Rodrigo Cichetto',
    role: 'Software Engineer',
    tag: 'main',
    nameTag: 'h1',
    socialLinks: [
      {
        icon: 'github',
        url: '#'
      },
      {
        icon: 'linkedin',
        url: '#'
      },
      {
        icon: 'twitter',
        url: '#'
      },
      {
        icon: 'medium',
        url: '#'
      },
      {
        icon: 'instagram',
        url: '#'
      }
    ]
  }
};
export default meta;
