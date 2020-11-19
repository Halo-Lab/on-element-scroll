import {
  calculateDirection,
  calculateHeight,
  calculatePercent,
} from "./utils";

const createScrollHandler = ({ callback }) => {
  let calculated = {
      direction: { current: null, up: null, down: null },
      height: { full: null, scrolled: null, visible: null },
      percent: { current: null },
      touched: false,
  };

  const onScroll = ({ target }) => {
      const height = calculateHeight(target);
      const percent = calculatePercent(height);
      const direction = calculateDirection(calculated, height.scrolled);

      /*
          TODO: should we create new object or override properties of previous?
          If we choose strategy of updating we can return 'calculations' with 'onScroll' handler and do not use callback!
      */

      calculated = { direction, height, percent, touched: true };
      callback(calculated);
  };

  return onScroll;
}

export { createScrollHandler };
