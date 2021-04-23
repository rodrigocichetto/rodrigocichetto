import { fireEvent } from '@testing-library/react';

import theme from 'styles/theme';

import { renderWithTheme } from 'utils/tests/helpers';

import ToggleTheme from '.';

describe('<ToggleTheme />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<ToggleTheme />);

    expect(container.firstChild).toHaveStyle({
      backgroundColor: '#0984e3'
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should toggle content', () => {
    const { container } = renderWithTheme(<ToggleTheme />);

    fireEvent.click(container.firstChild!);

    expect(container.firstChild).toHaveStyle({
      backgroundColor: '#032b43'
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
