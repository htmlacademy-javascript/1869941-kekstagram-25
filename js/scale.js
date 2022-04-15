const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const picturePreview = document.querySelector('.img-upload__preview img');

const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;

const getCurrentValue = (string) => parseFloat(string.value);


const scaleChange = () => {
  picturePreview.style.transform = `scale(${getCurrentValue(scaleValue) / 100})`;
};


const onScaleSmallerButtonClick = () => {
  if (getCurrentValue(scaleValue) === MIN_SCALE) {
    return false;
  }

  scaleValue.value = `${getCurrentValue(scaleValue) - SCALE_STEP}%`;

  scaleChange();
};


const onScaleBiggerButtonClick = () => {
  if (getCurrentValue(scaleValue) === MAX_SCALE) {
    return false;
  }

  scaleValue.value = `${getCurrentValue(scaleValue) + SCALE_STEP}%`;

  scaleChange();
};


const resetScaleModifier = () => {
  scaleValue.value = `${MAX_SCALE}%`;
  picturePreview.style.transform = '';
};


scaleSmaller.addEventListener('click', onScaleSmallerButtonClick);
scaleBigger.addEventListener('click', onScaleBiggerButtonClick);

export { resetScaleModifier };
