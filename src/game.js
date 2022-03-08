import readlineSync from 'readline-sync';

const askQuestion = (question) => console.log(`Question: ${question}`);
const readAnswer = () => readlineSync.question('Your answer: ');

const runGame = (game, userName, times = 3) => {
  const { description, gameFunc } = game;
  console.log(description);

  for (let i = 0; i < times; i += 1) {
    const { question, answer } = gameFunc();
    askQuestion(question);
    const userAnswer = readAnswer();
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

export default runGame;
