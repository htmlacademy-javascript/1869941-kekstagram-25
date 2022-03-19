import { getRandomNumber } from './util.js';

const DESCRIPTIONS = [
  '#нетвойне',
  'Кекс на чиле',
  'Кекс на расслабоне',
  'Cебяшка',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

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

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const getComment = () => ({
  id: Math.floor(Math.random().toFixed(4) * 10000),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const getComments = () => Array.from({ length: getRandomNumber(1, 3) }, getComment);

const createPost = (index) => ({
  id: index + 1,
  url: `photos/${getRandomNumber(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(15, 200),
  comments: getComments(),
});
const POSTS_COUNT = 25;

const userPost = Array.from({ length: POSTS_COUNT }, (item, index) => createPost(index));

export { userPost, getComments };
