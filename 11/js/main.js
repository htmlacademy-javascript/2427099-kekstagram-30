import { loadPictures } from './api.js';
import { showPictures } from './thumbnail.js';
import { initPictureListeners } from './big-picture.js';
import { initPictureFormListener } from './picture-form.js';
import { showLoadErrorMessage } from './messages.js';

const bootstrap = async () => {
  try {
    const pictures = await loadPictures();
    showPictures(pictures);
    initPictureListeners(pictures);
    initPictureFormListener();
  } catch {
    showLoadErrorMessage();
  }

};

bootstrap();
