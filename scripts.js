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
    let roundWinner = '';
    if ((playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Scissor') || (playerSelection == 'Scissor' && computerSelection == 'Rock')) {
        roundWinner = 'computer';
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissor') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Scissor' && computerSelection == 'Paper')) {
        roundWinner = 'player';
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else {
        roundWinner = 'draw';
        console.log('Draw');
    }
    return roundWinner;
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;
    let roundWinner = '';
    for (let i = 1; i <= 5; i++) {
        console.log(`Game ${i}`);
        const playerSelection = prompt();
        const computerSelection = getComputerChoice();
        console.log("COMPUTER: ", computerSelection);
        roundWinner = playRound(playerSelection, computerSelection);
        console.log(roundWinner);
        switch (roundWinner) {
            case 'player':
                playerScore++;
                break;
            case 'computer':
                computerScore++;
                break;
            case 'draw':
                drawScore++;
                break;
        }
    }
    if (playerScore > computerScore) {
        console.log(`Results: Player: ${playerScore}, Computer: ${computerScore}, Draw: ${drawScore}, Winner is Player`)
    } else {
        console.log(`Results: Player: ${playerScore}, Computer: ${computerScore}, Draw: ${drawScore}, Winner is Computer`)
    }
}

playGame();


