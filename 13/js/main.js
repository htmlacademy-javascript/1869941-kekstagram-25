import { renderPictures } from './miniatures.js';
import { closeForm, setFormSubmit } from './form.js';
import { getData } from './api.js';
import { addFilters } from './filters.js';
import './upload-picture.js';

let pictures = [];

const getPictures = () => pictures;


getData((data) => {
  pictures = data.slice();
  addFilters();
  renderPictures(pictures);
});


setFormSubmit(closeForm);

export { getPictures };
