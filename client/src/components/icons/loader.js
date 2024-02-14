import React from 'react';
import styled from 'styled-components/macro';
import { theme } from '../../styles';
const { colors } = theme;

const Loader = styled.div`
  margin: 0 0 2em;
  height: 100px;
  width: 50px;
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  display: inline-block;
  vertical-align: top;

  svg path,
  svg rect {
    fill: ${colors.grey};
  }
`;

const IconLoader = () => (
  <Loader>
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24px"
      height="30px"
      viewBox="0 0 24 30"
      xmlSpace="preserve">
      <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 20; 10"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 5; 10"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2">
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 20; 10"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 5; 10"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2">
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 20; 10"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 5; 10"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  </Loader>
);

export default IconLoader;

// The IconLoader component is a React functional component that renders an animated loader icon. This loader consists of three animated rectangles that move up and down with changing opacity to indicate loading activity. Here's a breakdown of its structure:

// It uses styled-components to define the styles for the loader container (Loader) and its child SVG elements.
// The Loader styled component sets the layout and styling for the loader container, including margin, height, width, text alignment, padding, and display properties.
// The IconLoader component renders the loader icon using SVG (<svg>), with three <rect> elements representing the rectangles.
// Each <rect> element has attributes for position (x and y), size (width and height), fill color (fill), and opacity (opacity). These attributes are dynamically animated using the <animate> element to create the loading animation effect.
// The animation properties (attributeName, values, begin, dur, repeatCount) define how the opacity and position of the rectangles change over time to create the loading animation.
