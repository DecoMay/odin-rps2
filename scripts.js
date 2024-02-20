function getComputerChoice() {
    let choice = '';
    let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    console.log(randomNumber);
    if (randomNumber === 1) {
        choice = 'Rock';
    } else if (randomNumber === 2) {
        choice = 'Paper';
    } else {
        choice = 'Scissor';
    }

    return choice;
}

console.log(getComputerChoice());
