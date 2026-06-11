const selectCards = document.querySelectorAll(".card_type_select");

const srStatus = document.querySelector(".sr-status");

const statusBox = document.querySelector(".status");
const statusBoxContent = document.querySelector(".status__content");

const nextRoundBtn = document.querySelector(".btn_label_next-round");
const playAgainBtn = document.querySelector(".btn_label_play-again");

const computerChoiceCard = document.querySelector(".card_label_computer-choice");

let computerChoice;

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    computerChoiceCard.classList.remove(
        "is-hidden", "card_choice_rock", "card_choice_paper", "card_choice_scissors"
    );

    const randomNumber = Math.floor(Math.random() * 3) + 1;

    let choice;

    switch (randomNumber) {
        case 1:
            computerChoiceCard.classList.add("card_choice_rock");
            choice = "rock";
            break;

        case 2:
            computerChoiceCard.classList.add("card_choice_paper");
            choice = "paper";
            break;
        
        case 3:
            computerChoiceCard.classList.add("card_choice_scissors");
            choice = "scissors";
    }

    return choice;
}

function updateStatus(msg) {
    statusBox.classList.remove("is-hidden");

    statusBoxContent.textContent = msg;
    srStatus.textContent = `The computer picked ${computerChoice}; ${msg}`;
}

function playRound(playerChoice) {
    const choices = `${playerChoice} ${computerChoice}`;

    const isWin =
        choices === "rock scissors" ||
        choices === "paper rock" ||
        choices === "scissors paper";
    
    const isLost =
        choices === "rock paper" ||
        choices === "paper scissors" ||
        choices === "scissors rock";
    
    if (isWin) {
        playerScore += 1;

        if (playerScore === 3) {
            updateStatus("You won the game!");

            nextRoundBtn.classList.add("is-hidden");
            playAgainBtn.classList.remove("is-hidden");

            playAgainBtn.focus();
        }
        else {
            updateStatus("You won this round!");
            nextRoundBtn.focus();
        }
    }
    else if (isLost) {
        computerScore += 1;

        if (computerScore === 3) {
            updateStatus("You lost the game!");

            nextRoundBtn.classList.add("is-hidden");
            playAgainBtn.classList.remove("is-hidden");

            playAgainBtn.focus();
        }
        else {
            updateStatus("You lost this round!");
            nextRoundBtn.focus();
        }
    }
    else {
        updateStatus("It's a tie!");
        nextRoundBtn.focus();
    }
}

function playNextRound() {
    statusBox.classList.add("is-hidden");
    computerChoiceCard.classList.add("is-hidden");

    srStatus.textContent = "";

    selectCards.forEach((card, index) => {
        card.disabled = false;
        card.classList.remove("is-hidden");

        if (index === 0) {
            card.focus();
        }
    });
}

selectCards.forEach(card => {
    card.addEventListener("click", () => {
        computerChoice = getComputerChoice();
        
        card.disabled = true;

        selectCards.forEach(card => {
            if (!card.disabled) {
                card.classList.add("is-hidden");
            }
        });

        playRound(
            card.getAttribute("data-choice")
        );
    });
});

nextRoundBtn.addEventListener("click", playNextRound);

playAgainBtn.addEventListener("click", () => {
    playNextRound();

    playerScore = 0;
    computerScore = 0;

    nextRoundBtn.classList.remove("is-hidden");
    playAgainBtn.classList.add("is-hidden");
});