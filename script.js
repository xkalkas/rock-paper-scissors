let playerScore = 0;
let computerScore = 0;
let reprompt = false;
var computerChoice = "";
var playerChoice = "";

function getComputerChoice(){
    const num = Math.floor(Math.random()*3)+1;
    let  computerChoice = "";
    switch(num){
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;


    }
    return computerChoice;
}


function getPlayerChoice(){
    let choice = "";
    if(reprompt){
        choice = prompt("Please write it properly");
    }else{
        choice = prompt("Write either Rock, Paper or Scissors");
    }
    
    return choice;
}

function playRound(playerChoice, computerChoice){
    if (playerChoice.toLowerCase() === computerChoice) {
        alert(`Its a tie, you both picked ${playerChoice}.`);
    }else if (playerChoice.toLowerCase() === "paper" && computerChoice === "rock") {
        alert(`You win! Paper beats Rock`);
        playerScore++;
    }else if (playerChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
        alert(`You lose! Scissors beats Paper`);
        computerScore++;
    }else if (playerChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
        alert(`You win! Rock beats Scissors`);
        playerScore++;
    } else if (playerChoice.toLowerCase() === "rock" && computerChoice === "paper") {
        alert(`You lose! Paper beats Rock`);
        computerScore++;
    }else if (playerChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        alert(`You win! Scissors beats Paper`);
        playerScore++;
    }else if (playerChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
        alert(`You lose! Rock beats Scissors`);
        computerScore++;
    }
}

function playGame(){
    let rounds=0;
    for(let i=0; i<5;i++){
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice();
        playRound(playerChoice, computerChoice);
        console.log(`SCORE\nPlayer: ${playerScore}\nComputer: ${computerScore}`)
    }
}

playGame();
if(computerScore==playerScore)
    alert("It's a Tie");
else if(computerScore>playerScore)
    alert("You lost the game...")
else
    alert("You won the game!");