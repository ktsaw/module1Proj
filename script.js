//This game a player and computer compete with random selection of rock, scissors, 
//or paper by computer.  
//There are 9 scenarios of winning, losing, and tie.

//caching the DOM
let scoreBoardDiv = document.querySelector(".score-board");
let userScore = 0;
let computerScore = 0;
let userScoreSpanTag = document.getElementById("user-score");
let computerScoreSpanTag = document.getElementById("computer-score");
let resultDiv = document.querySelector(".result");
let rockDiv = document.querySelector("#rock");
let scissorsDiv = document.querySelector("#scissors");
let paperDiv = document.querySelector("#paper");


function getComputerPick() {
    let arrChoices = ['rock', 'scissors', 'paper'];
    let randomPick = Math.floor(Math.random() * 3);
    return arrChoices [randomPick];
}
//console.log(getComputerPick())

function winScenario(userPick, computerPick) {
    userScore++;
    userScoreSpanTag.innerHTML = userScore;
    computerScoreSpanTag.innerHTML = computerScore;
    resultDiv.innerHTML = `${userPick} beats ${computerPick}. You win :-)`;
    
}

function loseScenario(userPick, computerPick) {
    computerScore++;
    userScoreSpanTag.innerHTML = userScore;
    computerScoreSpanTag.innerHTML = computerScore;
    resultDiv.innerHTML = `${userPick} loses to ${computerPick}. You lost :-(`;
}

function tieScenario(userPick, computerPick) {
    resultDiv.innerHTML = `${userPick} is same as ${computerPick}. It's a tie.`;
}
function game(userPick) {

    let compPick = getComputerPick();
    //console.log(`computerPick ${compPick}`)
    let pick = `${userPick} ${compPick}`
    //console.log(`userPick ${userPick}`)
    switch(pick) {
        case "rock scissors":
            winScenario(userPick, compPick)
            break;
        case "paper rock":
            winScenario(userPick, compPick);
            break;
        case "scissors paper":
            winScenario(userPick, compPick);
            break;
        case "rock paper":
            loseScenario(userPick, compPick);
            break;
        case "paper scissors":
            loseScenario(userPick, compPick);
            break;
        case "scissors rock":
            loseScenario(userPick, compPick);
            break;
        case "rock rock":
            tieScenario(userPick, compPick)
            break;
        case "paper paper":
            tieScenario(userPick, compPick)
            break;
        case "scissors scissors":
            tieScenario(userPick, compPick);
            break;
            //console.log(`last case`)
    }
}

function main() {
    rockDiv.addEventListener('click', function() {

        game("rock");
    })

    scissorsDiv.addEventListener("click", function() {
        
        game("scissors");
    })

    paperDiv.addEventListener("click", function() {
        
        game("paper");
    })
}
document.querySelector('.restart-btn').addEventListener('click', function(){
    window.location.reload();
    return false;
})

main();