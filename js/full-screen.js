const fullScreen = document.querySelector('.big-picture');
const fullScreenClose = document.querySelector('.big-picture__cancel');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const documentBody = document.querySelector('body');
const escKey = (evt) => evt.key === 'Escape';

const fullScreenMode = () => {
  fullScreen.classList.remove('hidden');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  documentBody.classList.add('modal-open');
  fullScreenClose.addEventListener('click', () => {
    fullScreen.classList.add('hidden');
    commentCount.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
    documentBody.classList.remove('modal-open');
  });
  document.addEventListener('keydown', (evt) => {
    if (escKey(evt)) {
      evt.preventDefault();
      fullScreen.classList.add('hidden');
      commentCount.classList.remove('hidden');
      commentsLoader.classList.remove('hidden');
      documentBody.classList.remove('modal-open');
    }
  });
};

export { fullScreenMode };
