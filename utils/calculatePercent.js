const calculatePercent = (height) => {
  const current = Math.round((100 / (height.full - height.visible)) * height.scrolled);

  return { current };
};

export default calculatePercent;
