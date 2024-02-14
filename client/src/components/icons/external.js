import React from 'react';

const IconExternal = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 194.818 194.818">
    <title>External</title>
    <g>
      <path
        d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728
                c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04
                C194.818,6.19,190.789,2.161,185.818,2.161z"
      />
      <path
        d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140
                c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"
      />
    </g>
  </svg>
);

export default IconExternal;

// It uses the <svg> element to define the SVG graphic.
// The xmlns, role, and viewBox attributes are used to specify XML namespace, accessibility role, and the coordinate system and dimensions of the viewBox respectively.
// The <title> element provides a title for the SVG, which is typically used for accessibility purposes.
// The <g> element is used to group SVG shapes together.
// There are two <path> elements inside the <g> element, each representing a different part of the icon:
// The first <path> represents an arrow pointing to the upper right direction, typically indicating an external link.
// The second <path> represents a rectangle with an arrow, typically indicating an external link or action.
// Each <path> element has a d attribute that defines the shape of the path using path data commands.