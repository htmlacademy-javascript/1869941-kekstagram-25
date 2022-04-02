const sliderContainer = document.querySelector('.effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const picturePreview = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');
const effectLevelValue = document.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

const resetEffectSettings = () => {
  picturePreview.classList = '';
  picturePreview.style.filter = '';

  sliderContainer.style.display = 'none';
};

effectsList.addEventListener('change', (evt) => {
  if (evt.target && evt.target.value === 'none') {
    resetEffectSettings();
  }

  if (evt.target && evt.target.value === 'chrome') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    });
    sliderElement.noUiSlider.on('update', () => {
      effectLevelValue.value = sliderElement.noUiSlider.get();
      picturePreview.style.filter = `grayscale(${effectLevelValue.value})`;
      picturePreview.classList.add('effects__preview--chrome');
      sliderContainer.style.display = 'block';
    });
  }

  if (evt.target && evt.target.value === 'sepia') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    });
    sliderElement.noUiSlider.on('update', () => {
      effectLevelValue.value = sliderElement.noUiSlider.get();
      picturePreview.style.filter = `sepia(${effectLevelValue.value})`;
      picturePreview.classList.add('effects__preview--sepia');
      sliderContainer.style.display = 'block';
    });
  }

  if (evt.target && evt.target.value === 'marvin') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
    sliderElement.noUiSlider.on('update', () => {
      effectLevelValue.value = sliderElement.noUiSlider.get();
      picturePreview.style.filter = `invert(${effectLevelValue.value}%)`;
      picturePreview.classList.add('effects__preview--marvin');
      sliderContainer.style.display = 'block';
    });
  }

  if (evt.target && evt.target.value === 'phobos') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    sliderElement.noUiSlider.on('update', () => {
      effectLevelValue.value = sliderElement.noUiSlider.get();
      picturePreview.style.filter = `blur(${effectLevelValue.value}px)`;
      picturePreview.classList.add('effects__preview--phobos');
      sliderContainer.style.display = 'block';
    });
  }

  if (evt.target && evt.target.value === 'heat') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    sliderElement.noUiSlider.on('update', () => {
      effectLevelValue.value = sliderElement.noUiSlider.get();
      picturePreview.style.filter = `brightness(${effectLevelValue.value})`;
      picturePreview.classList.add('effects__preview--heat');
      sliderContainer.style.display = 'block';
    });
  }
});

export { resetEffectSettings };
