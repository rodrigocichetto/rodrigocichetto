import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faMediumM,
  faInstagram,
  faSteam,
  faTwitch,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact
} from '@fortawesome/free-brands-svg-icons';

import { faUser } from '@fortawesome/free-regular-svg-icons';

import { ThemeFontSizes, ThemeColors } from 'types/global';

import * as S from './styles';

const icons = {
  github: faGithub,
  linkedin: faLinkedinIn,
  twitter: faTwitter,
  medium: faMediumM,
  instagram: faInstagram,
  steam: faSteam,
  twitch: faTwitch,
  html5: faHtml5,
  css3: faCss3Alt,
  js: faJs,
  react: faReact,
  user: faUser
};

export type AvailableIcons = keyof typeof icons;

export type IconProps = {
  size?: ThemeFontSizes;
  color?: ThemeColors;
  icon: AvailableIcons;
};

const Icon = ({ icon, color = 'text', size = 'large' }: IconProps) => (
  <S.Wrapper size={size} color={color}>
    <FontAwesomeIcon icon={icons[icon]} size="1x" />
  </S.Wrapper>
);

export default Icon;
