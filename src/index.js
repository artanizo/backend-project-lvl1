import readlineSync from 'readline-sync';
import greet from './cli.js';

const askQuestion = (question) => console.log(`Question: ${question}`);
const readAnswer = () => readlineSync.question('Your answer: ');

const runGame = (game = null, times = 3) => {
  console.log('Welcome to the Brain Games!');
  const userName = greet();

  if (!game) {
    return;
  }

  const { description, gameFunc } = game;
  console.log(description);

  let count = 0;
  for (let i = 0; i < times; i += 1) {
    const { question, answer } = gameFunc();
    askQuestion(question);
    const userAnswer = readAnswer();
    if (answer === userAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`,
      );
      break;
    }
  }
  if (count === times) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default runGame;
