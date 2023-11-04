import { getPictures } from './data.js';
import { showPictures } from './thumbnail.js';
import { initPictureListeners } from './big-picture.js';
import { initPictureFormListener } from './picture-form.js';

const pictures = getPictures();

showPictures(pictures);

initPictureListeners(pictures);

initPictureFormListener();
