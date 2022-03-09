import getRandomNum from '../getRandomNum.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const primeGame = () => {
  const num = getRandomNum(0, 100);
  const answer = isPrime(num) ? 'yes' : 'no';
  return {
    question: num,
    answer,
  };
};

export default {
  gameFunc: primeGame,
  description,
};
