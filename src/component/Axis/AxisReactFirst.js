import React from 'react';
import * as PropTypes from 'prop-types';

const AxisReactFirst = ({ scale, translateX, translateY }) => {
  const ticks = scale.ticks();
  return (
    <foreignObject width="100%" y={translateY} height="20" fontSize="10">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {ticks.map(tick => (
          <span key={tick}>
            {tick.toLocaleDateString('en-US', {
              weekday: 'short',
              day: 'numeric',
            })}
          </span>
        ))}
      </div>
    </foreignObject>
  );
};

AxisReactFirst.propTypes = {
  scale: PropTypes.func.isRequired,
  translateX: PropTypes.number,
  translateY: PropTypes.number,
};

AxisReactFirst.defaultProps = {
  translateX: 0,
  translateY: 0,
};

export default AxisReactFirst;
