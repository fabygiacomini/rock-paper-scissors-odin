        const options = ['rock', 'paper', 'scissors'];
        
        // make computer choose
        function computerPlay() {
           let randomNumber = Math.floor(Math.random() * 3);
              return options[randomNumber];
        }

        // player choice
       function userPlay() {
        let playerChoice = 'ROCK'; //= prompt('Choose "rock", "paper", or "scissors".'); // choose one
            playerChoice = playerChoice.toLowerCase();
            if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
                return playerChoice;
            } else {
                return 'You should choose "rock", "paper" or "scissors".';
            }
        }

        // argumentos
        const playerSelection = userPlay();
        const computerSelection = computerPlay();

        // show choices made
        console.log("The Player chooses: " + playerSelection);
        console.log("The computer chooses: " + computerSelection);

        let playerScore;
        let computerScore;
             
        // playRound = 1 match
        function playRound(playerSelection, computerSelection) {
           
            if (playerSelection === 'rock' && computerSelection === 'scissors') {
                playerScore++;
                return 'You won this match!';
            } else if (playerSelection === 'paper' && computerSelection === 'rock') {
                playerScore++;
                return 'You won this match!';
            } else if (playerSelection === 'scissors' && computerSelection === 'paper') { 
                playerScore++;                   
                return 'You won this match!'; 
            } else if (playerSelection === computerSelection) {
                playerScore += 0;
                computerScore += 0;
                return 'The game is tied.';
            } else {
                computerScore++;
                return 'You lose this match!';
            }
        }
        // show match result
        console.log(
            playRound(playerSelection, computerSelection)
        );
        
        // show game result - VERIFICAR PQ FALTA ALGO
        function game() {
            for (let rounds = 0; rounds <= 5; rounds++) {
                playRound(playerSelection, computerSelection);
                if (playerScore > computerScore) {
                    return 'You won this game! Congratz!';
                } else {
                    return 'You lose the game. Don\'t be sad, try again!';
                }   
            }
        }
        console.log(game());