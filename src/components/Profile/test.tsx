import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import Profile, { ProfileProps } from '.';

const initialProps = {
  picture: '/img/profile-pic.png',
  name: 'Rodrigo Cichetto',
  description: 'Descrição',
  role: 'Dev. Front-End',
  tag: 'main',
  nameTag: 'h1',
  socialLinks: [
    {
      icon: 'github',
      url: '#'
    },
    {
      icon: 'linkedin',
      url: '#'
    }
  ]
} as ProfileProps;

describe('<Profile />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Profile {...initialProps} />);

    expect(
      screen.getByRole('heading', { name: initialProps.name })
    ).toBeInTheDocument();

    expect(screen.getByText(initialProps.role!)).toBeInTheDocument();

    expect(screen.getByText(initialProps.description!)).toBeInTheDocument();

    expect(screen.getByLabelText(/github/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render as gamer', () => {
    const { container } = renderWithTheme(<Profile {...initialProps} gamer />);

    expect(
      screen.getByRole('heading', { name: initialProps.name })
    ).toBeInTheDocument();

    expect(
      container.querySelectorAll('svg[aria-label="hexagon-gamer"]').length
    ).toEqual(initialProps?.socialLinks?.length);
    expect(
      container.querySelector('span[color="gamerProfileBackground"]')
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
