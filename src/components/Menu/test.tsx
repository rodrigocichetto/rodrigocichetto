import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Menu from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    router: {
      pathname: '/'
    }
  }))
}));

describe('<Menu />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/user/i)).toBeInTheDocument();
    expect(container.querySelector('a[href="/"]')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
