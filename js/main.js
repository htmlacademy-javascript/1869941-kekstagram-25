import { renderPictures } from './miniatures.js';
import { closeForm, setFormSubmit } from './form.js';
import { getData } from './api.js';
import { setFilterClick, filterByDefault, filterByRandom, filterByComments } from './filters.js';
import { debounce } from './util.js';
import './upload-picture.js';

const RENDER_DELAY = 500;

getData((pictures) => {
  renderPictures(pictures);

  setFilterClick(debounce(
    () => renderPictures(filterByDefault(pictures)),
    RENDER_DELAY,
  ));

  setFilterClick(debounce(
    () => renderPictures(filterByRandom(pictures)),
    RENDER_DELAY,
  ));

  setFilterClick(debounce(
    () => renderPictures(filterByComments(pictures)),
    RENDER_DELAY,
  ));
});

setFormSubmit(closeForm);
