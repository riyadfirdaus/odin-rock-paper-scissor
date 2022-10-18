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
    switch(playerSelection){
        case computerSelection:
            return "draw";
            break;
        case "rock":
            if(computerSelection == "paper") return "lose";
            else return "win";
            break;
        case "paper":
            if(computerSelection == "rock") return "win";
            else return "lose";
            break;
        case "scissor":
            if(computerSelection == "rock") return "lose";
            else return "win";
            break;
        default:
            return "Wrong Input";
            break;
    }
    return text;
}

let n = prompt("How many times do you want to play?");
for(i=0; i<n;i++){
    const computerSelection = getComputerChoice();
    console.log(computerSelection);

    let playerSelection = prompt("Input your choice");
    playerSelection = playerSelection.toLowerCase();
    
    console.log(playRound(playerSelection, computerSelection));
}