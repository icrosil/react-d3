import React from 'react';
import PropTypes from 'prop-types';

const Gradient = ({ id, stops }) => {
  return (
    <defs>
      <linearGradient id={id} gradientTransform="rotate(90)">
        {stops.map(({ offset, stopColor }) => (
          <stop
            key={`${offset}_${stopColor}`}
            offset={offset}
            stopColor={stopColor}
          />
        ))}
      </linearGradient>
    </defs>
  );
};

Gradient.propTypes = {
  id: PropTypes.string.isRequired,
  stops: PropTypes.arrayOf(
    PropTypes.shape({
      offset: PropTypes.string,
      stopColor: PropTypes.string,
    }),
  ),
};

export default Gradient;
