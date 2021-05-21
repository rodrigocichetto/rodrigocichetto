import { Story, Meta } from '@storybook/react/types-6-0';

import ProfilePicture, { ProfilePictureProps } from '.';

export default {
  title: 'ProfilePicture',
  component: ProfilePicture
} as Meta;

export const Default: Story<ProfilePictureProps> = args => (
  <ProfilePicture {...args} />
);

Default.args = {
  src: '/img/profile-pic.png'
};

export const WithCircleImage: Story<ProfilePictureProps> = args => (
  <ProfilePicture {...args} />
);

WithCircleImage.args = {
  src: '/img/profile-pic.png',
  background: '/img/profile-bg.png'
};
