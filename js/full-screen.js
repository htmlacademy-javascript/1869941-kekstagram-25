import { escKey } from './util.js';

const COMMENTS_COUNT = 5;

let currentComments = [];

const documentBody = document.querySelector('body');

const fullScreenOpen = documentBody.querySelector('.big-picture');
const fullScreenPicture = fullScreenOpen.querySelector('.big-picture__img img');
const fullScreenClose = fullScreenOpen.querySelector('.big-picture__cancel');

const likesCount = documentBody.querySelector('.likes-count');

const pictureDescription = documentBody.querySelector('.social__caption');

const loadMoreButton = documentBody.querySelector('.social__comments-loader');

const commentsCounter = documentBody.querySelector('.social__comment-count');

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
  documentBody.classList.remove('modal-open');
};

const onEscKeyDown = (evt) => {
  if (escKey(evt)) {
    closeFullScreenPicture();

    documentBody.removeEventListener('keydown', onEscKeyDown);
  }
};

const onCloseClick = () => {
  closeFullScreenPicture();

  fullScreenClose.removeEventListener('click', onCloseClick);
  documentBody.removeEventListener('keydown', onEscKeyDown);
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

  createComments(picture.comments.slice(0, COMMENTS_COUNT));

  fullScreenOpen.classList.remove('hidden');

  documentBody.classList.add('modal-open');

  fullScreenClose.addEventListener('click', onCloseClick);
  documentBody.addEventListener('keydown', onEscKeyDown);
};

export { fullScreenMode };
