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

function playRound(playerSelection, computerSelection) {
    let lose = "You lose! " + playerSelection +" lose to " +computerSelection;
    let win = "You win! " + playerSelection +" beats " +computerSelection;
    let draw = "Huftt It's a draw!";
    switch(playerSelection){
        case computerSelection:
            return draw;
            break;
        case "rock":
            if(computerSelection == "scissor") 
                return win;
            else return lose;
            break;
        case "paper":
            if(computerSelection == "rock") return win;
            else return lose;
            break;
        case "scissor":
            if(computerSelection == "rock") return lose;
            else return win;
            break;
        default:
            return "Wrong Input";
            break;
    }
    return text;
}

function game(){
    for(i=0; i<5;i++){
        const computerSelection = getComputerChoice();
    
        let playerSelection = prompt("Input your choice");
        playerSelection = playerSelection.toLowerCase();
    
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
