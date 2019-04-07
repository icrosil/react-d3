import React from 'react';
import PropTypes from 'prop-types';

const Stripe = ({ color, id }) => {
  return (
    <defs>
      <pattern id={id} patternUnits="userSpaceOnUse" width="8" height="8">
        <svg width="8" height="8">
          <rect width="8" height="8" fill="rgba(0, 0, 0, 0)" />
          <path
            stroke={color}
            strokeWidth="1.5"
            d="M-1,7 l2,2 M0,0 l8,8 M7,-1 l2,2"
          />
        </svg>
      </pattern>
    </defs>
  );
};

Stripe.propTypes = {
  color: PropTypes.string.isRequired,
  id: PropTypes.string,
};

Stripe.defaultProps = {
  id: 'diagonal_stripe',
};

export default Stripe;
