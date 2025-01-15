let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

function getComputerChoice(){
    let choice = Math.random();
    choice = choice * 10;
    if (choice <= 4){
        return "rock";
    } else if (choice <= 7){
        return "paper";
    } else if (choice <= 10) {
        return "scissors";
    } 
}

function getHumanChoice(choice){
    humanChoice = choice;
    readyToPlay();
}

function readyToPlay(){
    document.querySelector("#play").removeAttribute("disabled");
}

function humanScorePoint(){
    
}

function computerScorePoint(){

}

function playRound(humanChoice){
    computerChoice = getComputerChoice();
    if(humanChoice == 'rock'){
        if(computerChoice == "paper"){
            computerScore += 1;
            return;
        } else if (computerChoice == "scissors"){
            humanScore += 1;
            return;
        } else {
            return;
        }
    } else if (humanChoice == 'paper'){
        if(computerChoice == "scissors"){
            computerScore += 1;
            return;
        } else if (computerChoice == "rock"){
            humanScore += 1;
            return;
        } else {
            return;
        }
    } else if (humanChoice == 'scissors'){
        if(computerChoice == "rock"){
            computerScore += 1;
            return;
        } else if (computerChoice == "paper"){
            humanScore += 1;
            return;
        } else {
            return;
        }
    } else {
        alert("Error!")
    }

}