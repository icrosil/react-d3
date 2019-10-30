import React, { useRef, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { select, axisBottom } from 'd3';
import reactHtmlParser from 'react-html-parser';

const AxisHook = ({ d3Axis, scale, translateX, translateY, renderASAP }) => {
  const ref = useRef(renderASAP ? document.createElement('g') : undefined);
  useEffect(() => {
    select(ref.current).call(d3Axis.scale(scale));
  }, [d3Axis, scale]);
  if (renderASAP) {
    ref.current.setAttribute(
      'transform',
      `translate(${translateX}, ${translateY})`,
    );
    select(ref.current).call(d3Axis.scale(scale));
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
  d3Axis: axisBottom(),
  translateX: 0,
  translateY: 0,
};

export default AxisHook;
