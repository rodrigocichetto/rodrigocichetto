'use client';
import { Absolute, Profile, ToggleTheme, Menu } from '@/components';
import { getImageUrl } from '@/utils/image';
import { SocialLink } from '@/types/global';

const socialLinks = [
  {
    icon: 'steam',
    url: 'https://steamcommunity.com/id/sh1betto/'
  },
  {
    icon: 'cs',
    url: 'https://gamersclub.com.br/jogador/1279827'
  },
  {
    icon: 'twitch',
    url: 'https://www.twitch.tv/sh1betto'
  }
] as SocialLink[];

export default function Gamer() {
  return (
    <>
      <Menu />
      <ToggleTheme absolute />

      <Absolute center top="45%">
        <Profile
          picture={getImageUrl('/profile-gamer.png')}
          name="sh1betto"
          socialLinks={socialLinks}
          gamer
        />
      </Absolute>
    </>
  );
}
