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