import getRandomNum from '../getRandomNum.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const description = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const n1 = getRandomNum(0, 20);
  const n2 = getRandomNum(0, 20);
  const answer = gcd(n1, n2).toString();
  return {
    question: `${n1} ${n2}`,
    answer,
  };
};

export default {
  gameFunc: gcdGame,
  description,
};
