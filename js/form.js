import { escKey } from './util.js';
import { resetScaleModifier } from './scale.js';
import { resetEffectSettings } from './nouislider.js';
import { pristine } from './validation.js';
import { sendData } from './api.js';

const documentBody = document.querySelector('body');

const formUpload = documentBody.querySelector('.img-upload__form');
const uploadInput = formUpload.querySelector('.img-upload__input');
const uploadOverlay = formUpload.querySelector('.img-upload__overlay');
const closeFormButton = formUpload.querySelector('.img-upload__cancel');
const submitButton = formUpload.querySelector('.img-upload__submit');

const errorTemplate = documentBody.querySelector('#error').content.querySelector('.error');
const errorCloseButton = errorTemplate.querySelector('.error__button');

const successTemplate = documentBody.querySelector('#success').content.querySelector('.success');
const successCloseButton = successTemplate.querySelector('.success__button');


const closeForm = () => {
  uploadOverlay.classList.add('hidden');
  documentBody.classList.remove('modal-open');

  formUpload.reset();
  resetScaleModifier();
  resetEffectSettings();
};


const onOutsideSuccessAlartClick = (evt) => {
  if (evt.target.className !== 'success__inner') {
    successTemplate.remove();
    submitButton.disabled = false;

    closeForm();

    documentBody.removeEventListener('click', onOutsideSuccessAlartClick);
  }
};


const onOutsideErrorAlartClick = (evt) => {
  if (evt.target.className !== 'error__inner') {
    errorTemplate.remove();
    submitButton.disabled = false;

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
  submitButton.disabled = false;
};


const errorAlert = () => {
  documentBody.append(errorTemplate);

  closeForm();

  errorCloseButton.addEventListener('click', onErrorCloseButton);
  documentBody.addEventListener('click', onOutsideErrorAlartClick);
};


const onSuccessCloseButtonClick = () => {
  successTemplate.remove();
  submitButton.disabled = false;

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

  resetEffectSettings();

  closeFormButton.addEventListener('click', onCloseFormButton);
  documentBody.addEventListener('keydown', onEscKeyDown);
};


const setFormSubmit = (onSuccess) => {
  formUpload.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (pristine.validate()) {
      submitButton.disabled = true;
      sendData(
        () => {
          onSuccess();
          successAlert();
        },
        () => {
          errorAlert();
        },
        new FormData(evt.target));
    }
  });
};
uploadInput.addEventListener('change', onUploadFileClick);


export { closeForm, setFormSubmit };
