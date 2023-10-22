const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureListFragment = document.createDocumentFragment();

const showPictures = (pictures) => {
  pictures.forEach(({url, description, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const pictureElementImg = pictureElement.querySelector('.picture__img');
    pictureElementImg.src = url;
    pictureElementImg.alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureListFragment.appendChild(pictureElement);
  });

  picturesList.appendChild(pictureListFragment);
};

export { showPictures };
