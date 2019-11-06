// computer options
const options = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;
let rounds = 0;
const btn = document.querySelectorAll('button');
const match = document.querySelector('.round > p');
const playerPoints = document.querySelector('.playerPoints > p');
const computerPoints = document.querySelector('.computerPoints > p');
const roundResult = document.querySelector('.roundResult > p');


btn.forEach((button) => {
    button.addEventListener('click', (e) => {
        let escolhaDoJogador = '';
        escolhaDoJogador = e.target.id;
        const escolhaDoComputador = computerPlay();
        const winnerDetermine = playRound(escolhaDoJogador, escolhaDoComputador);
        rounds++;
        // console.log(escolhaDoJogador, escolhaDoComputador);
        // console.log(winnerDetermine);
        // console.log('Jogador ' + playerScore);
        // console.log('Computador ' + computerScore);

        if(playerScore == 5 || computerScore == 5) {
            let ultimateWinner = determineUltimateWinner(playerScore, computerScore);
            roundResult.textContent = ultimateWinner;
        }
        match.textContent = 'Rounds: ' + rounds;
        playerPoints.textContent = 'Player Score: ' + playerScore;
        computerPoints.textContent = 'Computer Score: ' + computerScore;
    })  
});

// make computer choose
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}
          
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
     
function determineUltimateWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return 'You won this game! Congratz!';
    } else {
        return 'You lose the game. Don\'t be sad, try again!';
    } 
}




