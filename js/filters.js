import { shuffleArray, debounce } from './util.js';
import { getPictures } from './main.js';
import { renderPictures } from './miniatures.js';

const RANDOM_PICTURES_COUNT = 10;
const RENDER_DELAY = 500;

const filterContainer = document.querySelector('.img-filters');

const Filter = {
  'filter-default': () => getPictures().slice(),
  'filter-random': () => shuffleArray(getPictures().slice()).slice(0, RANDOM_PICTURES_COUNT),
  'filter-discussed': () => getPictures().slice().sort((a, b) => a.comments.length < b.comments.length ? 1 : -1)
};


const addFilters = () => {
  filterContainer.classList.remove('img-filters--inactive');

  const onFilterClick = (evt) => {
    if (evt.target.classList.contains('img-filters__button')) {

      const showSortPictures = debounce(() => {
        renderPictures(Filter[evt.target.id]());
      }, RENDER_DELAY);

      const selectedButton = document.querySelector('.img-filters__button--active');

      if (selectedButton) {
        selectedButton.classList.remove('img-filters__button--active');
      }

      showSortPictures();

      evt.target.classList.add('img-filters__button--active');
    }
  };

  filterContainer.addEventListener('click', onFilterClick);
};


export { addFilters };
