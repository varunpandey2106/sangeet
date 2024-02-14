const theme = {
  colors: {
    green: '#1DB954',
    offGreen: '#1ed760',
    blue: '#509bf5',
    navBlack: '',
    black: '#040306',
    white: '#FFFFFF',
    lightestGrey: '#b3b3b3',
    lightGrey: '#9B9B9B',
    grey: '#404040',
    darkGrey: '#282828',
  },

  fonts: {
    primary: 'Circular Std, system, -apple-system, BlinkMacSystemFont, sans-serif',
  },

  fontSizes: {
    base: `16px`,
    xs: `12px`,
    sm: `14px`,
    md: `20px`,
    lg: `24px`,
    xl: `28px`,
    xxl: `32px`,
  },

  spacing: {
    base: `20px`,
    xs: `5px`,
    sm: `10px`,
    md: `30px`,
    lg: `50px`,
    xl: `100px`,
  },

  easing: {
    easeInCubic: `cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
    easeOutCubic: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
    easeInOutCubic: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
    easeInExpo: `cubic-bezier(0.95, 0.05, 0.795, 0.035)`,
    easeOutExpo: `cubic-bezier(0.19, 1, 0.22, 1)`,
    easeInOutExpo: `cubic-bezier(0.19, 1, 0.22, 1)`,
    easeInBack: `cubic-bezier(0.6, -0.28, 0.735, 0.045)`,
    easeOutBack: `cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
    easeInOutBack: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`,
  },

  transition: `all 0.25s cubic-bezier(0.3, 0, 0.4, 1);`,

  navWidth: '100px',
  navHeight: '70px',
};

export default theme;

// Colors: Defines a set of color variables used throughout the application. These variables include shades of green, blue, black, white, and different shades of grey.

// Fonts: Specifies the primary font family used in the application. In this case, it's set to "Circular Std, system, -apple-system, BlinkMacSystemFont, sans-serif".

// Font Sizes: Defines a set of font sizes categorized by their relative scale, such as base, xs, sm, md, lg, xl, and xxl.

// Spacing: Specifies a set of spacing values used for margins, padding, and other layout-related properties. It includes values for base, xs, sm, md, lg, and xl.

// Easing: Defines a set of easing functions used for animations and transitions. These functions are specified using the cubic-bezier notation.

// Transition: Specifies the default transition property used for smooth animations. It's set to all 0.25s cubic-bezier(0.3, 0, 0.4, 1).

// Navigation Dimensions: Specifies the width and height of the navigation component. In this case, navWidth is set to "100px" and navHeight is set to "70px".

// This theme object can be imported and used throughout the application to ensure consistency in styling and theming. It allows for easy customization and maintenance of styles by centralizing theme-related values in one place.
