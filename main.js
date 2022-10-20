let computerSelection, playerSelection;
let scoreHuman = 0, scoreComputer = 0;
let resultText;

function convertToEmoji(text){
    if(text == 'rock') return '✊';
    if(text == 'paper') return '✋';
    if(text == 'scissor') return '✌️';
    return;
}
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)+1;
    switch(choice){
        case 1: 
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissor";
            break;
    }
}
function computeResult(result){
    if(result == 'win'){
        scoreHuman++;
    }
    else if(result == 'lose'){
        scoreComputer++;
    }
    updateCard();
    if(scoreComputer == 5)
        gameOver('Oh noo, you lose!');
    if(scoreHuman == 5)
        gameOver('Yeay, you win!');

    return;
}

function gameOver(text){
    const mainContent = document.getElementById('main');
    console.log(mainContent);
    //Remove Emoji Button
    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.lastChild);
    }
    //Append Text Result and Play Again Button
    const gameResult = document.createElement('h3');
    gameResult.innerText = text;
    mainContent.appendChild(gameResult);

    const button = document.createElement('button');
    button.classList.add('btn');
    button.innerText = 'Play Again';
    button.addEventListener('click', () =>{
        location.reload();
    });
    mainContent.appendChild(button);
    
}

function updateCard(emoji){
    const cardHuman = document.querySelector('#human');
    const cardComputer = document.querySelector('#computer');
    cardHuman.querySelector('#score').innerText = scoreHuman;
    cardHuman.querySelector('.emoji').innerText = convertToEmoji(playerSelection);
    cardComputer.querySelector('#score').innerText = scoreComputer;
    cardComputer.querySelector('.emoji').innerText = convertToEmoji(computerSelection);

}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection){
        case computerSelection:
            computeResult('draw');
            break;
        case "rock":
            if(computerSelection == "scissor") computeResult('win');
            else computeResult('lose');
            break;
        case "paper":
            if(computerSelection == "rock") computeResult('win');
            else computeResult('lose');
            break;
        case "scissor":
            if(computerSelection == "paper") computeResult('win');
            else computeResult('lose');
            break;
        default:
            return "Wrong Input";
            break;
    }
}

function selectChoice(e){
    computerSelection = getComputerChoice();
    playerSelection = this.id.toLowerCase();
    playRound(playerSelection, computerSelection);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button =>{
    button.addEventListener('click', selectChoice);
});

