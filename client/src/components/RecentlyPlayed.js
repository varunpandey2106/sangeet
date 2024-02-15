import React, { useState, useEffect } from 'react';
import { getRecentlyPlayed } from '../spotify';
import { catchErrors } from '../utils';

import Loader from './Loader';
import TrackItem from './TrackItem';

import styled from 'styled-components/macro';
import { Main } from '../styles';

const TracksContainer = styled.ul`
  margin-top: 50px;
`;

const RecentlyPlayed = () => {
  const [recentlyPlayed, setRecentlyPlayed] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getRecentlyPlayed();
      setRecentlyPlayed(data);
    };
    catchErrors(fetchData());
  }, []);

  return (
    <Main>
      <h2>Recently Played Tracks</h2>
      <TracksContainer>
        {recentlyPlayed ? (
          recentlyPlayed.items.map(({ track }, i) => <TrackItem track={track} key={i} />)
        ) : (
          <Loader />
        )}
      </TracksContainer>
    </Main>
  );
};

export default RecentlyPlayed;

// Imports:

// React, useState, useEffect: These are imported from the 'react' package to enable React functional component creation and state management.
// getRecentlyPlayed: Imported from '../spotify' for fetching recently played tracks data.
// catchErrors: Imported from '../utils' for error handling.
// Loader, TrackItem: These are components imported from their respective files.
// Styled Components:

// TracksContainer is a styled component defined using the styled function from 'styled-components/macro'. It's used to style the container for the recently played tracks.
// RecentlyPlayed Functional Component:

// RecentlyPlayed is a functional component with no props.
// One state variable, recentlyPlayed, is declared using the useState hook to manage the data for recently played tracks.
// The useEffect hook is used for fetching data:
// It fetches the recently played tracks data when the component mounts.
// Inside the component, a conditional rendering is used:
// If recentlyPlayed data is available, the recently played tracks are rendered using the TrackItem component.
// If recentlyPlayed data is not available, a Loader component is rendered to indicate that data is being fetched.
// The component returns a <Main> wrapper containing the heading "Recently Played Tracks" and the list of recently played tracks inside the TracksContainer.
// Export:

// The RecentlyPlayed component is exported as the default export of this file.