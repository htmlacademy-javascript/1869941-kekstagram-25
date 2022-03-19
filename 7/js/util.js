const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkStringLength = (string, length) => string <= length;

const escKey = (esc) => esc.key === 'Escape';

export { getRandomNumber, checkStringLength, escKey };