import { renderWithTheme } from '@/utils/tests/helpers';

import Absolute from './component';

describe('<Absolute />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Absolute>Example</Absolute>);

    expect(container.firstChild).toHaveStyle({
      position: 'absolute'
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render in center view', () => {
    const { container } = renderWithTheme(<Absolute center>Example</Absolute>);

    expect(container.firstChild).toHaveStyle({
      top: '50%',
      left: '50%'
    });
  });

  it('should render with custom position view', () => {
    const { container } = renderWithTheme(
      <Absolute top="1rem" right="1rem" bottom="1rem" left="1rem">
        Example
      </Absolute>
    );

    expect(container.firstChild).toHaveStyle({
      top: '1rem',
      right: '1rem',
      bottom: '1rem',
      left: '1rem'
    });
  });
});
