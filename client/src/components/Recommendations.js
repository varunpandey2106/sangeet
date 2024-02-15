import React, { useState, useEffect, useMemo } from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import {
  getPlaylist,
  getRecommendationsForTracks,
  getUser,
  createPlaylist,
  addTracksToPlaylist,
  followPlaylist,
  doesUserFollowPlaylist,
} from '../spotify';
import { catchErrors } from '../utils';

import TrackItem from './TrackItem';

import styled from 'styled-components/macro';
import { theme, mixins, media, Main } from '../styles';
const { colors } = theme;

const PlaylistHeading = styled.div`
  ${mixins.flexBetween};
  ${media.tablet`
    flex-direction: column;

  `};
  h2 {
    margin-bottom: 10;
  }
`;
const SaveButton = styled.button`
  ${mixins.greenButton};
`;
const OpenButton = styled.a`
  ${mixins.button};
`;
const TracksContainer = styled.ul`
  margin-top: 50px;
`;
const PlaylistLink = styled(Link)`
  &:hover,
  &:focus {
    color: ${colors.offGreen};
  }
`;

const Recommendations = props => {
  const { playlistId } = props;

  const [playlist, setPlaylist] = useState(null);
  const [recommendations, setRecommmendations] = useState(null);
  const [recPlaylistId, setRecPlaylistId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      const { data } = await getPlaylist(playlistId);
      setPlaylist(data);
    };
    catchErrors(fetchPlaylistData());

    const fetchUserData = async () => {
      const { data } = await getUser();
      setUserId(data.id);
    };
    catchErrors(fetchUserData());
  }, [playlistId]);

  useMemo(() => {
    const fetchData = async () => {
      if (playlist) {
        const { data } = await getRecommendationsForTracks(playlist.tracks.items);
        setRecommmendations(data);
      }
    };
    catchErrors(fetchData());
  }, [playlist]);

  // If recPlaylistId has been set, add tracks to playlist and follow
  useMemo(() => {
    const isUserFollowingPlaylist = async plistId => {
      const { data } = await doesUserFollowPlaylist(plistId, userId);
      setIsFollowing(data[0]);
    };

    const addTracksAndFollow = async () => {
      const uris = recommendations.tracks.map(({ uri }) => uri).join(',');
      const { data } = await addTracksToPlaylist(recPlaylistId, uris);

      // Then follow playlist
      if (data) {
        await followPlaylist(recPlaylistId);
        // Check if user is following so we can change the save to spotify button to open on spotify
        catchErrors(isUserFollowingPlaylist(recPlaylistId));
      }
    };

    if (recPlaylistId && recommendations && userId) {
      catchErrors(addTracksAndFollow(recPlaylistId));
    }
  }, [recPlaylistId, recommendations, userId]);

  const createPlaylistOnSave = async () => {
    if (!userId) {
      return;
    }

    const name = `Recommended Tracks Based on ${playlist.name}`;
    const { data } = await createPlaylist(userId, name);
    setRecPlaylistId(data.id);
  };

  return (
    <Main>
      {playlist && (
        <PlaylistHeading>
          <h2>
            Recommended Tracks Based On{' '}
            <PlaylistLink to={`/playlists/${playlist.id}`}>{playlist.name}</PlaylistLink>
          </h2>
          {isFollowing && recPlaylistId ? (
            <OpenButton
              href={`https://open.spotify.com/playlist/${recPlaylistId}`}
              target="_blank"
              rel="noopener noreferrer">
              Open in Spotify
            </OpenButton>
          ) : (
            <SaveButton onClick={catchErrors(createPlaylistOnSave)}>Save to Spotify</SaveButton>
          )}
        </PlaylistHeading>
      )}
      <TracksContainer>
        {recommendations &&
          recommendations.tracks.map((track, i) => <TrackItem track={track} key={i} />)}
      </TracksContainer>
    </Main>
  );
};

Recommendations.propTypes = {
  playlistId: PropTypes.string,
};

export default Recommendations;


// This code defines a React functional component named Recommendations. Let's break it down:

// Imports:

// React, useState, useEffect, useMemo: These are imported from the 'react' package to enable React functional component creation and state management.
// Link: Imported from '@reach/router' for navigation within the application.
// PropTypes: Imported from 'prop-types' for defining the PropTypes of props passed to the component.
// Several functions like getPlaylist, getRecommendationsForTracks, etc., are imported from '../spotify' for fetching data related to playlists, recommendations, users, creating playlists, adding tracks to playlists, and following playlists.
// catchErrors: Imported from '../utils' for error handling.
// TrackItem: Imported from './TrackItem' for rendering individual track items.
// Various styled components and theme-related objects are imported from '../styles' for styling the component.
// Styled Components:

// PlaylistHeading, SaveButton, OpenButton, TracksContainer, PlaylistLink: These styled components define the styles for different parts of the component, such as the heading, buttons, playlist link, and tracks container.
// Recommendations Functional Component:

// Recommendations is a functional component with a prop playlistId.
// Multiple state variables are declared using the useState hook to manage playlist data, recommendations data, recommended playlist ID, user ID, and whether the user is following the recommended playlist.
// The useEffect hook is used to fetch playlist data and user data when the component mounts.
// The useMemo hook is used to fetch recommendations based on the playlist and to add tracks to a recommended playlist and follow it.
// The createPlaylistOnSave function is called when the "Save to Spotify" button is clicked to create a new playlist with recommended tracks.
// The component returns a <Main> wrapper containing the heading "Recommended Tracks Based On" followed by the playlist name and buttons to save the playlist to Spotify or open it in Spotify. It also renders the list of recommended tracks inside the TracksContainer.
// PropTypes:

// The Recommendations component specifies PropTypes for its props, indicating that playlistId is a required string.
// Export:

// The Recommendations component is exported as the default export of this file.