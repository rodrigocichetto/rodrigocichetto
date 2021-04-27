import theme from 'styles/theme';

import { renderWithTheme } from 'utils/tests/helpers';

import Hexagon from '.';

describe('<Hexagon />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Hexagon icon="github" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with a different color', () => {
    const { container } = renderWithTheme(
      <Hexagon icon="github" color="secondary" background="primary" />
    );

    expect(container.firstChild).toHaveStyle({
      color: theme.colors.primary
    });
  });
});
