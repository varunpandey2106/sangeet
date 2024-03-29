import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import { getTopArtistsShort, getTopArtistsMedium, getTopArtistsLong } from '../spotify';
import { catchErrors } from '../utils';

import { IconInfo } from './icons';
import Loader from './Loader';

import styled from 'styled-components/macro';
import { theme, mixins, media, Main } from '../styles';
const { colors, fontSizes, spacing } = theme;

const Header = styled.header`
  ${mixins.flexBetween};
  ${media.tablet`
    display: block;
  `};
  h2 {
    margin: 0;
  }
`;
const Ranges = styled.div`
  display: flex;
  margin-right: -11px;
  ${media.tablet`
    justify-content: space-around;
    margin: 30px 0 0;
  `};
`;
const RangeButton = styled.button`
  background-color: transparent;
  color: ${props => (props.isActive ? colors.white : colors.lightGrey)};
  font-size: ${fontSizes.base};
  font-weight: 500;
  padding: 10px;
  ${media.phablet`
    font-size: ${fontSizes.sm};
  `};
  span {
    padding-bottom: 2px;
    border-bottom: 1px solid ${props => (props.isActive ? colors.white : `transparent`)};
    line-height: 1.5;
    white-space: nowrap;
  }
`;
const ArtistsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 50px;
  margin-top: 50px;
  ${media.tablet`
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  `};
  ${media.phablet`
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  `};
`;
const Artist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
  border-radius: 100%;
  font-size: 20px;
  color: ${colors.white};
  opacity: 0;
  transition: ${theme.transition};
  svg {
    width: 25px;
  }
`;
const ArtistArtwork = styled(Link)`
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
  ${media.tablet`
    width: 150px;
    height: 150px;
  `};
  ${media.phablet`
    width: 120px;
    height: 120px;
  `};
  &:hover,
  &:focus {
    ${Mask} {
      opacity: 1;
    }
  }
  img {
    border-radius: 100%;
    object-fit: cover;
    width: 200px;
    height: 200px;
    ${media.tablet`
      width: 150px;
      height: 150px;
    `};
    ${media.phablet`
      width: 120px;
      height: 120px;
    `};
  }
`;
const ArtistName = styled.a`
  margin: ${spacing.base} 0;
  border-bottom: 1px solid transparent;
  &:hover,
  &:focus {
    border-bottom: 1px solid ${colors.green};
  }
`;

const TopArtists = () => {
  const [topArtists, setTopArtists] = useState(null);
  const [activeRange, setActiveRange] = useState('long');

  const apiCalls = {
    long: getTopArtistsLong(),
    medium: getTopArtistsMedium(),
    short: getTopArtistsShort(),
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getTopArtistsLong();
      setTopArtists(data);
    };
    catchErrors(fetchData());
  }, []);

  const changeRange = async range => {
    const { data } = await apiCalls[range];
    setTopArtists(data);
    setActiveRange(range);
  };

  const setRangeData = range => catchErrors(changeRange(range));

  return (
    <Main>
      <Header>
        <h2>Top Artists</h2>
        <Ranges>
          <RangeButton isActive={activeRange === 'long'} onClick={() => setRangeData('long')}>
            <span>All Time</span>
          </RangeButton>
          <RangeButton isActive={activeRange === 'medium'} onClick={() => setRangeData('medium')}>
            <span>Last 6 Months</span>
          </RangeButton>
          <RangeButton isActive={activeRange === 'short'} onClick={() => setRangeData('short')}>
            <span>Last 4 Weeks</span>
          </RangeButton>
        </Ranges>
      </Header>
      <ArtistsContainer>
        {topArtists ? (
          topArtists.items.map(({ id, external_urls, images, name }, i) => (
            <Artist key={i}>
              <ArtistArtwork to={`/artist/${id}`}>
                {images.length && <img src={images[1].url} alt="Artist" />}
                <Mask>
                  <IconInfo />
                </Mask>
              </ArtistArtwork>
              <ArtistName href={external_urls.spotify} target="_blank" rel="noopener noreferrer">
                {name}
              </ArtistName>
            </Artist>
          ))
        ) : (
          <Loader />
        )}
      </ArtistsContainer>
    </Main>
  );
};

export default TopArtists;


// State Initialization:

// The component uses the useState hook to initialize state variables:
// topArtists: Represents the list of top artists fetched from the Spotify API.
// activeRange: Represents the currently active time range ('long', 'medium', 'short').
// API Calls:

// Three different API calls (getTopArtistsLong, getTopArtistsMedium, getTopArtistsShort) are defined based on different time ranges ('long', 'medium', 'short').
// These API calls are stored in an object apiCalls with keys corresponding to the time ranges.
// Fetching Data:

// The useEffect hook is used to fetch data for the 'long' time range when the component mounts.
// The fetchData function is called inside the useEffect hook to fetch the top artists data.
// The catchErrors utility function is used to catch and handle any errors that occur during data fetching.
// Changing Time Range:

// The changeRange function is defined to dynamically change the time range and fetch corresponding data.
// It takes a range parameter ('long', 'medium', 'short') and updates the topArtists state accordingly.
// Rendering:

// The component renders a header (Header) containing the title 'Top Artists' and buttons for selecting different time ranges.
// The time range buttons (RangeButton) are displayed horizontally and allow the user to switch between different time ranges.
// The ArtistsContainer displays a grid of artist items (Artist) fetched from the Spotify API.
// Each artist item includes the artist's artwork, name, and a link to their Spotify profile.
// Loading State:

// While data is being fetched (topArtists is null), a loader component (Loader) is displayed to indicate that the data is loading.