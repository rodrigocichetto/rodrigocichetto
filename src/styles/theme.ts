const defaultTheme = {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    primary: 'Lato',
    secondary: 'Indie Flower',
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      xmedium: '1.8rem',
      large: '2.0rem',
      xlarge: '2.4rem',
      xxlarge: '2.8rem'
    },
    weights: {
      light: 300,
      regular: 400,
      bold: 700
    }
  },
  colors: {
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
};

export const light = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#2C73D2',
    secondary: '#424656',
    background: '#F4F9FF',
    text: '#424656',
    menu: '#FAFAFA',
    activeTheme: '#0984e3'
  }
};

export const dark = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#ABD9FF',
    secondary: '#2c73d2',
    background: '#424656',
    text: '#FAFAFA',
    menu: '#343844',
    activeTheme: '#032b43'
  }
};

export default light;
