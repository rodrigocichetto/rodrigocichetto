import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import theme from '@/styles/theme';

import Icon from '.';

describe('<Icon />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <Icon icon="instagram" size="small" color="primary" />
    );

    expect(container.firstChild).toHaveStyle({
      color: theme.colors.primary,
      fontSize: theme.font.sizes.small
    });

    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(screen.getByLabelText(/instagram/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
