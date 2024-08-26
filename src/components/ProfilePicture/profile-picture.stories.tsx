import type { StoryObj, Meta } from '@storybook/react';
import ProfilePicture from './component';

const meta: Meta<typeof ProfilePicture> = {
  title: 'Components/ProfilePicture',
  component: ProfilePicture,
  tags: ['autodocs']
};

type Story = StoryObj<typeof ProfilePicture>;

export const Default: Story = {
  args: {
    src: 'https://rodrigocichetto.s3.us-east-2.amazonaws.com/IMG_0286-SQUARE-ZOOM_OUT.png'
  }
};

export const WithCircleImage: Story = {
  args: {
    src: 'https://rodrigocichetto.s3.us-east-2.amazonaws.com/IMG_0286-SQUARE-ZOOM_OUT.png',
    background:
      'https://rodrigocichetto.s3.us-east-2.amazonaws.com/profile-bg.png'
  }
};
export default meta;
