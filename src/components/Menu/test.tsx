import { renderWithTheme } from 'utils/tests/helpers';

import Menu from '.';

describe('<Menu />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Menu />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
