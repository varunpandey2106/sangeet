import React from 'react';

const IconMusic = () => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 489.164 489.164"
    xmlSpace="preserve">
    <path d="M159.582,75.459v285.32c-14.274-10.374-32.573-16.616-52.5-16.616c-45.491,0-82.5,32.523-82.5,72.5s37.009,72.5,82.5,72.5 s82.5-32.523,82.5-72.5V168.942l245-60.615v184.416c-14.274-10.374-32.573-16.616-52.5-16.616c-45.491,0-82.5,32.523-82.5,72.5 s37.009,72.5,82.5,72.5s82.5-32.523,82.5-72.5V0L159.582,75.459z" />
  </svg>
);

export default IconMusic;

// The IconMusic component is a React functional component that renders a music icon using SVG. Here's a breakdown of its structure:

// The component returns an SVG element (<svg>) with the required attributes for displaying the music icon.
// The SVG element has a viewBox attribute that defines the coordinate system and aspect ratio for the icon.
// Inside the SVG element, there is a single <path> element:
// The <path> element defines the shape of the music note using the d attribute, which contains a series of path commands.
// Here's a breakdown of the d attribute of the <path> element:

// The d attribute contains a series of commands and parameters that define the path of the music note.
// Each command represents a different type of path segment (e.g., line, curve).
// The M command specifies a move-to operation, which moves the pen to the specified coordinates without drawing a line.
// The v command specifies a vertical line segment relative to the current pen position.
// The l command specifies a line segment relative to the current pen position.
// The z command specifies a close-path operation, which closes the current subpath by drawing a straight line to the starting point.
