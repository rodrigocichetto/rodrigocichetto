import theme from '@/styles/theme';

import { renderWithTheme } from '@/utils/tests/helpers';

import ProfilePicture from '.';

describe('<ProfilePicture />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<ProfilePicture src="/teste" />);

    expect(container.querySelector('img')?.src).toContain('/teste');
    expect(container.querySelector('span')).toHaveStyle({
      backgroundColor: theme.colors.menu
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with different color', () => {
    const { container } = renderWithTheme(
      <ProfilePicture src="/teste" color="primary" />
    );

    expect(container.querySelector(`span`)).toHaveStyle({
      backgroundColor: theme.colors.primary
    });
  });

  it('should render with different background', () => {
    const { container } = renderWithTheme(
      <ProfilePicture src="/teste" background="/teste-bg" />
    );

    expect(container.querySelector(`span`)).toHaveStyle({
      backgroundImage: `url('/teste-bg')`,
      backgroundPosition: 'center center'
    });
  });
});
