import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import theme from 'styles/theme';

import Text from '.';

describe('<Text />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Text>Example text</Text>);

    expect(container.querySelector('p')).toBeInTheDocument();
    expect(screen.getByText('Example text')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with a different tag', () => {
    const { container } = renderWithTheme(<Text tag="h1">Example title</Text>);

    expect(container.querySelector('h1')).toHaveTextContent('Example title');
  });

  it('should render with secondary family font', () => {
    renderWithTheme(<Text family="secondary">Example text</Text>);

    expect(screen.getByText('Example text')).toHaveStyle({
      fontFamily: theme.font.secondary
    });
  });

  it('should render with a different color', () => {
    renderWithTheme(<Text color="primary">Example text</Text>);

    expect(screen.getByText('Example text')).toHaveStyle({
      color: theme.colors.primary
    });
  });

  it('should render with a different size', () => {
    renderWithTheme(<Text size="small">Example text</Text>);

    expect(screen.getByText('Example text')).toHaveStyle({
      fontSize: theme.font.sizes.small
    });
  });

  it('should render with a different weight', () => {
    renderWithTheme(<Text weight="bold">Example text</Text>);

    expect(screen.getByText('Example text')).toHaveStyle({
      fontWeight: theme.font.weights.bold
    });
  });
});
