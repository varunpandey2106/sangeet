import React from 'react';

const ScrollToTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return children;
};

export default ScrollToTop;

// Functional Component:

// ScrollToTop is a functional component that takes two props: children and location.
// The children prop represents the child elements passed to this component.
// The location prop represents the location object provided by a router (e.g., React Router). It contains information about the current URL location.
// Effect with React.useEffect:

// The React.useEffect hook is used to perform side effects in functional components.
// It takes a callback function as its first argument, which will be executed after the component has been rendered.
// The callback function in this useEffect scrolls the window to the top (window.scrollTo(0, 0)). This effectively scrolls the page to the top whenever this component is rendered.
// The second argument of useEffect is an array of dependencies. In this case, the effect is dependent on the location.pathname, meaning it will be triggered whenever the location.pathname changes.
// Return Statement:

// The component returns children. This allows the component to wrap other components and render their children.