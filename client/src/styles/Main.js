import styled from 'styled-components/macro';
import media from './media';

const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;
  min-height: 100vh;
  padding: 80px;
  ${media.desktop`
    padding: 60px 50px;
  `};
  ${media.tablet`
    padding: 50px 40px;
  `};
  ${media.phablet`
    padding: 30px 25px;
  `};
  h2 {
    ${media.tablet`
      text-align: center;
    `};
  }
`;

export default Main;


// width: 100%;: Makes the main content area take up the full width of its container.
// margin: 0 auto;: Centers the main content area horizontally within its container.
// max-width: 1400px;: Sets the maximum width of the main content area to 1400px.
// min-height: 100vh;: Sets the minimum height of the main content area to be equal to the viewport height, ensuring it fills the screen vertically.
// padding: 80px;: Applies 80px of padding to the main content area by default.
// `${media.desktop``: Overrides the padding to 60px on the top and bottom and 50px on the left and right when the screen width is at least the desktop size.
// `${media.tablet``: Overrides the padding to 50px on the top and bottom and 40px on the left and right when the screen width is at least the tablet size.
// `${media.phablet``: Overrides the padding to 30px on the top and bottom and 25px on the left and right when the screen width is at least the phablet size.
// h2 { ... }: Applies additional styling to h2 elements within the main content area, such as centering the text when the screen width is at least the tablet size.