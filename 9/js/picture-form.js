import '../vendor/pristine/pristine.min.js';
import { isEscapeKey } from './utils.js';

const bodyElement = document.querySelector('body');
const pictureInputElement = document.querySelector('.img-upload__input');
const pictureOverlayElement = document.querySelector('.img-upload__overlay');
const uploadCancelElement = document.querySelector('#upload-cancel');
const pictureFormElement = document.querySelector('.img-upload__form');
const hashtagInputElement = pictureFormElement.querySelector('.text__hashtags');
const commentTextAreaElement = pictureFormElement.querySelector('.text__description');

const openPictureForm = () => {
  pictureOverlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const pristine = new Pristine(pictureFormElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const isHashtagValid = (value) => {
  if (value !== '') {
    const hashtags = value.split(' ');
    const regExp = /^#[a-zа-яё0-9]{1,19}$/i;
    for (const hashtag of hashtags) {
      if (!regExp.test(hashtag)) {
        return false;
      }
    }
  }

  return true;
};

const isHashtagUnique = (value) => {
  const hashtags = value.split(' ');

  const uniqueHashtags = new Set();

  for (const hashtag of hashtags) {
    const lowercaseHashtag = hashtag.toLowerCase();
    if (uniqueHashtags.has(lowercaseHashtag)) {
      return false;
    }

    uniqueHashtags.add(lowercaseHashtag);
  }

  return true;
};

const validateHashtagsLength = (value) => {
  const hashtags = value.split(' ');
  return hashtags.length <= 5;
};

pristine.addValidator(
  hashtagInputElement,
  isHashtagValid,
  'Введён невалидный хэш-тег'
);

pristine.addValidator(
  hashtagInputElement,
  isHashtagUnique,
  'Хэш-теги повторяются'
);

pristine.addValidator(
  hashtagInputElement,
  validateHashtagsLength,
  'Нельзя указать больше пяти хэш-тегов'
);

const validateComment = (comment) => comment.length <= 140;

pristine.addValidator(
  commentTextAreaElement,
  validateComment,
  'Длина комментария не может составлять больше 140 символов'
);

const closePictureForm = () => {
  pictureInputElement.value = '';
  hashtagInputElement.value = '';
  commentTextAreaElement.value = '';
  pictureOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const initPictureFormListener = () => {
  pictureInputElement.addEventListener('change', () => {
    openPictureForm();
  });

  uploadCancelElement.addEventListener('click', () => {
    closePictureForm();
  });

  hashtagInputElement.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.stopPropagation();
    }
  });

  commentTextAreaElement.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.stopPropagation();
    }
  });

  pictureFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      closePictureForm();
    }
  });
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePictureForm();
  }
}

export { initPictureFormListener };