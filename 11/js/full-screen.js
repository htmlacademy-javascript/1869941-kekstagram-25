import { escKey, numDecline } from './util.js';

const COMMENTS_COUNT = 5;

let comments = [];
let currentCount = COMMENTS_COUNT;

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

const onOutsideClick = (evt) => {
  if (evt.target.className === 'big-picture overlay') {
    closeFullScreenPicture();

    documentBody.removeEventListener('click', onOutsideClick);
  }
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

const createComments = (dataComments) => {
  removeComments();

  dataComments.forEach((comment) => {
    commentFragment.append(createComment(comment));
  });

  usersCommentContainer.append(commentFragment);

  if (currentCount > comments.length) {
    currentCount = comments.length;
    loadMoreButton.classList.add('hidden');
  }

  commentsCounter.textContent = `${currentCount} из ${comments.length} ${numDecline(comments.length, 'комментария', 'комментариев', 'комментариев')}`;
};

const onLoadMoreCommentsClick = () => {
  currentCount += COMMENTS_COUNT;

  currentCount = currentCount > comments.length ? comments.length : currentCount;

  createComments(comments.slice(0, currentCount));

  if (currentCount === comments.length) {
    loadMoreButton.classList.add('hidden');
    loadMoreButton.removeEventListener('click', onLoadMoreCommentsClick);
  }
};

const fullScreenMode = (picture) => {
  fullScreenPicture.src = picture.url;
  likesCount.textContent = picture.likes;
  pictureDescription.textContent = picture.description;

  comments = picture.comments.slice();
  currentCount = COMMENTS_COUNT;

  if (comments.length > 0) {
    createComments(comments.slice(0, currentCount));

    if (comments.length > COMMENTS_COUNT) {
      loadMoreButton.classList.remove('hidden');
      loadMoreButton.addEventListener('click', onLoadMoreCommentsClick);
    }
  } else {
    loadMoreButton.classList.add('hidden');
    loadMoreButton.removeEventListener('click', onLoadMoreCommentsClick);
  }

  fullScreenOpen.classList.remove('hidden');

  documentBody.classList.add('modal-open');

  fullScreenClose.addEventListener('click', onCloseClick);
  documentBody.addEventListener('keydown', onEscKeyDown);
  documentBody.addEventListener('click', onOutsideClick);
};

export { fullScreenMode };
