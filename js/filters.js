import { shufleArray } from './util.js';

const filterContainer = document.querySelector('.img-filters');
const filterButtons = document.querySelectorAll('.img-filters__button');

// const filterDefault = document.getElementById('filter-default');
// const filterRandom = document.getElementById('filter-random');
// const filterDiscussed = document.getElementById('filter-discussed');


const RANDOM_PICTURES_COUNT = 10;


const filterByDefault = (pictures) => pictures;


const filterByComments = (pictures) => {
  const picturesCopy = pictures.slice();

  return picturesCopy.sort((a, b) => a.comments.length < b.comments.length ? 1 : -1);
};


const filterByRandom = (pictures) => shufleArray(pictures).slice(0, RANDOM_PICTURES_COUNT);


const addFilters = () => {
  filterContainer.addEventListener('click', (evt) => {
    if (evt.target.className === ('img-filters__button')) {
      filterButtons.forEach((btn) => {
        btn.classList.remove('img-filters__button--active');
      });
      evt.target.classList.add('img-filters__button--active');
    }
  });
};


const setFilterClick = (cb) => {
  filterContainer.classList.remove('img-filters--inactive');

  filterButtons.forEach((btn) => btn.addEventListener('click', () => {
    addFilters();
    cb();
  }));
};


export { setFilterClick, filterByDefault, filterByRandom, filterByComments };
