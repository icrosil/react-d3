import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import defaultData from './data';
import getScales from './d3';
import { colors } from './style';
import Stripe from '../util/Stripe';
import Gradient from '../util/Gradient';
import AxisD3 from '../Axis/AxisD3';

const TimeLine = ({ viewBox }) => {
  const [data] = useState(defaultData);
  const [dimension] = useState({
    height: 200,
    width: 400,
  });
  const [xScale, yScale, line, area] = useMemo(
    () => getScales({ viewBox, data }),
    [viewBox, data],
  );
  const stripeId = 'stripe';
  const gradientId = 'gradient';
  return (
    <section>
      <svg
        width={dimension.width}
        height={dimension.height}
        style={{ overflow: 'visible' }}
        viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
      >
        <Stripe color={colors.stripe} id={stripeId} />
        <Gradient
          id={gradientId}
          stops={[
            { offset: '0%', stopColor: colors.gradientZero },
            { offset: '100%', stopColor: colors.gradientFull },
          ]}
        />
        <path
          d={line}
          stroke={colors.line}
          strokeWidth={3}
          fill="transparent"
        />
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
        <AxisD3 scale={xScale} translateY={dimension.height} renderASAP />
      </svg>
    </section>
  );
};

TimeLine.propTypes = {
  viewBox: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
};

TimeLine.defaultProps = {
  viewBox: {
    width: 400,
    height: 200,
  },
};

export default TimeLine;
