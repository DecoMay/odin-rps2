function getComputerChoice() {
    let choice = '';
    let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (randomNumber === 1) {
        choice = 'Rock';
    } else if (randomNumber === 2) {
        choice = 'Paper';
    } else {
        choice = 'Scissor';
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {
    let gameResult = '';
    if ((playerSelection == 'rock' && computerSelection == 'Paper') || (playerSelection == 'paper' && computerSelection == 'Scissor') || (playerSelection == 'scissor' && computerSelection == 'Rock')) {
        gameResult = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if ((playerSelection == 'rock' && computerSelection == 'Scissor') || (playerSelection == 'paper' && computerSelection == 'Rock') || (playerSelection == 'scissor' && computerSelection == 'Paper')) {
        gameResult = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        gameResult = 'Draw';
    }
    return gameResult;
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
