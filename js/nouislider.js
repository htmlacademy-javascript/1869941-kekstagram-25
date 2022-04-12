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

const Effect = {
  'chrome': {
    RANGE: {
      MIN: 0,
      MAX: 1
    },
    START: 1,
    STEP: 0.1,
    EFFECT: 'grayscale',
    DISPLAY: 'block',
    UNIT: '',
  },
  'sepia': {
    RANGE: {
      MIN: 0,
      MAX: 1
    },
    START: 1,
    STEP: 0.1,
    EFFECT: 'sepia',
    DISPLAY: 'block',
    UNIT: '',
  },
  'marvin': {
    RANGE: {
      MIN: 0,
      MAX: 100,
    },
    START: 100,
    STEP: 1,
    EFFECT: 'invert',
    DISPLAY: 'block',
    UNIT: '%',
  },
  'phobos': {
    RANGE: {
      MIN: 0,
      MAX: 3,
    },
    START: 3,
    STEP: 0.1,
    EFFECT: 'blur',
    DISPLAY: 'block',
    UNIT: 'px',
  },
  'heat': {
    RANGE: {
      MIN: 1,
      MAX: 3,
    },
    START: 3,
    STEP: 0.1,
    EFFECT: 'brightness',
    DISPLAY: 'block',
    UNIT: '',
  },
};


const updateSliderOptions = ({ RANGE: { MIN, MAX }, START, STEP }) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: MIN,
      max: MAX,
    },
    start: START,
    step: STEP,
  });
};


const updateSliderEffects = (filters) => {
  sliderElement.noUiSlider.on('update', () => {
    effectLevelValue.value = sliderElement.noUiSlider.get();
    picturePreview.style.filter = `${Effect[filters].EFFECT}(${effectLevelValue.value}${Effect[filters].UNIT})`;
    picturePreview.classList.add(`effects__preview--${filters}`);
    sliderContainer.style.display = `${Effect[filters].DISPLAY}`;
  });
};


const resetEffectSettings = () => {
  picturePreview.style.filter = '';
  picturePreview.classList = '';
  sliderContainer.style.display = 'none';
};

effectsList.addEventListener('change', (evt) => {
  const currentEffect = evt.target.value;

  if (currentEffect === 'none') {
    resetEffectSettings();
  }

  if (currentEffect === 'chrome') {
    updateSliderOptions(Effect.chrome);
    updateSliderEffects(currentEffect);
  }

  if (currentEffect === 'sepia') {
    updateSliderOptions(Effect.sepia);
    updateSliderEffects(currentEffect);
  }

  if (currentEffect === 'marvin') {
    updateSliderOptions(Effect.marvin);
    updateSliderEffects(currentEffect);
  }

  if (currentEffect === 'phobos') {
    updateSliderOptions(Effect.phobos);
    updateSliderEffects(currentEffect);
  }

  if (currentEffect === 'heat') {
    updateSliderOptions(Effect.heat);
    updateSliderEffects(currentEffect);
  }
});


export { resetEffectSettings };
