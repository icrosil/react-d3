import day from 'dayjs';

export const generateData = (times = 10, maxValue = 100) => {
  return Array(times)
    .fill(0)
    .map((_, index) => ({
      date: day().subtract(index, 'day'),
      value: (Math.random() * maxValue).toFixed(2),
    }));
};

export default generateData();
