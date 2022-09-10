//Two players compete in this game with random selection of gold, silver, 
//or copper by computer.  20, 10, and 5 points for gold, silver, and copper respectively.  
//There are 9 possible outcomes of winning, losing, and tie.

//set variables and cache the DOM
let scoreBoardDiv = document.querySelector(".score-board");
let userScore = 0;
let computerScore = 0;
let userScoreSpanTag = document.getElementById("user-score");
let computerScoreSpanTag = document.getElementById("computer-score");
let resultDiv = document.querySelector(".result");
let goldDiv = document.querySelector("#gold");
let silverDiv = document.querySelector("#silver");
let copperDiv = document.querySelector("#copper");

const input = document.createElement("input");   //create textbox
input.setAttribute("id", "username");
input.setAttribute("type", "text");
document.body.appendChild(input);               //insert textbox

const label = document.createElement("label");   //create label
label.setAttribute("for", "username");
label.innerHTML = "Player Name: ";
const usernameText = document.getElementById("username");
document.body.insertBefore(label, usernameText);

usernameText.setAttribute("placeholder", "input your name here")

function getComputerPick() {                            //get random choices from computer
    let arrChoices = ['gold', 'silver', 'copper'];
    let randomPick = arrChoices[Math.floor(Math.random() * arrChoices.length)];
    return arrChoices = [randomPick];
}
//console.log(getComputerPick())

function userWin(userPick, computerPick) {            //function for the win cases
    
    userScoreSpanTag.innerHTML = userScore;
    computerScoreSpanTag.innerHTML = computerScore;
    resultDiv.innerHTML = `${userPick} is more valuable than ${computerPick}.  ${usernameText.value} wins :-)`;
    
}
function computerWin(userPick, computerPick) {             //function for the lose cases for a user


    userScoreSpanTag.innerHTML = userScore;
    computerScoreSpanTag.innerHTML = computerScore;
    resultDiv.innerHTML = `${userPick} loses to ${computerPick}.  ${usernameText.value} loses this time :-(`;
}

function tie(userPick, computerPick) {              //function for the tie cases
    resultDiv.innerHTML = `${userPick} is same as ${computerPick}. It's a tie.`;
}
function play(userPick) {
    let compPick = getComputerPick();
    //console.log(`computerPick ${compPick}`)
    let pick = `${userPick} ${compPick}`
    //console.log(`userPick ${userPick}`)

    switch(pick) {                              //9 possible cases for the game played between player and computer
        case "gold silver":
            userScore+=20;
            computerScore-=10;
            userWin(userPick, compPick)
            break;
        case "gold copper":
            userScore+=20;
            computerScore-=5
            userWin(userPick, compPick);
            break;
        case "silver copper":
            userScore+=10;
            computerScore-=5
            userWin(userPick, compPick);
            break;
        case "silver gold":
            userScore-=10;
            computerScore+=20;
            computerWin(userPick, compPick);
            break;
        case "copper gold":
           
            userScore-=5;
            computerScore+=20;
            computerWin(userPick, compPick);
            break;
        case "copper silver":
            
            userScore-=5;
            computerScore+=10;
            computerWin(userPick, compPick);
            break;
        case "gold gold":
            tie(userPick, compPick)
            break;
        case "silver silver":
            tie(userPick, compPick)
            break;
        case "copper copper":
            tie(userPick, compPick);
            break;
            //console.log(`last case`)
    }
}

function playGame() {                                   //attach eventListener method to variable when click
    goldDiv.addEventListener('click', function() {

        play("gold");
    })

    silverDiv.addEventListener("click", function() {
        
        play("silver");
    })

    copperDiv.addEventListener("click", function() {
        
        play("copper");
    })
}
document.querySelector('.restart-btn').addEventListener('click', function(){
    window.location.reload();
    return false;
})

playGame();  //calling function to play game