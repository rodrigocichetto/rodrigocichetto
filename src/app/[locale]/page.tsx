'use client';
import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

import { Absolute, Profile, Tag, ToggleTheme, Menu } from '@/components';
import { getImageUrl } from '@/utils/image';
import { SocialLink } from '@/types/global';

const socialLinks = [
  {
    icon: 'github',
    url: 'https://github.com/rodrigocichetto'
  },
  {
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/rodrigocichetto/'
  },
  {
    icon: 'medium',
    url: 'https://medium.com/@rodrigocichetto'
  },
  {
    icon: 'twitter',
    url: 'https://twitter.com/sh1betto'
  },
  {
    icon: 'instagram',
    url: 'https://www.instagram.com/shibetto/'
  }
] as SocialLink[];

// const consoleStyle = [
//   'background-image: url("https://rodrigocichetto.s3.us-east-2.amazonaws.com/console.gif")',
//   'background-size: cover',
//   'padding: 50px'
// ].join(';');

export default function Home() {
  const t = useTranslations('Home');
  const firstRender = useRef(true);

  useEffect(() => {
    if (!firstRender.current) {
      return;
    }

    console.info('hello dev %s', '🚀');
    console.info(
      'Do you want to access the storybook? %s follow the link https://rodrigocichetto.github.io/rodrigocichetto/ ',
      '📚'
    );
    // console.info('%c ', consoleStyle);

    firstRender.current = false;
  }, []);

  return (
    <>
      <Menu />
      <ToggleTheme absolute />
      <Absolute top="1rem" left="1rem">
        <Tag>body</Tag>
      </Absolute>

      <Absolute center top="45%">
        <Profile
          tag="main"
          nameTag="h1"
          picture={getImageUrl('/profile-pic.png')}
          description={t('description')}
          name="Rodrigo Cichetto"
          socialLinks={socialLinks}
          role="Software Engineer"
        />
      </Absolute>

      <Absolute bottom="1rem" left="1rem">
        <Tag>/body</Tag>
      </Absolute>
    </>
  );
}
