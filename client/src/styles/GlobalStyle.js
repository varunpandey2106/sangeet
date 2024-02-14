import { createGlobalStyle } from 'styled-components/macro';
import theme from './theme';
const { colors, fontSizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Medium'), local('CircularStd-Medium'),
    url('../fonts/CircularStd-Medium.woff2') format('woff2'),
    url('../fonts/CircularStd-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Book'), local('CircularStd-Book'),
    url('../fonts/CircularStd-Book.woff2') format('woff2'),
    url('../fonts/CircularStd-Book.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Medium Italic'), local('CircularStd-MediumItalic'),
    url('../fonts/CircularStd-MediumItalic.woff2') format('woff2'),
    url('../fonts/CircularStd-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Black'), local('CircularStd-Black'),
    url('../fonts/CircularStd-Black.woff2') format('woff2'),
    url('../fonts/CircularStd-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Bold'), local('CircularStd-Bold'),
    url('../fonts/CircularStd-Bold.woff2') format('woff2'),
    url('../fonts/CircularStd-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Bold Italic'), local('CircularStd-BoldItalic'),
    url('../fonts/CircularStd-BoldItalic.woff2') format('woff2'),
    url('../fonts/CircularStd-BoldItalic.woff') format('woff');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Book Italic'), local('CircularStd-BookItalic'),
    url('../fonts/CircularStd-BookItalic.woff2') format('woff2'),
    url('../fonts/CircularStd-BookItalic.woff') format('woff');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Black Italic'), local('CircularStd-BlackItalic'),
    url('../fonts/CircularStd-BlackItalic.woff2') format('woff2'),
    url('../fonts/CircularStd-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
  }

  body {
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: ${fonts.primary};
    font-size: ${fontSizes.base};
    background-color: ${colors.black};
    color: ${colors.white};
  }

  #root {
    min-height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: -.025em;
    margin: 0 0 10px;
    font-weight: 700;
  }

  h1, h2, h3 {
    font-weight: 900;
  }

  p {
    margin: 0 0 10px;
  }

  ol, ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    transition: ${theme.transition};
    cursor: pointer;
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    fill: currentColor;
    vertical-align: middle;
  }

  input {
    border-radius: 0;
    outline: 0;
    &::placeholder {
      opacity: 0.7;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  button {
    display: inline-block;
    color: ${colors.lightestGrey};
    font-family: ${fonts.primary};
    font-size: ${fontSizes.base};
    font-weight: 700;
    border-radius: 50px;
    border: 0;
    padding: 10px 20px;
    cursor: pointer;
    transition: ${theme.transition};

    &:hover,
    &:focus {
      color: ${colors.white};
      outline: 0;
    }
  }
`;

export default GlobalStyle;


// html: Sets the box-sizing property to border-box for all elements.
// *, *:before, *:after: Inherits the box-sizing property set on the html element.
// body: Sets styles for the body element including margin, padding, width, max-width, min-height, overflow-x, font-family, font-size, background-color, and color.
// #root: Sets the min-height property to 100%.
// Headings (h1 to h6): Sets styles for headings including letter-spacing, margin, and font-weight.
// p: Sets margin for paragraphs.
// Lists (ol, ul): Removes default padding and margin and sets list-style to none.
// a: Sets styles for anchor tags including display, text-decoration, color, transition, and cursor.
// img: Sets styles for images including width, max-width, and vertical-align.
// svg: Sets the fill property to currentColor and vertical-align property to middle.
// input: Sets styles for input elements including border-radius, outline, and placeholder opacity.
// button: Sets styles for button elements including display, color, font-family, font-size, font-weight, border-radius, border, padding, cursor, and transition.