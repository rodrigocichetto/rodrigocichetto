import { renderWithTheme } from 'utils/tests/helpers';

import Welcome from '.';

describe('<Welcome />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Welcome />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
