import { isEscapeKey } from './utils';

const thumbnailsElement = document.querySelector('.pictures');
const bigPictureElement = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const closeButttonElement = document.querySelector('#picture-cancel');
const pictureImgElement = document.querySelector('.big-picture__img img');
const pictureLikesCountElement = document.querySelector('.likes-count');
const pictureDescriptionElement = document.querySelector('.social__caption');
const commentCountElement = document.querySelector('.social__comment-count');
const commentsCountTotalElement = document.querySelector('.social__comment-total-count');
const socialCommentsElement = document.querySelector('.social__comments');
const commentsLoaderElement = document.querySelector('.comments-loader');

const loadComments = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  const avatarImgElement = document.createElement('img');
  avatarImgElement.classList.add('social__picture');
  avatarImgElement.src = comment.avatar;
  avatarImgElement.alt = comment.name;
  avatarImgElement.width = 35;
  avatarImgElement.height = 35;

  const socialTextElement = document.createElement('p');
  socialTextElement.classList.add('social__text');
  socialTextElement.textContent = comment.message;

  commentElement.appendChild(avatarImgElement);
  commentElement.appendChild(socialTextElement);

  socialCommentsElement.appendChild(commentElement);
};

const showPictureInfo = (index, pictures) => {
  pictureImgElement.src = pictures[index].url;
  pictureLikesCountElement.textContent = pictures[index].likes;
  pictureDescriptionElement.textContent = pictures[index].description;
  commentsCountTotalElement.textContent = pictures[index].comments.length;

  pictures[index].comments.forEach((comment) => {
    loadComments(comment);
  });
};

const openBigPicture = (index, pictures) => {
  bigPictureElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  bodyElement.classList.add('modal-open');
  commentCountElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');
  showPictureInfo(index, pictures);
};

const showBigPicture = (pictures) => {
  thumbnailsElement.addEventListener('click', (evt) => {
    if (evt.target.closest('a.picture')) {
      const linkElement = evt.target.closest('a.picture');
      const pictureElements = Array.from(document.querySelectorAll('.picture'));
      const index = pictureElements.indexOf(linkElement);
      openBigPicture(index, pictures);
    }
  });
};

const closeBigPictureModal = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  socialCommentsElement.innerHTML = '';

  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPictureModal();
  }
}

closeButttonElement.addEventListener('click', () => {
  closeBigPictureModal();
});

export { showBigPicture };
