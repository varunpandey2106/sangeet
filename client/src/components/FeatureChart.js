import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

import styled from 'styled-components/macro';
import { theme } from '../styles';
const { fonts } = theme;

const properties = [
  'acousticness',
  'danceability',
  'energy',
  'instrumentalness',
  'liveness',
  'speechiness',
  'valence',
];

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;

  #chart {
    margin: 0 auto;
    margin-top: -30px;
  }
`;

const FeatureChart = props => {
  const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

  useEffect(() => {
    const createDataset = features => {
      const dataset = {};
      properties.forEach(prop => {
        dataset[prop] = features.length
          ? avg(features.map(feat => feat && feat[prop]))
          : features[prop];
      });
      return dataset;
    };

    const createChart = dataset => {
      const { type } = props;
      const ctx = document.getElementById('chart');
      const labels = Object.keys(dataset);
      const data = Object.values(dataset);

      new Chart(ctx, {
        type: type || 'bar',
        data: {
          labels,
          datasets: [
            {
              label: '',
              data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.3)',
                'rgba(255, 159, 64, 0.3)',
                'rgba(255, 206, 86, 0.3)',
                'rgba(75, 192, 192, 0.3)',
                'rgba(54, 162, 235, 0.3)',
                'rgba(104, 132, 245, 0.3)',
                'rgba(153, 102, 255, 0.3)',
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(104, 132, 245, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            },
          },
          title: {
            display: true,
            text: `Audio Features`,
            fontSize: 18,
            fontFamily: `${fonts.primary}`,
            fontColor: '#ffffff',
            padding: 30,
          },
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  color: 'rgba(255, 255, 255, 0.3)',
                },
                ticks: {
                  fontFamily: `${fonts.primary}`,
                  fontSize: 20,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  color: 'rgba(255, 255, 255, 0.3)',
                },
                ticks: {
                  beginAtZero: true,
                  fontFamily: `${fonts.primary}`,
                  fontSize: 20,
                },
              },
            ],
          },
        },
      });
    };

    const parseData = () => {
      const { features } = props;
      const dataset = createDataset(features);
      createChart(dataset);
    };

    parseData();
  }, [props]);

  return (
    <Container>
      <canvas id="chart" width="400" height="400" />
    </Container>
  );
};

FeatureChart.propTypes = {
  features: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  type: PropTypes.string,
};

export default FeatureChart;

// Styled Components:

// Container: It's a styled div that wraps the entire chart. It sets the position to relative, ensuring proper positioning of the chart canvas inside it. The width is set to 100% with a maximum width of 700px to ensure responsiveness. The #chart ID within the Container is styled to provide some margin adjustments.
// Functional Component:

// FeatureChart: This is the functional component responsible for rendering the feature chart.
// Inside FeatureChart, the avg function is defined, which calculates the average value of an array.
// The useEffect hook is used to handle side effects. It runs the logic to create and render the chart when the component mounts or when the props change.
// The createDataset function creates a dataset object containing the average values of the given audio features data.
// The createChart function creates and configures the Chart.js chart based on the dataset.
// The parseData function calls createDataset and createChart to parse the props data and render the chart accordingly.
// Inside the return statement, the Container wraps a canvas element with the id chart, which will be used by Chart.js to render the chart.
// PropTypes:

// The component defines PropTypes for features and type props. features is required and can be either an array or an object, while type is optional and specifies the type of chart to render.

// Functional Component: FeatureChart is a functional component in React, which means it's a JavaScript function that returns JSX.

// Dependencies: The component imports React, useEffect, and PropTypes from the 'react' package, and Chart from the 'chart.js' package. It also imports styled and theme from 'styled-components/macro'.

// Styled Components: The component uses styled-components to define some styles. It defines a Container styled component which sets the position, width, and max-width properties. It also includes a nested CSS selector #chart to style the canvas element inside the container.

// Properties Array: It defines an array named properties which contains the names of various audio features like 'acousticness', 'danceability', etc.

// Functional Logic:

// avg Function: It defines a helper function avg that calculates the average of an array.
// useEffect Hook: It uses the useEffect hook to perform side effects in the component. It executes the effect when the props change.
// Inside the useEffect hook:
// createDataset Function: It defines a function createDataset that takes an array of features and returns a dataset object with average values for each feature.
// createChart Function: It defines a function createChart that creates a chart using Chart.js library. It initializes a new Chart instance with the provided data and options.
// parseData Function: It defines a function parseData that calls createDataset to create the dataset and then passes it to createChart to create the chart.
// parseData Function Call: It calls the parseData function to parse and display the data initially.
// Return Statement:

// The component returns JSX wrapped inside the Container component. Inside the container, there is a canvas element with the id "chart". The Chart.js library will render the chart inside this canvas element.
// PropTypes: It defines PropTypes for the features prop to ensure it's either an array or an object, and for the type prop to specify the type of chart.

// Export: It exports the FeatureChart component as the default export.