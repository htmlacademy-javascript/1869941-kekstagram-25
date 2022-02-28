const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkStringLength = (string, length) => string <= length;

checkStringLength();

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Лютик',
  'Александр',
  'Петр',
  'Педро Моралез',
  'Даша',
  'Паша',
  'Маша',
  'Глаша',
  'Геннадий',
  'Ипполит',
  'Эдмунд',
  'Гера',
  'Зевс',
  'Кратос',
  'Эльза',
  'Федр',
  'Григорий',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const POSTS_COUNT = 25;

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const createPost = (index) => ({
  id: index + 1,
  url: `photos/${getRandomNumber(1, 25)}.jpg`,
  description: '#нетвойне',
  likes: getRandomNumber(15, 200),
  comments: {
    id: index + 1,
    avatar: `img/avatar-${getRandomNumber(1, 6)}svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  },
});

const userPost = Array.from({ length: POSTS_COUNT }, (item, index) => createPost(index));
// eslint-disable-next-line no-console
console.log(userPost);
