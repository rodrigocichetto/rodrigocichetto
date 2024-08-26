import { fireEvent } from '@testing-library/react';

import theme, { light } from '@/styles/theme';

import { renderWithTheme } from '@/utils/tests/helpers';

import ToggleTheme from '.';

describe('<ToggleTheme />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<ToggleTheme />);

    expect(container.firstChild).toHaveStyle({
      backgroundColor: theme.colors.activeTheme
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should toggle content', () => {
    const { container } = renderWithTheme(<ToggleTheme />);

    fireEvent.click(container.firstChild!);

    expect(container.firstChild).toHaveStyle({
      backgroundColor: light.colors.activeTheme
    });
  });

  it('should render with absolute position', () => {
    const { container } = renderWithTheme(<ToggleTheme absolute />);

    expect(container.firstChild).toHaveStyle({
      position: 'absolute',
      top: theme.spacings.small,
      right: theme.spacings.small
    });
  });
});
