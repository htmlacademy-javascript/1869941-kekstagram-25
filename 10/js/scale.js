const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const picturePreview = document.querySelector('.img-upload__preview img');

const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;

const currontValue = (string) => parseFloat(string.value);

const scaleChange = () => {
  picturePreview.style.transform = `scale(${currontValue(scaleValue) / 100})`;
};

const onScaleSmallerButtonClick = () => {
  if (currontValue(scaleValue) === MIN_SCALE) {
    return false;
  }

  scaleValue.value = `${currontValue(scaleValue) - SCALE_STEP}%`;

  scaleChange();
};

const onScaleBiggerButtonClick = () => {
  if (currontValue(scaleValue) === MAX_SCALE) {
    return false;
  }

  scaleValue.value = `${currontValue(scaleValue) + SCALE_STEP}%`;

  scaleChange();
};

const resetScaleModifier = () => {
  picturePreview.style.transform = '';
};

scaleSmaller.addEventListener('click', onScaleSmallerButtonClick);
scaleBigger.addEventListener('click', onScaleBiggerButtonClick);

export { resetScaleModifier };
