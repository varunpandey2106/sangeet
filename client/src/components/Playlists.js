import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import { getPlaylists } from '../spotify';
import { catchErrors } from '../utils';

import Loader from './Loader';
import { IconMusic } from './icons';

import styled from 'styled-components/macro';
import { theme, mixins, media, Main } from '../styles';
const { colors, fontSizes, spacing } = theme;

const Wrapper = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
`;
const PlaylistsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: ${spacing.md};
  width: 100%;
  margin-top: 50px;
  ${media.tablet`
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  `};
  ${media.phablet`
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  `};
`;
const Playlist = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const PlaylistMask = styled.div`
  ${mixins.flexCenter};
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 30px;
  color: ${colors.white};
  opacity: 0;
  transition: ${theme.transition};
`;


const PlaylistImage = styled.img`
  object-fit: cover;
`;
const PlaylistCover = styled(Link)`
  ${mixins.coverShadow};
  position: relative;
  width: 100%;
  margin-bottom: ${spacing.base};
  &:hover,
  &:focus {
    ${PlaylistMask} {
      opacity: 1;
    }
  }
`;
const PlaceholderArtwork = styled.div`
  ${mixins.flexCenter};
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  background-color: ${colors.darkGrey};
  svg {
    width: 50px;
    height: 50px;
  }
`;
const PlaceholderContent = styled.div`
  ${mixins.flexCenter};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const PlaylistName = styled(Link)`
  display: inline;
  border-bottom: 1px solid transparent;
  &:hover,
  &:focus {
    border-bottom: 1px solid ${colors.green};
  }
`;
const TotalTracks = styled.div`
  text-transform: uppercase;
  margin: 5px 0;
  color: ${colors.green};
  font-size: ${fontSizes.xs};
  letter-spacing: 1px;
`;

const Playlists = () => {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPlaylists();
      setPlaylists(data);
    };
    catchErrors(fetchData());
  }, []);

  return (
    <Main>
      <h2>Your Playlists</h2>
      <Wrapper>
        <PlaylistsContainer>
          {playlists ? (
            playlists.items.map(({ id, images, name, tracks }, i) => (
              <Playlist key={i}>
                <PlaylistCover to={id}>
                  {images.length ? (
                    <PlaylistImage src={images[0].url} alt="Album Art" />
                  ) : (
                    <PlaceholderArtwork>
                      <PlaceholderContent>
                        <IconMusic />
                      </PlaceholderContent>
                    </PlaceholderArtwork>
                  )}
                  <PlaylistMask>
                    <i className="fas fa-info-circle" />
                  </PlaylistMask>
                </PlaylistCover>
                <div>
                  <PlaylistName to={id}>{name}</PlaylistName>
                  <TotalTracks>{tracks.total} Tracks</TotalTracks>
                </div>
              </Playlist>
            ))
          ) : (
            <Loader />
          )}
        </PlaylistsContainer>
      </Wrapper>
    </Main>
  );
};

export default Playlists;



// Wrapper:

// Purpose: This styled component is used as a container for the entire section of playlists.
// Styling:
// It uses flexBetween mixin from mixins to align items with space between.
// It sets align-items to flex-start to align items to the start of the cross axis.
// PlaylistsContainer:

// Purpose: This styled component is used as a container for the grid layout of playlists.
// Styling:
// It uses CSS Grid layout with grid-template-columns to create a responsive grid where each column is a minimum of 200px wide.
// grid-gap adds some space between grid items.
// It sets the width to 100% and adds some top margin.
// Playlist:

// Purpose: This styled component is used as a container for each individual playlist.
// Styling:
// It sets the flex direction to column to stack child elements vertically.
// Text is centered within the container.
// PlaylistMask:

// Purpose: This styled component is used to create a mask overlay for playlist covers.
// Styling:
// It positions the mask absolutely within its container, covering it completely.
// It uses a background color with transparency to create a semi-transparent overlay.
// Text is centered vertically and horizontally within the mask.
// Initially, the opacity is set to 0, and it transitions smoothly when hovered over or focused.
// PlaylistImage:

// Purpose: This styled component is used to display the cover image of a playlist.
// Styling:
// It ensures that the image covers the entire container while maintaining its aspect ratio.
// PlaylistCover:

// Purpose: This styled component is used to create a link container for each playlist cover.
// Styling:
// It positions the container relatively for absolute positioning of child elements.
// It adds a shadow effect using coverShadow mixin from mixins.
// PlaceholderArtwork:

// Purpose: This styled component is used to create a placeholder for the playlist cover when no cover image is available.
// Styling:
// It uses flexbox to center its child elements both vertically and horizontally.
// It sets a background color for the placeholder artwork.
// PlaceholderContent:

// Purpose: This styled component is used to center content within the placeholder artwork.
// Styling:
// It uses flexbox to center its child elements both vertically and horizontally.
// PlaylistName:

// Purpose: This styled component is used to create a link for the playlist name.
// Styling:
// It ensures the link is displayed inline and has a bottom border when hovered or focused.
// TotalTracks:

// Purpose: This styled component is used to display the total number of tracks in a playlist.
// Styling:
// It sets the text color to green and increases the font size.

// useState:

// useState is a React hook used to manage state in functional components.
// In this component, it is used to create a state variable playlists and its setter function setPlaylists.
// playlists is initialized with a value of null, indicating that the data hasn't been fetched yet.
// useEffect (1st):

// useEffect is another React hook that runs side effects in functional components.
// The first useEffect hook is responsible for fetching the playlists data when the component mounts.
// It calls the getPlaylists function, which presumably fetches the playlists data from an external API.
// The fetched data is then stored in the playlists state using the setPlaylists function.
// return:

// The return statement returns the JSX content to be rendered by the component.
// Main:

// Main is a styled component imported from the project's style definitions.
// It represents the main content area of the page.
// h2:

// Represents a heading element with text "Your Playlists".
// Wrapper:

// Wrapper is a styled component that contains the entire section of playlists.
// It ensures that the playlist section is displayed with flexbox, allowing for flexible alignment of items.
// PlaylistsContainer:

// PlaylistsContainer is a styled component that represents the grid layout of playlists.
// It utilizes CSS Grid layout to create a responsive grid where each playlist is displayed.
// The number of columns in the grid adjusts based on the available width, ensuring a responsive layout.
// Conditional Rendering:

// The content within the Wrapper component is conditionally rendered based on the value of the playlists state.
// If playlists is not null, the playlists data is mapped over using the map function to render individual playlists.
// Each playlist is represented by a Playlist styled component.
// Loader:

// If playlists is null (indicating that data is being fetched), the Loader component is rendered to display a loading indicator.
// Playlist:

// The Playlist component represents an individual playlist.
// It contains the cover image (or a placeholder if no image is available), the playlist name, and the total number of tracks.
// PlaylistCover:

// PlaylistCover is a styled component that creates a link container for each playlist cover.
// It includes a mask overlay (PlaylistMask) that is displayed when hovering over or focusing on the playlist cover.
// PlaceholderArtwork:

// If no cover image is available for a playlist, PlaceholderArtwork is rendered to display a placeholder artwork.
// It includes an icon (IconMusic) to indicate that no cover image is available.
// useEffect (2nd):

// The second useEffect hook is responsible for fetching audio features data for each track in the playlists.
// It runs whenever the playlists state changes.
// It calls the getAudioFeaturesForTracks function to fetch audio features data for all tracks in each playlist.
// The fetched data is stored in the audioFeatures state.