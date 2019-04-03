import React from 'react';
import PropTypes from 'prop-types';

import defaultData from './data';
import { xScale, yScale, path } from './d3';

const Lotus = ({ dimension, data }) => {
  const myXScale = xScale(data.map(({ date }) => date), dimension);
  const myYScale = yScale(data.map(({ value }) => value), dimension);
  const line = path(myXScale, myYScale)(data);
  return (
    <svg width={dimension.width} height={dimension.height}>
      <rect width="300" height="100" fill="red" />
      <path d={line} stroke="green" strokeWidth={3} fill="transparent" />
      {data.map(({ date, value }) => (
        <circle
          key={`${date}_${value}`}
          cx={myXScale(date)}
          cy={myYScale(value)}
          r={3}
          fill={'yellow'}
        />
      ))}
    </svg>
  );
};

Lotus.propTypes = {
  dimension: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
  data: PropTypes.arrayOf().isRequired,
};

Lotus.defaultProps = {
  dimension: {
    height: 200,
    width: 400,
  },
  data: defaultData,
};

export default Lotus;
