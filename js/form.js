import { escKey } from './util.js';
import { resetScaleModifier } from './scale.js';
import { resetEffectSettings } from './nouislider.js';

const documentBody = document.querySelector('body');

const uploadInput = documentBody.querySelector('.img-upload__input');
const uploadOverlay = documentBody.querySelector('.img-upload__overlay');
const closeFormButton = documentBody.querySelector('.img-upload__cancel');

const inputHashtag = documentBody.querySelector('.text__hashtags');
const inputComment = documentBody.querySelector('.text__description');

const errorTemplate = documentBody.querySelector('#error').content.querySelector('.error');
const errorCloseButton = errorTemplate.querySelector('.error__button');

const successTemplate = documentBody.querySelector('#success').content.querySelector('.success');
const successCloseButton = successTemplate.querySelector('.success__button');

const resetForm = () => {
  inputHashtag.value = '';
  inputComment.value = '';
  uploadInput.value = '';
};

const closeForm = () => {
  uploadOverlay.classList.add('hidden');
  documentBody.classList.remove('modal-open');

  resetForm();
  resetScaleModifier();
  resetEffectSettings();
};

const onOutsideClick = (evt) => {
  if (evt.target.className === 'img-upload__overlay') {
    closeForm();

    documentBody.removeEventListener('click', onOutsideClick);
  }
};

const onOutsideSuccessAlartClick = (evt) => {
  if (evt.target.className !== 'success__inner') {
    successTemplate.remove();
    closeForm();

    documentBody.removeEventListener('click', onOutsideSuccessAlartClick);
  }
};

const onOutsideErrorAlartClick = (evt) => {
  if (evt.target.className !== 'error__inner') {
    errorTemplate.remove();

    documentBody.removeEventListener('click', onOutsideErrorAlartClick);
  }
};

const onCloseFormButton = () => {
  closeForm();
};

const onEscKeyDown = (evt) => {
  if (escKey(evt)
    && !evt.target.classList.contains('text__hashtags')
    && !evt.target.classList.contains('text__description')) {

    closeForm();

    documentBody.removeEventListener('keydown', onEscKeyDown);
  }
};

const onErrorCloseButton = () => {
  errorTemplate.remove();
};

const errorAlert = () => {
  documentBody.append(errorTemplate);

  closeForm();

  errorCloseButton.addEventListener('click', onErrorCloseButton);
  documentBody.addEventListener('click', onOutsideErrorAlartClick);
};

const onSuccessCloseButtonClick = () => {
  successTemplate.remove();
  closeForm();
};

const successAlert = () => {
  documentBody.append(successTemplate);

  successCloseButton.addEventListener('click', onSuccessCloseButtonClick);
  documentBody.addEventListener('click', onOutsideSuccessAlartClick);
};

const onUploadFileClick = () => {
  uploadOverlay.classList.remove('hidden');
  documentBody.classList.add('modal-open');

  closeFormButton.addEventListener('click', onCloseFormButton);
  documentBody.addEventListener('keydown', onEscKeyDown);
  documentBody.addEventListener('click', onOutsideClick);
};

uploadInput.addEventListener('change', onUploadFileClick);

export { closeForm, errorAlert, successAlert };
