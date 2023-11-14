const isEscapeKey = (evt) => evt.key === 'Escape';

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { isEscapeKey, getRandomInteger, debounce };
