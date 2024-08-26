import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import Hexagon from '.';

describe('<Hexagon />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Hexagon icon="github" />);

    expect(screen.getByLabelText(/hexagon/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with a different color', () => {
    renderWithTheme(
      <Hexagon icon="github" color="secondary" background="primary" />
    );

    expect(screen.getByLabelText(/github/i).parentElement).toHaveAttribute(
      'color',
      'secondary'
    );
  });

  it('should render as gamer', () => {
    const { container } = renderWithTheme(<Hexagon icon="github" gamer />);

    expect(screen.getByLabelText(/hexagon-gamer/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
