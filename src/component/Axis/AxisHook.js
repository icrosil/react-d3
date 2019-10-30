import React, { useRef, useEffect } from 'react';
import * as PropTypes from 'prop-types';
// TODO do we need all d3 really?
import * as d3 from 'd3';
import reactHtmlParser from 'react-html-parser';

const AxisHook = ({ d3Axis, scale, translateX, translateY, renderASAP }) => {
  const ref = React.useRef(
    renderASAP ? document.createElement('g') : undefined,
  );
  React.useEffect(() => {
    d3.select(ref.current).call(d3Axis.scale(scale));
  }, [d3Axis, scale]);
  if (renderASAP) {
    ref.current.setAttribute(
      'transform',
      `translate(${translateX}, ${translateY})`,
    );
    d3.select(ref.current).call(d3Axis.scale(scale));
    const [axis] = reactHtmlParser(ref.current.outerHTML);
    return axis;
  }
  return <g ref={ref} transform={`translate(${translateX}, ${translateY})`} />;
};

AxisHook.propTypes = {
  scale: PropTypes.func.isRequired,
  d3Axis: PropTypes.func,
  translateX: PropTypes.number,
  translateY: PropTypes.number,
};

AxisHook.defaultProps = {
  d3Axis: d3.axisBottom(),
  translateX: 0,
  translateY: 0,
};

export default AxisHook;
