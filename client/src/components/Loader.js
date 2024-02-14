import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { theme, mixins } from '../styles';
const { colors } = theme;

const Container = styled.div`
  ${mixins.flexCenter};
  width: 100%;
  height: 90vh;
`;
const dance = keyframes`
  from {
    height: 10px;
  }
  to {
    height: 100%;
  }
`;
const Bars = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  width: 100px;
  min-width: 100px;
  height: 50px;
  margin: 0 auto;
  z-index: 2;
  position: relative;
  left: 0;
  right: 0;
`;
const Bar = styled.div`
  width: 10px;
  height: 5px;
  margin: 0 2px;
  background-color: ${colors.grey};
  animation-name: ${dance};
  animation-duration: 400ms;
  animation-play-state: running;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-delay: ${props => props.delay || '0ms'};
`;

const Loader = () => (
  <Container>
    <Bars>
      <Bar delay="250ms" />
      <Bar delay="715ms" />
      <Bar delay="475ms" />
      <Bar delay="25ms" />
      <Bar delay="190ms" />
    </Bars>
  </Container>
);

export default Loader;



// Imports:

// React: The React library is imported to define React components.
// styled and keyframes from styled-components/macro: These are used to create styled components and keyframe animations respectively.
// theme and mixins from '../styles': These are used to access theme variables and mixins for styling.
// Styled Components:

// Container: This styled component sets the styles for a container div. It uses mixins.flexCenter to horizontally and vertically center its children. It has a width of 100% and a height of 90vh.
// dance: This keyframe animation gradually increases the height of an element from 10px to 100%.
// Bars: This styled component represents a container for the loading bars. It displays its children (loading bars) as a flex container, aligns them to the bottom, and hides any overflow. It has a fixed width and height and is horizontally centered using margins and positioning.
// Bar: This styled component represents an individual loading bar. It has a fixed width and height, margin, and background color. It uses the dance animation to create a pulsating effect on the loading bars. The delay prop is used to specify a delay for each bar's animation.
// Loader Component:

// The Loader component renders a Container component that wraps a Bars component.
// Inside the Bars component, there are five Bar components, each with a different delay specified using the delay prop. These bars create the visual loading animation.
// Export:

// The Loader component is exported as the default export of this module.
// Overall, this code creates a simple loading animation using styled-components and keyframe animations in React. The animation consists of five pulsating loading bars displayed vertically within a container.


//  there are a total of 7 div elements:

// Container component:

// Represents a container div.
// This div wraps the entire loading animation.
// Bars component:

// Represents a container div.
// This div wraps the loading bars.
// Bar components (5 instances):

// Each represents an individual loading bar and is wrapped in the Bars component.
// There are 5 Bar components, each creating a single loading bar.