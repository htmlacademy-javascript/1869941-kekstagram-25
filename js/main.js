import { renderPictures } from './miniatures.js';
import { setFormSubmit } from './validation.js';
import { closeForm } from './form.js';
import { getData } from './api.js';
import { showFilters } from './filters.js';
import './upload-picture.js';


getData((pictures) => {
  renderPictures(pictures);
  showFilters();
});


setFormSubmit(closeForm);
