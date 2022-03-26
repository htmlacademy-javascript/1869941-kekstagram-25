import { escKey } from './util.js';

const documentBody = document.querySelector('body');

const uploadInput = documentBody.querySelector('.img-upload__input');
const uploadOverlay = documentBody.querySelector('.img-upload__overlay');
const closeFormButton = documentBody.querySelector('.img-upload__cancel');

const closeForm = () => {
  uploadOverlay.classList.add('hidden');
  documentBody.classList.remove('modal-open');

  uploadInput.textContent = '';
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

const onUploadFileClick = () => {
  uploadOverlay.classList.remove('hidden');
  documentBody.classList.add('modal-open');

  closeFormButton.addEventListener('click', onCloseFormButton);

  documentBody.addEventListener('keydown', onEscKeyDown);
};

uploadInput.addEventListener('change', onUploadFileClick);
