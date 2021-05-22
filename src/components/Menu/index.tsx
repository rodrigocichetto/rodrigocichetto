import { useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Icon } from 'components';
import { AvailableIcons } from 'components/Icon';

import * as S from './styles';

export type MenuPage = {
  path: string;
  icon: AvailableIcons;
  label: string;
};

export const PAGES: MenuPage[] = [
  // {
  //   path: '/xp',
  //   icon: 'xp',
  //   label: 'Experiência'
  // },
  {
    path: '/',
    icon: 'user',
    label: 'Home'
  },
  {
    path: '/gamer',
    icon: 'gamer',
    label: 'Gamer'
  }
];

const Menu = () => {
  const router = useRouter();

  const isActive = useCallback((path: string) => router.pathname === path, [
    router.pathname
  ]);

  return (
    <S.Wrapper>
      {PAGES.map(page => (
        <S.LinkWrapper key={page.path} active={isActive(page.path)}>
          <Link href={page.path} passHref>
            <a>
              <Icon size="xxlarge" icon={page.icon} />
            </a>
          </Link>
        </S.LinkWrapper>
      ))}
    </S.Wrapper>
  );
};

export default Menu;
