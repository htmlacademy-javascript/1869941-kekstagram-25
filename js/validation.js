const MAX_SYMBOL = 20;
const MAX_HASHTAGS_AMOUNT = 5;

const formUpload = document.querySelector('.img-upload__form');

const inputHashtag = formUpload.querySelector('.text__hashtags');

let errorMessage = '';
const onError = () => errorMessage;


const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__item',
  errorClass: 'img-upload__item--invalid',
  successClass: 'img-upload__item--valid',
  errorTextParent: 'img-upload__item',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error',
});


const hashtagsHandler = (value) => {
  errorMessage = '';

  const inputText = value.toLowerCase().trim();

  if (!inputText) {
    return true;
  }

  const inputArray = inputText.split(/\s+/);

  if (inputArray.length === 0) {
    return true;
  }

  const rules = [
    {
      check: inputArray.some((item, num, arr) => arr.includes(item, num + 1)),
      error: 'Хэш-теги не должны повторться',
    },
    {
      check: inputArray.some((item) => item.indexOf('#', 1) >= 1),
      error: 'Хэш-теги разделються пробелами',
    },
    {
      check: inputArray.some((item) => item.length > MAX_SYMBOL),
      error: `Максимальная длина одного хэш-тега ${MAX_SYMBOL} символов, включая решётку`,
    },
    {
      check: inputArray.length > MAX_HASHTAGS_AMOUNT,
      error: `Нельзя указать больше ${MAX_HASHTAGS_AMOUNT} хэш-тегов`,
    },
    {
      check: inputArray.some((item) => item[0] !== '#'),
      error: 'Хэш-тег должен начинаться с символа #',
    },
    {
      check: inputArray.some((item) => !/^#[a-zа-яё0-9]{1,19}$/i.test(item)),
      error: 'Хэш-тег содержит недопустимые символы, либо не может состоять из одной решётки',
    },
  ];

  return rules.every((rule) => {

    const isInvalid = rule.check;

    if (isInvalid) {
      errorMessage = rule.error;
    }

    return !isInvalid;
  });
};


const onHashtagsInput = () => {
  pristine.validate();
};


inputHashtag.addEventListener('input', onHashtagsInput);

pristine.addValidator(inputHashtag, hashtagsHandler, onError, 2, false);

export { pristine };
