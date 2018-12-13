

var userChoice = document.getElementById("player_input").nodeValue
document.getElementById("button_GO").onclick = oneGame()

var variants = ["Rock", "Paper", "Scissors"];
           
            function computerPlay() {
                let choice = Math.floor(Math.random()*variants.length);
                
                return choice;
            }
            function playRound(playerSelection, computerSelection) {
                let winner;
                let results = ["You win! Bad Motherfucker!", "You lose! Bite me, petty human!", "Draw boys! Try again"];
                // rules of the game
                let variant;
                let playerChoice = 0;
                let computerChoice = computerSelection;
                for (variant in variants) {
                    if (variant == playerSelection) {
                        playerChoice =  variants.indexOf(variant);
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
                
                return winner

                
            }
            function oneGame(choice) {
                let i;
                let result;
                let suitableValue = false;
                for (i = 0; i < variants.length; i++) {
                    if (userChoice == variants[i]) {
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
            }