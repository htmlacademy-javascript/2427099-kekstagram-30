const PHOTO_DESCRIPTIONS = [
  'Закат на океане.',
  'Городская суета на улицах.',
  'Природный парк с красивыми цветами.',
  'Мост через горную реку.',
  'Семейный пикник в лесу.',
  'Небоскребы в ночном свете.',
  'Пейзаж с озером и горами.',
  'Путешествие на велосипеде по горам.',
  'Старинная церковь в историческом городе.',
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

const createIdGenerator = () => {
  let generatorId = 0;
  return function() {
    generatorId += 1;
    return generatorId;
  };
};

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const generatePhotoId = createIdGenerator();
const generateCommentId = createIdGenerator();

const createComment = () => {
  let message = '';
  const numMessage = Math.random() < 0.5 ? 1 : 2;
  for (let i = 0; i < numMessage; i++) {
    message += `${getRandomArrayElement(MESSAGES) } `;
  }

  return {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: message.trim(),
    name: getRandomArrayElement(NAMES)
  };
};

const createPhoto = () => {
  const photoId = generatePhotoId();
  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(0, 30)}, createComment)
  };
};

Array.from({length: 25}, createPhoto);
