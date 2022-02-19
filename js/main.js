function getRandomNumber(minNumber, maxNumber) {
  const MIN = Math.ceil(minNumber);
  const MAX = Math.floor(maxNumber);

  if (MIN < 0 || MAX < 0) {
    return 'Числа меньше нуля';
  } else if (MIN > MAX) {
    return 'Не правильный диапазон цифр';
  }

  return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
}

getRandomNumber();

function stringLength(maxStringLength) {
  return maxStringLength <= 140;
}

stringLength();
