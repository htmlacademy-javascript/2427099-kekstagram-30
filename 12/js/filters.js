import { getRandomInteger, debounce } from './utils.js';
import { showPictures } from './thumbnail.js';

const FilterType = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed'
};

const MAX_RANDOM_PICTURES = 10;

const filterDefaultElement = document.querySelector('#filter-default');
const filterRandomElement = document.querySelector('#filter-random');
const filterDiscussedElement = document.querySelector('#filter-discussed');
const pictureFilterElement = document.querySelector('.img-filters');

const filters = {
  [FilterType.DEFAULT]: (pictures) => pictures,
  [FilterType.RANDOM]: (pictures) => {
    const randomPictureList = [];
    const max = Math.min(MAX_RANDOM_PICTURES, pictures.length);

    if (pictures.length === 0) {
      return randomPictureList;
    }

    while (randomPictureList.length < max) {
      const index = getRandomInteger(0, pictures.length - 1);
      if (!randomPictureList.includes(index)) {
        randomPictureList.push(index);
      }
    }
    return randomPictureList.map((index) => pictures[index]);
  },
  [FilterType.DISCUSSED]: (pictures) => pictures.slice().sort((item1, item2) => item2.comments.length - item1.comments.length)
};

const setFilter = (evt, filter, pictures) => {
  const filteredPictures = filters[filter](pictures);
  const picturesElement = document.querySelectorAll('.picture');
  picturesElement.forEach((picture) => picture.remove());
  showPictures(filteredPictures);
  const currentFilterElement = document.querySelector('.img-filters__button--active');
  currentFilterElement.classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
};

const debouncedSetFilters = debounce(setFilter);

const initFilters = (pictures) => {
  pictureFilterElement.classList.remove('img-filters--inactive');
  filterDefaultElement.addEventListener('click', (evt) => {
    debouncedSetFilters(evt, FilterType.DEFAULT, pictures);
  });
  filterRandomElement.addEventListener('click', (evt) => {
    debouncedSetFilters(evt, FilterType.RANDOM, pictures);
  });
  filterDiscussedElement.addEventListener('click', (evt) => {
    debouncedSetFilters(evt, FilterType.DISCUSSED, pictures);
  });
};

export { initFilters };
