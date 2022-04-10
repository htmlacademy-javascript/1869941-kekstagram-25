import { renderPictures } from './miniatures.js';
import { setFormSubmit } from './validation.js';
import { closeForm } from './form.js';
import { getData } from './api.js';

getData((pictures) => {
  renderPictures(pictures);
});

setFormSubmit(closeForm);
