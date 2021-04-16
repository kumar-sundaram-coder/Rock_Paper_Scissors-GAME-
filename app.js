const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const DEFAULT_USER_CHOICE = ROCK;

const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    ` ${ROCK}, ${PAPER} or ${SCISSORS}`,
    ""
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(
      `Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you by default!`
    );
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     (cChoice === ROCK && pChoice === PAPER) ||
//     (cChoice === PAPER && pChoice === SCISSORS) ||
//     (cChoice === SCISSORS && pChoice === ROCK)
//   ) {
//     return RESULT_PLAYER_WINS;
//   } else {
//     return RESULT_COMPUTER_WINS;
//   }
// };

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  console.log("Game is Starting...");

  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  let winner;

  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }

  let message = `You picked ${
    playerChoice || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice}, therefore you `;

  if (winner === RESULT_DRAW) {
    message = message + `had a DRAW`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + `WON`;
  } else {
    message = message + `LOST`;
  }

  alert(message);
  gameIsRunning = false;
});

//not related to Game

const combineAddSubtract = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const el of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(el);
    } else {
      sum -= validateNumber(el);
    }
  }
  resultHandler(sum); //call back to the function passed as a parameter
};

const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const el of numbers) {
    sum += validateNumber(el);
  }
  resultHandler(sum); //call back to the function passed as a parameter
};

// const subtractUp = function () {
//   let sum = 0;
//   for (const el of arguments) {
//     //arguments is a keyword, we dont need to declare any parameters in the function's bracket "()"
//     //don't use that, it's not a good practise
//     sum -= el;
//   }
//   return sum;
// };

const subtractUp = (resultHandler, ...numbers) => {
  let sum = 0;
  for (const el of numbers) {
    sum -= el;
  }

  resultHandler(sum); //call back to the function passed as a parameter
};

// call back function
const showResult = (messageText, result) => {
  alert(messageText + " " + result);
};

combineAddSubtract(
  showResult.bind(this, "The result after adding these numbers are"),
  "ADD",
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9
);
combineAddSubtract(
  showResult.bind(this, "The result after adding these numbers are"),
  "ADD",
  2,
  3,
  4,
  "hsbdhf",
  6,
  7,
  "hvhs",
  9
);
// console.log(subtractUp(5, 10, 15, 20));
combineAddSubtract(
  showResult.bind(this, "The result after subtracting these numbers are"),
  "SUBTRACT",
  5,
  10,
  15,
  20
);
