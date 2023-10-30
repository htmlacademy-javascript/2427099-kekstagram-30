import { getPictures } from './data.js';
import { showPictures } from './thumbnail.js';
import { initPictureListeners } from './big-picture.js';

const pictures = getPictures();

showPictures(pictures);

initPictureListeners(pictures);
