import React from 'react';
import PropTypes from 'prop-types';

const Lotus = ({ dimension }) => (
  <svg width={dimension.width} height={dimension.height}>
    <rect width="300" height="100" fill="red" />
  </svg>
);

Lotus.propTypes = {
  dimension: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }).isRequired
};

Lotus.defaultProps = {
  dimension: {
    height: 200,
    width: 400
  }
};

export default Lotus;
