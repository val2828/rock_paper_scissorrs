


var variants = ["Rock", "Paper", "Scissors"];
var output = "Something"
function run() {
    let user_input = document.getElementById("player_input").value;
    
    oneGame(user_input);
    document.getElementById("computer_output").value = output;
}
           
function computerPlay() {
    let choice = Math.floor(Math.random()*variants.length);
    
    return choice;
}
function playRound(playerSelection, computerSelection) {
    let i;
    let winner;
    let results = ["You win! Bad Motherfucker!", "You lose! Bite me, petty human!", "Draw boys! Try again"];
    // rules of the game
    
    let playerChoice = 0;
    let computerChoice = computerSelection;
    
    for (i=0;i<variants.length;i++) {
        if (variants[i] == playerSelection) {
            playerChoice =  i;
        }
    }

    if (playerChoice == computerChoice) {
        winner = results[2];
    }
    else if ((computerChoice - playerChoice == 1) || (computerChoice == 0 && playerChoice == 2)) {
        winner = results[1];
    }
    else {
        winner = results[0];
    }
    output = variants[computerChoice];
    return winner

}
function oneGame(choice) {
    let i;
    let result;
    let suitableValue = false;
   
    for (i=0;i<variants.length;i++) {
        if (choice == variants[i]) {
            suitableValue = true;
        }
    }
        

    if (suitableValue) {
        let computerChoice = computerPlay();
        result = playRound(choice, computerChoice);

    }
    else {
        result = "Enter proper value, maggot!"
    }
    window.alert(result);
    return result;
}