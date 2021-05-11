import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { useCallback } from 'react';

import { Icon } from 'components';
import { AvailableIcons } from 'components/Icon';

import * as S from './styles';

export type MenuPage = {
  path: string;
  icon: AvailableIcons;
  label: string;
};

export const PAGES: MenuPage[] = [
  {
    path: '/',
    icon: 'user',
    label: 'Home'
  },
  {
    path: '/gamer',
    icon: 'user',
    label: 'Home'
  }
];

const Menu = () => {
  // const router = useRouter();

  // const isActive = useCallback((path: string) => router.pathname === path, [
  //   router.pathname
  // ]);

  return (
    <S.Wrapper>
      {PAGES.map(page => (
        <Link key={page.path} href={page.path}>
          <Icon icon={page.icon} />
        </Link>
      ))}
    </S.Wrapper>
  );
};

export default Menu;
