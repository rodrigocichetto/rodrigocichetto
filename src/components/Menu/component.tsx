import { Icon } from '@/components';
import { AvailableIcons } from '@/components/Icon';
import { usePathname, Link } from '@/navigation';

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
  const pathname = usePathname();

  return (
    <S.Wrapper>
      {PAGES.map(page => (
        <S.LinkWrapper key={page.path} active={pathname === page.path}>
          <Link href={page.path} passHref>
            <Icon size="xxlarge" icon={page.icon} />
          </Link>
        </S.LinkWrapper>
      ))}
    </S.Wrapper>
  );
};

Menu.displayName = 'Menu';

export default Menu;
