import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { formatWithCommas, catchErrors } from '../utils';
import { getArtist } from '../spotify';

import Loader from './Loader';

import styled from 'styled-components/macro';
import { theme, mixins, media, Main } from '../styles';
const { colors, fontSizes, spacing } = theme;

const ArtistContainer = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: row;
  height: 100%;
  text-align: center;
`;
const Artwork = styled.div`
  ${mixins.coverShadow};
  border-radius: 100%;
  img {
    object-fit: cover;
    border-radius: 100%;
    width: 300px;
    height: 300px;
    ${media.tablet`
      width: 200px;
      height: 200px;
    `};
  }
`;
const ArtistName = styled.h1`
  font-size: 70px;
  margin-top: ${spacing.md};
  ${media.tablet`
    font-size: 7vw;
  `};
`;
const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-top: ${spacing.md};
  text-align: center;
`;
const Stat = styled.div``;
const Number = styled.div`
  color: ${colors.green};
  font-weight: 700;
  font-size: ${fontSizes.lg};
  text-transform: capitalize;
  ${media.tablet`
    font-size: ${fontSizes.md};
  `};
`;
const Genre = styled.div`
  font-size: ${fontSizes.md};
  
`;
const NumLabel = styled.p`
  color: ${colors.lightGrey};
  font-size: ${fontSizes.xs};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: ${spacing.xs};
`;

const Artist = props => {
  const { artistId } = props;
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getArtist(artistId);
      setArtist(data);
    };
    catchErrors(fetchData());
  }, [artistId]);

  return (
    <React.Fragment>
      {artist ? (
        <ArtistContainer>
          <Artwork>
            <img src={artist.images[0].url} alt="Artist Artwork" />
          </Artwork>
          <div>
            <ArtistName>{artist.name}</ArtistName>
            <Stats>
              <Stat>
                <Number>{formatWithCommas(artist.followers.total)}</Number>
                <NumLabel>Followers</NumLabel>
              </Stat>
              {artist.genres && (
                <Stat>
                  <Number>
                    {artist.genres.map(genre => (
                      <Genre key={genre}>{genre}</Genre>
                    ))}
                  </Number>
                  <NumLabel>Genres</NumLabel>
                </Stat>
              )}
              {artist.popularity && (
                <Stat>
                  <Number>{artist.popularity}%</Number>
                  <NumLabel>Popularity</NumLabel>
                </Stat>
              )}
            </Stats>
          </div>
        </ArtistContainer>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
};

Artist.propTypes = {
  artistId: PropTypes.string,
};

export default Artist;


// Import Statements:

// The component imports necessary modules and functions from React, PropTypes, and its own utility and Spotify-related files.
// It also imports styled-components, theme-related variables, mixins, and media queries from the project's style directory.
// Styled Components:

// ArtistContainer: This styled component is used to create a container for the artist's information. It utilizes flexbox to center its children vertically and horizontally.
// Artwork: This styled component creates a circular container for the artist's image with a shadow effect. It uses an image tag to display the artist's image.
// ArtistName: This styled component defines the styling for the artist's name, setting its font size and adjusting it responsively for different screen sizes.
// Stats: This styled component creates a grid layout to display various statistics about the artist, such as followers, genres, and popularity.
// Stat: This styled component defines the styling for individual statistics displayed in the grid.
// Number: This styled component defines the styling for numerical values displayed in the statistics, such as the number of followers and the artist's popularity percentage.
// Genre: This styled component defines the styling for the genres displayed in the artist's information.
// Functional Component:

// The Artist component is a functional component that takes an artistId prop as input.
// It uses the useState hook to manage the state of the artist data, initially setting it to null.
// The useEffect hook is used to fetch artist data from the Spotify API when the component mounts or when the artistId prop changes. Once the data is fetched, it updates the artist state with the retrieved data.
// The component returns a JSX fragment that conditionally renders either the artist's information or a loader component based on whether the artist data is available (artist is not null).
// Conditional Rendering:

// If the artist data is available, the component renders the ArtistContainer, displaying the artist's image, name, followers, genres, and popularity.
// If the artist data is not yet available (i.e., still loading), the component renders a loader component to indicate that data is being fetched.
// PropTypes Validation:

// The component specifies PropTypes validation for the artistId prop, ensuring it is a string.

// Stats:

// This styled component is used to create a container for displaying statistical information.
// It utilizes CSS Grid layout (display: grid) to arrange its children in a grid format with three columns (grid-template-columns: 1fr 1fr 1fr) and a gap of 10px between grid items (grid-gap: 10px).
// Additionally, it applies some margin at the top (margin-top: ${spacing.md}) to provide spacing between this container and other elements.
// The text alignment for this container is set to center (text-align: center).
// Stat:

// This styled component is defined but appears to have no specific styling applied to it within the provided code snippet. It can be used to represent individual statistical elements within the Stats container.
// Number:

// This styled component is used to style numerical values within the statistical information.
// It sets the text color to ${colors.green}, indicating that numerical values will be displayed in green.
// The font weight is set to 700 to make the numbers bold.
// The font size is set to ${fontSizes.lg} for larger screens and ${fontSizes.md} for tablet-sized screens and smaller, applying a responsive design.
// The text is transformed to capitalize using text-transform: capitalize to ensure consistent formatting.
// Media queries are used to adjust the font size for tablet-sized screens and smaller using ${media.tablet}.
