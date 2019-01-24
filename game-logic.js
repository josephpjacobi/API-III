// All code should be written in this file.

// I need 12 global Variables with each players move types and values
//This section creates variables for the type of move(rock/paper/scissor) each player chooses to play
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;

let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

//This section creates variables for the values of each move that both players decide to player
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

const P1 = 'Player One';
const P2 = 'Player Two';
const TIE = 'Tie';
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';


const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType,
  moveTwoValue, moveThreeType, moveThreeValue) => {
  if (!moveOneType || !moveOneValue || !moveTwoType ||
    !moveTwoValue || !moveThreeType || !moveThreeValue) {
    return;
  }

  if (!validTypes(moveOneType, moveTwoType, moveThreeType))  {
    return;
  }

  if (!validValues(moveOneValue, moveTwoValue, moveThreeValue))  {
      return;
  }

  switch (player) {
    case P1:
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
    break;

    case P2:
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
    break;
  }
};

  const validTypes = (type1, type2, type3) =>
    validType(type1) && validType(type2) && validType(type3);

  const validType = (type) => type === ROCK || type === PAPER || type === SCISSORS;

  const validValues = (value1, value2, value3) =>
  value1 >= 1 && value2 >= 1 && value3 >= 1 && value1 + value2 + value3 <= 99;

  
