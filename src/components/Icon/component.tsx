import { forwardRef } from 'react';
import { Linkedin, Twitter, Instagram } from '@styled-icons/entypo-social';
import {
  Github,
  Medium,
  Twitch,
  Html5,
  Css3,
  Javascript,
  ReactLogo
} from '@styled-icons/boxicons-logos';
import { Steam } from '@styled-icons/fa-brands';
import { User } from '@styled-icons/fa-regular';
import { Counterstrike } from '@styled-icons/simple-icons';
import { GameController } from '@styled-icons/ionicons-outline';
import { Sword } from '@styled-icons/remix-line';
import { ThemeFontSizes, ThemeColors } from '@/types/global';

import * as S from './styles';

const icons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  medium: Medium,
  instagram: Instagram,
  steam: Steam,
  twitch: Twitch,
  html5: Html5,
  css3: Css3,
  js: Javascript,
  react: ReactLogo,
  user: User,
  cs: Counterstrike,
  xp: Sword,
  gamer: GameController
};

export type AvailableIcons = keyof typeof icons;

export type IconProps = {
  size?: ThemeFontSizes;
  color?: ThemeColors;
  icon: AvailableIcons;
};

const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ icon, color = 'text', size = 'large' }, ref) => {
    const ContentIcon = icons[icon];

    return (
      <S.Wrapper ref={ref} size={size} color={color}>
        <ContentIcon aria-label={icon} />
      </S.Wrapper>
    );
  }
);

Icon.displayName = 'Icon';

export default Icon;
