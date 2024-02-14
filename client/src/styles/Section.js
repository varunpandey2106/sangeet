import styled from 'styled-components/macro';
import media from './media';

const Section = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;
  min-height: 100vh;
  padding: 90px 0;
  ${media.tablet`
    padding: 0 0 90px;
    h2 {
      text-align: center;
    }
  `};
  ${media.phablet`
    padding: 0 0 20px;
  `};
`;

export default Section;


// Width: The section takes up the full width of its container.
// Margin: It has auto margins to horizontally center it within its container.
// Max Width: The maximum width of the section is set to 1400 pixels.
// Min Height: The minimum height of the section is set to 100 viewport height units (vh).
// Padding: It has vertical padding of 90 pixels and no horizontal padding by default.
// Media Queries: Media queries are used to adjust the padding for tablet and phablet (smaller mobile devices) screen sizes. For tablets, the top padding is set to 0, and the bottom padding is set to 90 pixels. Additionally, the text-align property for h2 elements within the section is set to center for tablets. For phablets, the padding is further reduced to 20 pixels at the bottom.
// The media import is likely a utility function or object that provides media query definitions for different screen sizes, allowing for responsive design.