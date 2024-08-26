import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import Tag from '.';

describe('<Tag />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Tag>body</Tag>);

    expect(screen.getByText('<body>')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render close tag', () => {
    renderWithTheme(<Tag>/body</Tag>);

    expect(screen.getByText('</body>')).toBeInTheDocument();
  });

  it('should render auto-close tag', () => {
    renderWithTheme(<Tag>img /</Tag>);

    expect(screen.getByText('<img />')).toBeInTheDocument();
  });
});
