const roundInTheInterval = (value, { min = 0, max = 100 } = { min: 0, max: 100 }) => {
  if (value < min) return min;

  if (value > max) return max;

  return value;
};

const calculateHeight = (target) => {
  if (target === document) {
    return {
      full: target.documentElement.scrollHeight,
      visible: target.documentElement.clientHeight,
      scrolled: roundInTheInterval(
        target.documentElement.scrollTop,
        { max: target.documentElement.scrollHeight - target.documentElement.clientHeight }
      ),
    };
  }

  return {
    full: target.scrollHeight,
    visible: target.clientHeight,
    scrolled: roundInTheInterval(
      target.scrollTop,
      { max: target.scrollHeight - target.clientHeight },
    ),
  };
};

export default calculateHeight;
