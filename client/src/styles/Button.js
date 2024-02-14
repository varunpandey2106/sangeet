import styled from 'styled-components/macro';
import theme from './theme';
const { fontSizes } = theme;

const Button = styled.button`
  font-size: ${fontSizes.base};
  cursor: pointer;
  border: 0;
  border-radius: 0;
  transition: ${theme.transition};
  &:focus,
  &:active {
    outline: 0;
  }
`;

export default Button;



// font-size: Sets the font size to the base font size defined in the theme.
// cursor: Sets the cursor to pointer to indicate interactivity.
// border: Removes the default button border.
// border-radius: Sets the border radius to 0 to remove any rounded corners.
// transition: Applies a transition effect defined in the theme to provide smooth transitions for properties that change over time.
// &:focus, &:active: Defines styles for the button when it's focused or active (clicked).
// outline: Removes the default focus outline.