import getRandomNum from '../getRandomNum.js';

const description = 'What number is missing in the progression?';

const PROGRESSION_LENGTH = 10;
const MAX_NUMBER = 10;

const progressionGame = () => {
  const delta = getRandomNum(0, MAX_NUMBER);
  const start = getRandomNum(0, MAX_NUMBER);
  const hiddenIndex = getRandomNum(0, PROGRESSION_LENGTH - 1);

  const questionArr = [];

  for (let i = start; questionArr.length < PROGRESSION_LENGTH; i += delta) {
    questionArr.push(i);
  }

  const answer = questionArr[hiddenIndex].toString();
  questionArr[hiddenIndex] = '..';

  return {
    question: questionArr.join(' '),
    answer,
  };
};

export default {
  gameFunc: progressionGame,
  description,
};
