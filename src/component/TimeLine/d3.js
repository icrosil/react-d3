import { line, scaleLinear, scaleTime, curveMonotoneX } from 'd3';

const defaultMapper = { x: 'date', y: 'value' };

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
  return scaleTime()
    .domain([minDomain, maxDomain])
    .range([0, width]);
};

export const path = (xScale, yScale, mapper = defaultMapper) =>
  line()
    .x(row => xScale(row[mapper.x]))
    .y(row => yScale(row[mapper.y]))
    .curve(curveMonotoneX);

export default ({ dimension, data, mapper = defaultMapper }) => {
  const xScaled = xScale(data.map(row => row[mapper.x]), dimension);
  const yScaled = yScale(data.map(row => row[mapper.y]), dimension);
  const line = path(xScaled, yScaled)(data);
  return [xScaled, yScaled, line];
};
