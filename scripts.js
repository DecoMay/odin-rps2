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
    playerSelection = playerSelection.substr(0,1).toUpperCase() + playerSelection.substr(1).toLowerCase();
    console.log("PLAYER : ", playerSelection);
    let gameResult = '';
    if ((playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Scissor') || (playerSelection == 'Scissor' && computerSelection == 'Rock')) {
        gameResult = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissor') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Scissor' && computerSelection == 'Paper')) {
        gameResult = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        gameResult = 'Draw';
    }
    return gameResult;
}

const playerSelection = prompt();
const computerSelection = getComputerChoice();
console.log("COMPUTER: ", computerSelection);
console.log(playRound(playerSelection, computerSelection));
