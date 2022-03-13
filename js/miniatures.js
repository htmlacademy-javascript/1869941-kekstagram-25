import { userPost } from './data.js';

const usersPictureContainer = document.querySelector('.pictures');
const usersPictureTemplate = document.querySelector('#picture').content;
const createPicture = userPost;

const pictureFragment = document.createDocumentFragment();

createPicture.forEach(({ url, likes, comments }) => {
  const pictureElement = usersPictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureFragment.append(pictureElement);
});

usersPictureContainer.append(pictureFragment);
