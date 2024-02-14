import { css } from 'styled-components';

const sizes = {
  giant: 1440,
  desktop: 1200,
  netbook: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default media;


// sizes Object: This object contains named sizes with their corresponding pixel values. Each size represents a different screen width breakpoint.

// media Object Creation: The Object.keys(sizes).reduce() function iterates over the keys of the sizes object and creates a new object (media) with media query templates for each size.

// Media Query Template: For each size, a media query template is created using the css function from styled-components. The media query targets screens with a maximum width equal to the size in em units. Inside the media query, the provided CSS rules are interpolated using the spread operator (...args). This allows for the inclusion of any CSS rules when using the media query template.

// Usage: To use these media query templates, you can import the media object and call the corresponding size as a function, passing in the CSS rules as arguments. For example: