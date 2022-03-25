// import { escKey } from './util.js';

const documentBody = document.querySelector('body');

const uploadInput = documentBody.querySelector('.img-upload__input');
const uploadOverlay = documentBody.querySelector('.img-upload__overlay');
const closeFormButton = documentBody.querySelector('.img-upload__cancel');

const openForm = () => {
  uploadOverlay.classList.remove('hidden');
  documentBody.classList.add('modal-open');
};

const closeForm = () => {
  uploadOverlay.classList.add('hidden');
  documentBody.classList.remove('modal-open');
  uploadInput.textContent = '';
};

// const onEscKeyDown = (evt) => {
//   evt.preventDefault();
//   if (escKey(evt)) {
//     closeForm();

//     documentBody.removeEventListener('keydown', onEscKeyDown);
//   }
// };

const onUploadFileClick = () => {
  openForm();

  // documentBody.addEventListener('keydown', onEscKeyDown);
};

const onCloseFormButton = () => {
  closeForm();
};

uploadInput.addEventListener('change', onUploadFileClick);

closeFormButton.addEventListener('click', onCloseFormButton);

