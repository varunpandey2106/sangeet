import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { formatDuration } from '../utils';

import { IconInfo } from './icons';

import styled from 'styled-components/macro';
import { theme, mixins, media } from '../styles';
const { colors, fontSizes, spacing } = theme;

const TrackLeft = styled.span`
  ${mixins.overflowEllipsis};
`;
const TrackRight = styled.span``;
const TrackArtwork = styled.div`
  display: inline-block;
  position: relative;
  width: 50px;
  min-width: 50px;
  margin-right: ${spacing.base};
`;
const Mask = styled.div`
  ${mixins.flexCenter};
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: ${colors.white};
  opacity: 0;
  transition: ${theme.transition};
  svg {
    width: 25px;
  }
`;
const TrackContainer = styled(Link)`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin-bottom: ${spacing.md};
  ${media.tablet`
    margin-bottom: ${spacing.base};
  `};
  &:hover,
  &:focus {
    ${Mask} {
      opacity: 1;
    }
  }
`;
const TrackMeta = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-gap: 10px;
`;
const TrackName = styled.span`
  margin-bottom: 5px;
  border-bottom: 1px solid transparent;
  &:hover,
  &:focus {
    border-bottom: 1px solid ${colors.green};
  }
`;
const TrackAlbum = styled.div`
  ${mixins.overflowEllipsis};
  color: ${colors.lightGrey};
  font-size: ${fontSizes.sm};
  margin-top: 3px;
`;
const TrackDuration = styled.span`
  color: ${colors.lightGrey};
  font-size: ${fontSizes.sm};
`;

const TrackItem = ({ track }) => (
  <li>
    <TrackContainer to={`/track/${track.id}`}>
      <div>
        <TrackArtwork>
          {track.album.images.length && <img src={track.album.images[2].url} alt="Album Artwork" />}
          <Mask>
            <IconInfo />
          </Mask>
        </TrackArtwork>
      </div>
      <TrackMeta>
        <TrackLeft>
          {track.name && <TrackName>{track.name}</TrackName>}
          {track.artists && track.album && (
            <TrackAlbum>
              {track.artists &&
                track.artists.map(({ name }, i) => (
                  <span key={i}>
                    {name}
                    {track.artists.length > 0 && i === track.artists.length - 1 ? '' : ','}&nbsp;
                  </span>
                ))}
              &nbsp;&middot;&nbsp;&nbsp;
              {track.album.name}
            </TrackAlbum>
          )}
        </TrackLeft>
        <TrackRight>
          {track.duration_ms && <TrackDuration>{formatDuration(track.duration_ms)}</TrackDuration>}
        </TrackRight>
      </TrackMeta>
    </TrackContainer>
  </li>
);

TrackItem.propTypes = {
  track: PropTypes.object.isRequired,
};

export default TrackItem;


// This code defines a React functional component named TrackItem, which represents an item displaying information about a track. Here's a breakdown of its functionality:

// Component Structure:

// The component is structured using styled-components for styling.
// It consists of a list item (<li>) containing a track container (<TrackContainer>), which further contains the track artwork (<TrackArtwork>) and track metadata (<TrackMeta>).
// Props:

// The component receives a single prop named track, which is an object containing information about the track to be displayed. This prop is required, and its PropTypes are defined accordingly.
// Rendering:

// The component renders the track information including:
// Track name (track.name).
// Artists (track.artists) and album name (track.album.name).
// Duration of the track (track.duration_ms), formatted using the formatDuration utility function.
// Styling:

// The component utilizes styled-components for styling elements such as track name, album name, and duration.
// CSS grid and flexbox are used for layout purposes to achieve responsiveness.
// Interaction:

// The track container (<TrackContainer>) is a Link component from @reach/router, which allows for navigation to the track details page when clicked.
// Hover/Focus Effects:

// When the user hovers over or focuses on a track item, a mask overlay (<Mask>) is displayed over the track artwork (<TrackArtwork>) containing an information icon (<IconInfo />). This is achieved using CSS transitions and opacity changes.