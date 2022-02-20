const getRandomNumber = (minNumber, maxNumber) => {
  const MIN = Math.ceil(minNumber);
  const MAX = Math.floor(maxNumber);

  if (MIN < 0 || MAX < 0) {
    // eslint-disable-next-line no-console
    console.log('Числа меньше нуля');
    return -1;
  }
  if (MIN >= MAX) {
    // eslint-disable-next-line no-console
    console.log('Не правильный дапазон чисел');
    return -1;
  }

  return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
};

getRandomNumber(9, 27);

const stringLength = (maxStringLength) => maxStringLength <= 140;

stringLength();
