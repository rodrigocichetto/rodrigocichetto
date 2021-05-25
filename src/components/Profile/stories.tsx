import { Story, Meta } from '@storybook/react/types-6-0';

import Profile, { ProfileProps } from '.';

export default {
  title: 'Profile',
  component: Profile
} as Meta;

export const Default: Story<ProfileProps> = args => <Profile {...args} />;

Default.args = {
  picture:
    'https://rodrigocichetto.s3.us-east-2.amazonaws.com/IMG_0286-SQUARE-ZOOM_OUT.png',
  name: 'Rodrigo Cichetto',
  role: 'Dev. Front-End',
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
};
