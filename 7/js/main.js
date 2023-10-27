import { getPictures } from './data';
import { showPictures } from './thumbnail';
import { showBigPicture } from './big-picture';

const pictures = getPictures();

showPictures(pictures);

showBigPicture(pictures);
