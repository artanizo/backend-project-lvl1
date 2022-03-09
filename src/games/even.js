import getRandomNum from '../getRandomNum.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const number = getRandomNum(0, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  return {
    question: number,
    answer,
  };
};

export default {
  gameFunc: evenGame,
  description,
};
