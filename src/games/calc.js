import getRandomNum from '../getRandomNum.js';

const operations = ['-', '+', '*'];
const operationsFunc = {
  '-': (a, b) => a - b,
  '+': (a, b) => a + b,
  '*': (a, b) => a * b,
};

const description = 'What is the result of the expression?';

const calcGame = () => {
  const op1 = getRandomNum(0, 100);
  const op2 = getRandomNum(0, 100);
  const opIndex = getRandomNum(0, operations.length - 1);
  const operation = operations[opIndex];
  const answer = operationsFunc[operation](op1, op2).toString();
  return {
    question: `${op1} ${operation} ${op2}`,
    answer,
  };
};

export default {
  gameFunc: calcGame,
  description,
};
