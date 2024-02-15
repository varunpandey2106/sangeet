import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import { getPlaylist, getAudioFeaturesForTracks } from '../spotify';
import { catchErrors } from '../utils';

import Loader from './Loader';
import TrackItem from './TrackItem';
import FeatureChart from './FeatureChart';

import styled from 'styled-components/macro';
import { theme, mixins, media, Main } from '../styles';
const { colors, fontSizes, spacing } = theme;

const PlaylistContainer = styled.div`
  display: flex;
  ${media.tablet`
    display: block;
  `};
`;
const Left = styled.div`
  width: 30%;
  text-align: center;
  min-width: 200px;
  ${media.tablet`
    width: 100%;
    min-width: auto;
  `};
`;
const Right = styled.div`
  flex-grow: 1;
  margin-left: 50px;
  ${media.tablet`
    margin: 50px 0 0;
  `};
`;
const PlaylistCover = styled.div`
  ${mixins.coverShadow};
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  ${media.tablet`
    display: none;
  `};
`;
const Name = styled.h3`
  font-weight: 1700;
  font-size: ${fontSizes.xl};
  margin-top: 20px;
`;
const Description = styled.p`
  font-size: ${fontSizes.sm};
  color: ${colors.lightGrey};
  a {
    color: ${colors.white};
    border-bottom: 1px solid transparent;
    &:hover,
    &:focus {
      border-bottom: 1px solid ${colors.white};
    }
  }
`;
const RecButton = styled(Link)`
  ${mixins.greenButton};
  margin-bottom: ${spacing.lg};
`;
const Owner = styled.p`
  font-size: ${fontSizes.sm};
  color: ${colors.green};
`;
const TotalTracks = styled.p`
  font-size: ${fontSizes.sm};
  color: ${colors.green};
  margin-top: 20px;
`;

const Playlist = props => {
  const { playlistId } = props;

  const [playlist, setPlaylist] = useState(null);
  const [audioFeatures, setAudioFeatures] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPlaylist(playlistId);
      setPlaylist(data);
    };
    catchErrors(fetchData());
  }, [playlistId]);

  useEffect(() => {
    const fetchData = async () => {
      if (playlist) {
        const { data } = await getAudioFeaturesForTracks(playlist.tracks.items);
        setAudioFeatures(data);
      }
    };
    catchErrors(fetchData());
  }, [playlist]);

  return (
    <React.Fragment>
      {playlist ? (
        <Main>
          <PlaylistContainer>
            <Left>
              {playlist.images.length && (
                <PlaylistCover>
                  <img src={playlist.images[0].url} alt="Album Art" />
                </PlaylistCover>
              )}

              <a href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                <Name>{playlist.name}</Name>
              </a>

              <Owner>By {playlist.owner.display_name}</Owner>

              {playlist.description && (
                <Description dangerouslySetInnerHTML={{ __html: playlist.description }} />
              )}

              <TotalTracks>{playlist.tracks.total} Tracks</TotalTracks>

              <RecButton to={`/recommendations/${playlist.id}`}>Get Recommendations</RecButton>

              {audioFeatures && (
                <FeatureChart features={audioFeatures.audio_features} type="horizontalBar" />
              )}
            </Left>
            <Right>
              <ul>
                {playlist.tracks &&
                  playlist.tracks.items.map(({ track }, i) => <TrackItem track={track} key={i} />)}
              </ul>
            </Right>
          </PlaylistContainer>
        </Main>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
};

Playlist.propTypes = {
  playlistId: PropTypes.string,
};

export default Playlist;


// Imports:

// React, useState, useEffect: These are imported from the 'react' package to enable React functional component creation and state management.
// Link: Imported from '@reach/router' for navigation within the application.
// PropTypes: Imported from 'prop-types' for type-checking of props.
// getPlaylist, getAudioFeaturesForTracks: Imported from '../spotify' for fetching playlist data and audio features.
// catchErrors: Imported from '../utils' for error handling.
// Loader, TrackItem, FeatureChart: These are components imported from their respective files.
// Styled Components:

// Various styled components are defined using the styled function from 'styled-components/macro'. These styled components are used for styling the elements of the playlist component.
// Playlist Functional Component:

// Playlist is a functional component that takes playlistId as a prop.
// Two state variables, playlist and audioFeatures, are declared using the useState hook to manage the playlist data and its audio features.
// Two useEffect hooks are used for fetching data:
// The first useEffect fetches the playlist data when the component mounts or when playlistId changes.
// The second useEffect fetches the audio features for the tracks in the playlist when the playlist state variable changes.
// Inside the component, a conditional rendering is used:
// If playlist data is available, the main content is rendered:
// It includes the playlist cover image, name, owner, description, total tracks, a button for getting recommendations, and a feature chart displaying audio features of the tracks.
// The tracks are rendered in the right section using the TrackItem component.
// If playlist data is not available, a Loader component is rendered.
// Finally, the Playlist component is exported, and its playlistId prop is type-checked using PropTypes.
// PropTypes:

// playlistId is defined as a required string prop for type-checking using PropTypes.