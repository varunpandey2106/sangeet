import React from 'react';
import { Link } from '@reach/router';

import {
  IconSpotify,
  IconUser,
  IconTime,
  IconMicrophone,
  IconPlaylist,
  IconMusic,
  IconGithub,
} from './icons';

import styled from 'styled-components/macro';
import { theme, mixins, media } from '../styles';
const { colors } = theme;

const Container = styled.nav`
  ${mixins.coverShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: ${theme.navWidth};
  background-color: ${colors.navBlack};
  text-align: center;
  z-index: 99;
  ${media.tablet`
    top: auto;
    bottom: 0;
    right: 0;
    width: 100%;
    min-height: ${theme.navHeight};
    height: ${theme.navHeight};
    flex-direction: row;
  `};
  & > * {
    width: 100%;
    ${media.tablet`
      height: 100%;
    `};
  }
`;
const Logo = styled.div`
  color: ${colors.green};
  margin-top: 30px;
  width: 70px;
  height: 70px;
  transition: ${theme.transition};
  ${media.tablet`
    display: none;
  `};
  &:hover,
  &:focus {
    color: ${colors.offGreen};
  }
  svg {
    width: 50px;
  }
`;
const Github = styled.div`
  color: ${colors.lightGrey};
  width: 45px;
  height: 45px;
  margin-bottom: 30px;
  ${media.tablet`
    display: none;
  `};
  a {
    &:hover,
    &:focus,
    &.active {
      color: ${colors.green};
    }
    svg {
      width: 30px;
    }
  }
`;
const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  ${media.tablet`
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
  `};
`;
const MenuItem = styled.li`
  color: ${colors.lightGrey};
  font-size: 11px;
  ${media.tablet`
    flex-grow: 1;
    flex-basis: 100%;
    height: 100%;
  `};
  a {
    display: block;
    padding: 15px 0;
    border-left: 5px solid transparent;
    width: 100%;
    height: 100%;
    ${media.tablet`
      ${mixins.flexCenter};
      flex-direction: column;
      padding: 0;
      border-left: 0;
      border-top: 3px solid transparent;
    `};
    &:hover,
    &:focus,
    &.active {
      color: ${colors.white};
      background-color: ${colors.black};
      border-left: 5px solid ${colors.green};
      ${media.tablet`
        border-left: 0;
        border-top: 3px solid ${colors.offGreen};
      `};
    }
  }
  svg {
    width: 20px;
    height: 20px;
    margin-bottom: 7px;
  }
`;

const isActive = ({ isCurrent }) => (isCurrent ? { className: 'active' } : null);

const NavLink = props => <Link getProps={isActive} {...props} />;

const Nav = () => (
  <Container>
    <Logo>
      <Link to="/">
        <IconSpotify />
      </Link>
    </Logo>
    <Menu>
      <MenuItem>
        <NavLink to="/">
          <IconUser />
          <div>Profile</div>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="artists">
          <IconMicrophone />
          <div>Top Artists</div>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="tracks">
          <IconMusic />
          <div>Top Tracks</div>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="recent">
          <IconTime />
          <div>Recent</div>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="playlists">
          <IconPlaylist />
          <div>Playlists</div>
        </NavLink>
      </MenuItem>
    </Menu>
    <Github>
      <a
        href="https://github.com/varunpandey2106/sangeet"
        target="_blank"
        rel="noopener noreferrer">
        <IconGithub />
      </a>
    </Github>
  </Container>
);

export default Nav;



// Container:

// Styled nav element.
// Positioned fixed on the left side of the viewport (or bottom on tablets).
// It has a minimum height of 100% of the viewport height.
// It has a background color of navBlack from the theme.
// Logo:

// Styled div containing the Spotify logo.
// Positioned at the top of the navigation.
// Displayed as a link to the home page (/).
// Hidden on tablets.
// Github:

// Styled div containing the GitHub icon.
// Positioned at the bottom of the navigation.
// Displayed as a link to the GitHub repository.
// Hidden on tablets.
// Menu:

// Styled ul element representing the menu items.
// Displayed as a flex container with a column layout (or row on tablets).
// MenuItem:

// Styled li element representing a single menu item.
// Each item contains an icon and text.
// On tablets, items are displayed as rows instead of columns.
// NavLink:

// Custom component that uses @reach/router's Link component.
// Applies the isActive function to determine if the link is currently active.
// It's used for defining navigation links with their corresponding destinations.
// isActive:

// Function used to determine if a link is currently active.
// It returns an object with a class name of 'active' if the link is active, otherwise null.
// Icons:

// Imported icons used in the navigation menu (e.g., IconUser, IconMicrophone, etc.).
// The navigation menu consists of several menu items, each represented by a MenuItem component. Each menu item contains an icon and text, and clicking on a menu item navigates the user to a specific route. Additionally, there's a GitHub link at the bottom of the navigation for accessing the project's GitHub repository. The menu layout changes based on the viewport size, with a column layout on smaller screens and a row layout on tablets.

//  a total of 14 div elements:

// Container (1 div)
// Logo (1 div)
// Menu (1 div)
// MenuItem (5 div elements, as there are 5 menu items)
// Github (1 div)
// NavLink (5 div elements, each within a MenuItem)