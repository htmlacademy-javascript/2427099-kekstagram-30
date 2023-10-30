import { isEscapeKey } from './utils.js';

const bodyElement = document.querySelector('body');
const picturesElement = document.querySelector('.pictures');
const bigPictureElement = document.querySelector('.big-picture');
const cancelPictureElement = document.querySelector('#picture-cancel');
const pictureImgElement = document.querySelector('.big-picture__img img');
const pictureLikesCountElement = document.querySelector('.likes-count');
const pictureDescriptionElement = document.querySelector('.social__caption');
const socialCommentsElement = document.querySelector('.social__comments');
const commentCountElement = document.querySelector('.social__comment-count');
const commentsCountTotalElement = commentCountElement.querySelector('.social__comment-total-count');
const commentsShownElement = commentCountElement.querySelector('.social__comment-shown-count');
const commentsLoaderElement = document.querySelector('.comments-loader');

const COMMENT_COUNTER = 5;

const createCommentElement = (comment) => {
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

const updateCommentsShownCount = (count) => {
  commentsShownElement.textContent = count;
};

const loadComments = (comments) => {
  let commentCounter = comments.length >= COMMENT_COUNTER ? COMMENT_COUNTER : comments.length;

  const loadMoreComments = () => {
    socialCommentsElement.innerHTML = '';
    const pictureComments = comments.slice(0, commentCounter);
    pictureComments.forEach((comment) => {
      createCommentElement(comment);
    });

    updateCommentsShownCount(commentCounter);

    if (comments.length <= commentCounter) {
      commentsLoaderElement.classList.add('hidden');
    } else {
      commentsLoaderElement.classList.remove('hidden');
    }
  };

  commentsLoaderElement.addEventListener('click', () => {
    if (commentCounter + COMMENT_COUNTER <= comments.length) {
      commentCounter += COMMENT_COUNTER;
      loadMoreComments();
    } else {
      commentCounter = comments.length;
      loadMoreComments();
    }
  });

  loadMoreComments();
};

const renderPictureInfo = (index, pictures) => {
  pictureImgElement.src = pictures[index].url;
  pictureLikesCountElement.textContent = pictures[index].likes;
  pictureDescriptionElement.textContent = pictures[index].description;
  commentsCountTotalElement.textContent = pictures[index].comments.length;

  loadComments(pictures[index].comments);
};

const openBigPicture = (index, pictures) => {
  socialCommentsElement.innerHTML = '';
  bigPictureElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  bodyElement.classList.add('modal-open');
  renderPictureInfo(index, pictures);
};

const onPictureClick = (evt, pictures) => {
  if (evt.target.closest('a.picture')) {
    const linkElement = evt.target.closest('a.picture');
    const pictureElements = Array.from(document.querySelectorAll('.picture'));
    const index = pictureElements.indexOf(linkElement);
    openBigPicture(index, pictures);
  }
};

const closeBigPictureModal = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

const initPictureListeners = (pictures) => {
  picturesElement.addEventListener('click', (evt) => {
    onPictureClick(evt, pictures);
  });

  cancelPictureElement.addEventListener('click', () => {
    closeBigPictureModal();
  });
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPictureModal();
  }
}

export { initPictureListeners };
