const filterContainer = document.querySelector('.img-filters');
const filterButtons = document.querySelectorAll('.img-filters__button');

// const RANDOM_PICTURES_COUNT = 10;


const onFiltersButtonClick = (evt) => {
  if (evt.target.className === ('img-filters__button')) {
    filterButtons.forEach((btn) => {
      btn.classList.remove('img-filters__button--active');
    });

    evt.target.classList.add('img-filters__button--active');
  }
};


const showFilters = () => {
  filterContainer.classList.remove('img-filters--inactive');

  filterContainer.addEventListener('click', onFiltersButtonClick);
};

export { showFilters };
