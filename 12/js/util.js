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


const numDecline = (num, nominative, genitiveSingular, genitivePlural) => {
  num = num % 100;
  const num1 = num % 10;
  if (num > 10 && num < 20) {
    return genitivePlural;
  }
  if (num1 > 1 && num1 < 5) {
    return genitiveSingular;
  }
  if (num1 === 1) {
    return nominative;
  }
  return genitivePlural;
};


const escKey = (evt) => evt.key === 'Escape';


const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};


const shufleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


export { getRandomNumber, checkStringLength, escKey, numDecline, debounce, shufleArray };
