import { line, scaleLinear, scaleTime, curveMonotoneX } from 'd3';

export const yScale = (yValues, { height }) => {
  const maxDomain = Math.max(...yValues);
  const minDomain = Math.min(...yValues);
  return scaleLinear()
    .domain([minDomain, maxDomain])
    .range([0, height]);
};

export const xScale = (xValues, { width }) => {
  const maxDomain = Math.max(...xValues);
  const minDomain = Math.min(...xValues);
  console.log('maxDomain', maxDomain);
  console.log('minDomain', minDomain);
  console.log('width', width);
  return scaleTime()
    .domain([minDomain, maxDomain])
    .range([0, width]);
};

export const path = (xScale, yScale, mapper = { x: 'date', y: 'value' }) =>
  line()
    .x(d => xScale(d[mapper.x]))
    .y(d => yScale(d[mapper.y]))
    .curve(curveMonotoneX);
