import { fullScreenMode } from './full-screen.js';

const usersPictureContainer = document.querySelector('.pictures');
const usersPictureTemplate = document.querySelector('#picture').content;

const pictureFragment = document.createDocumentFragment();

const renderPicture = (picture) => {
  const pictureElement = usersPictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

  addEventListener('click', () => {
    fullScreenMode();
  });

  return pictureElement;
};

const renderPictures = (pictures) => {
  pictures.forEach((picture) => {
    pictureFragment.append(renderPicture(picture));
  });

  usersPictureContainer.append(pictureFragment);
};

export { renderPictures };
