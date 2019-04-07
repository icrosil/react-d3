import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import defaultData from './data';
import getScales from './d3';
import { colors } from './style';
import Stripe from '../utils/Stripe';
import Gradient from '../utils/Gradient';

const Lotus = ({ dimension, data }) => {
  const [xScale, yScale, line, area] = useMemo(
    () => getScales({ dimension, data }),
    [dimension, data],
  );
  const stripeId = 'stripe';
  const gradientId = 'gradient';
  return (
    <svg
      width={dimension.width}
      height={dimension.height}
      style={{ overflow: 'visible' }}
    >
      <Stripe color={colors.stripe} id={stripeId} />
      <Gradient
        id={gradientId}
        stops={[
          { offset: '0%', stopColor: colors.gradientZero },
          { offset: '100%', stopColor: colors.gradientFull },
        ]}
      />
      <path d={line} stroke={colors.line} strokeWidth={3} fill="transparent" />
      <path d={area} fill={`url(#${gradientId})`} />
      <path d={area} fill={`url(#${stripeId})`} />
      {data.map(({ date, value }) => (
        <circle
          key={`${date}_${value}`}
          cx={xScale(date)}
          cy={yScale(value)}
          r={4}
          fill={'white'}
          stroke={colors.line}
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
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Lotus.defaultProps = {
  dimension: {
    height: 200,
    width: 400,
  },
  data: defaultData,
};

export default Lotus;
