import { renderPictures } from './miniatures.js';
import { setFormSubmit } from './validation.js';
import { closeForm } from './form.js';
import { getDate } from './api.js';

getDate((pictures) => {
  renderPictures(pictures);
});

setFormSubmit(closeForm);
