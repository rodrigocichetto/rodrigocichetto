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
  src:
    'https://rodrigocichetto.s3.us-east-2.amazonaws.com/IMG_0286-SQUARE-ZOOM_OUT.png'
};

export const WithCircleImage: Story<ProfilePictureProps> = args => (
  <ProfilePicture {...args} />
);

WithCircleImage.args = {
  src:
    'https://rodrigocichetto.s3.us-east-2.amazonaws.com/IMG_0286-SQUARE-ZOOM_OUT.png',
  background:
    'https://rodrigocichetto.s3.us-east-2.amazonaws.com/profile-bg.png'
};
