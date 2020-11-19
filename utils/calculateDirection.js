const down = {
  current: "down",
  down: true,
  up: false
};

const up = {
  current: "up",
  down: false,
  up: true
};

const calculateDirection = (calculated, currentHeightScrolled) => {
  if (calculated.height.scrolled === currentHeightScrolled) return calculated.direction;

  if (calculated.height.scrolled < currentHeightScrolled) return down;

  return up;
};

export default calculateDirection;
