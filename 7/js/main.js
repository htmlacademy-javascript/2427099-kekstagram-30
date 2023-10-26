import { getPictures } from './data';
import { showPictures } from './thumbnail';
import { showBigPicture } from './big-picture';

const pictures = getPictures();

showPictures(pictures);

const thumbnailsElement = document.querySelectorAll('.picture');

showBigPicture(pictures, thumbnailsElement);
