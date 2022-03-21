import { escKey } from './util.js';

const documentBody = document.querySelector('body');

const fullScreenOpen = documentBody.querySelector('.big-picture');
const fullScreenPicture = fullScreenOpen.querySelector('.big-picture__img img');
const fullScreenClose = fullScreenOpen.querySelector('.big-picture__cancel');

const likesCount = documentBody.querySelector('.likes-count');

const pictureDescription = documentBody.querySelector('.social__caption');
const commentCount = documentBody.querySelector('.social__comment-count');

const commentsLoader = documentBody.querySelector('.comments-loader');


const usersCommentContainer = documentBody.querySelector('.social__comments');
const usersCommentTemplate = documentBody.querySelector('#social-comment')
  .content.querySelector('.social__comment');

const commentFragment = document.createDocumentFragment();

const removeComments = () => {
  documentBody.querySelectorAll('.social__comment').forEach((elem) => {
    elem.remove();
  });
};

const closeFullScreenPicture = () => {
  fullScreenOpen.classList.add('hidden');

  commentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  documentBody.classList.remove('modal-open');
};

const onCloseClick = () => {
  closeFullScreenPicture();

  fullScreenClose.removeEventListener('click', onCloseClick);
};

const onEscKeyDown = (esc) => {
  if (escKey(esc)) {
    closeFullScreenPicture();

    documentBody.removeEventListener('keydown', onEscKeyDown);
  }
};

const createComment = (comment) => {
  const commentElement = usersCommentTemplate.cloneNode(true);

  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;

  return commentElement;
};

const createComments = (comments) => {
  comments.forEach((comment) => {
    commentFragment.append(createComment(comment));
  });

  usersCommentContainer.append(commentFragment);
};

const fullScreenMode = (picture) => {
  fullScreenPicture.src = picture.url;
  likesCount.textContent = picture.likes;
  pictureDescription.textContent = picture.description;

  removeComments();

  fullScreenOpen.classList.remove('hidden');

  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  documentBody.classList.add('modal-open');

  fullScreenClose.addEventListener('click', onCloseClick);

  documentBody.addEventListener('keydown', onEscKeyDown);
};

export { fullScreenMode, createComments };
