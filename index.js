let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return "rock";
    }
    else if (randomNumber === 2) {
        return "paper";
    }

    return "scissors";
}

function getPlayerChoice() {
    const validChoices = ["rock", "paper", "scissors"];

    let choice = prompt("Enter your choice:").toLowerCase();

    while (!validChoices.includes(choice)) {
        choice = prompt("Please enter a valid choice (i.e., rock or paper or scissors):").toLowerCase(); 
    }

    return choice;
}

function playRound(playerChoice, computerChoice) {
    const winCombinations = ["rock scissors", "paper rock", "scissors paper"];
    const loseCombinations = ["rock paper", "paper scissors", "scissors rock"];

    const currentCombination = `${playerChoice} ${computerChoice}`;

    if (winCombinations.includes(currentCombination)) {
        alert(`You win! ${playerChoice} beats ${computerChoice}.`);
        playerScore += 1;
    }
    else if (loseCombinations.includes(currentCombination)) {
        alert(`You lose! ${computerChoice} beats ${playerChoice}.`);
        computerScore += 1;
    }
    else {
        alert("A draw!");
    }
}

function playGame() {
    const numberOfRounds = 5;

    for (let i = 0; i < numberOfRounds; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
    }

    if (playerScore > computerScore) {
        alert(`Congratulations; You won! You ${playerScore} - ${computerScore} Computer`);
    }
    else {
        alert(`Better luck next time; You lost! You ${playerScore} - ${computerScore} Computer`)
    }
}

playGame();