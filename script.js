function getComputerChoice() {
    let randomNumber = Math.random().toPrecision(2)
    if (randomNumber <= 0.33) {
        return "Rock";
    } else if (randomNumber <= 0.66) {
        return "Paper";
    } else return "Scissors";
}

function getHumanChoice() {
    let humanResponse = prompt("Rock, paper, or scissors?").toLowerCase().trim()
    if (humanResponse == "paper") {
        return "Paper";
    } else if (humanResponse == "scissors") {
        return "Scissors";
    } else if (humanResponse == "rock") {
        return "Rock";
    } else {
    return "Not a valid entry!";
    getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice == "Paper") {
        if (computerChoice == "Rock") {
            humanScore++;
            console.log("You win!");
        } else if (computerChoice == "Scissors") {
            computerScore++;
            console.log("You lose!");
        }
    } else if (humanChoice == "Rock") {
        if (computerChoice == "Scissors") {
            ++humanScore;
            console.log("You win!");
        } else if (computerChoice == "Paper") {
            computerScore++;
            console.log("You lose!");
        }
    } else if (humanChoice == "Scissors") {
        if (computerChoice == "Paper") {
            humanScore++;
            console.log("You win!");
        } else if (computerChoice == "Rock") {
            computerScore++;
            console.log("You lose!");
        }
    // } else {
    // console.log("Please select either 'Rock', 'Paper', or 'Scissors'.");
    // getHumanChoice();
    }
}

function playGame() {
    for (let rounds=0; rounds < 5; rounds++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        // console.log(humanChoice);
        // console.log(computerChoice);
        playRound(humanChoice, computerChoice);
        console.log(humanScore);
        console.log(computerScore);
    }
}

playGame();