import { createIdGenerator, getRandomInteger, getRandomArrayElement } from './utils';

const AVATAR_COUNT = 6;
const COMMENTS_COUNT = 30;
const PICTURE_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;

const PICTURE_DESCRIPTIONS = [
  'Закат на океане.',
  'Городская суета на улицах.',
  'Природный парк с красивыми цветами.',
  'Мост через горную реку.',
  'Семейный пикник в лесу.',
  'Небоскребы в ночном свете.',
  'Пейзаж с озером и горами.',
  'Путешествие на велосипеде по горам.',
  'Старинный дом в историческом городе.',
  'Романтический ужин на берегу реки.'
];

const NAMES = [
  'Анна',
  'Иван',
  'Мария',
  'Александр',
  'Екатерина',
  'Сергей',
  'Ольга',
  'Дмитрий',
  'Татьяна',
  'Павел',
  'Наталья',
  'Андрей',
  'Елена',
  'Максим',
  'Юлия',
  'Артем',
  'Оксана',
  'Владимир',
  'Людмила',
  'Георгий',
  'Нина',
  'Антон',
  'Олеся',
  'Глеб',
  'Виктория',
  'Василиса',
  'Кирилл',
  'София',
  'Ирина',
  'Роман'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const generatePictureId = createIdGenerator();
const generateCommentId = createIdGenerator();

const createMessage = () => Array.from({ length: getRandomInteger(1, 2) }, () => getRandomArrayElement(MESSAGES)).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES)
});

const createPicture = () => {
  const pictureId = generatePictureId();
  return {
    id: pictureId,
    url: `photos/${pictureId}.jpg`,
    description: getRandomArrayElement(PICTURE_DESCRIPTIONS),
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: Array.from({ length: getRandomInteger(0, COMMENTS_COUNT) }, createComment)
  };
};

const getPictures = () => Array.from({ length: PICTURE_COUNT }, createPicture);

export { getPictures };
