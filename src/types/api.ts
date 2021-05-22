import { AvailableIcons } from 'types/global';

export type SocialLinksProps = {
  icon: AvailableIcons;
  url: string;
};

export type HomePageProps = {
  picture: {
    url: string;
  };
  name: string;
  description?: string;
  role?: string;
  socialLinks?: SocialLinksProps[];
};

export type GamerPageProps = HomePageProps;
