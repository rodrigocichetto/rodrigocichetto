import { Story, Meta } from '@storybook/react/types-6-0';
import ProfilePicture from '.';

export default {
  title: 'ProfilePicture',
  component: ProfilePicture
} as Meta;

export const Default: Story = args => (
  <ProfilePicture src={args.src} {...args} />
);

Default.args = {
  src: '/img/profile-pic.png'
};

export const WithCircleImage: Story = args => (
  <ProfilePicture src={args.src} {...args} />
);

WithCircleImage.args = {
  src: '/img/profile-pic.png',
  background: '/img/profile-bg.png'
};
