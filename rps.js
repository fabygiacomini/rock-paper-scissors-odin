// computer options
const options = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

const btn = document.querySelectorAll('.buttons');
const match = document.querySelector('.round > p');
const playerPoints = document.querySelector('.playerPoints > p');
const computerPoints = document.querySelector('.computerPoints > p');
const roundResult = document.querySelector('.roundResult > p');
const textRound = document.querySelector('.textRound > p');
const pickText =document.querySelector('.picksShown > p');

// all happens after the CLICK EVENT
btn.forEach((button) => {
    button.addEventListener('click', (e) => {
        let playerChoice = '';
        playerChoice = e.target.id;
        const computerChoice = computerPlay();
        const winnerDetermine = playRound(playerChoice, computerChoice);
        rounds++;
        // console.log(playerChoice, computerChoice);
        // console.log(winnerDetermine);
        // console.log('Jogador ' + playerScore);
        // console.log('Computador ' + computerScore);

        match.textContent = 'Rounds: ' + rounds;
        playerPoints.textContent = 'Player Score: ' + playerScore;
        computerPoints.textContent = 'Computer Score: ' + computerScore;
        pickText.textContent = `You choose: ${playerChoice} and the computer choose: ${computerChoice} --> `;
        textRound.textContent = winnerDetermine;

        // the ultimate winner only appears after 5 rounds
        if(playerScore == 5 || computerScore == 5) {
            let ultimateWinner = determineUltimateWinner(playerScore, computerScore);
            roundResult.textContent = ultimateWinner;

            // create reset button after someone won > game is over
            const receiveRstBtn = document.querySelector('.receiveResetBtn'); //call the div with class "receiveResetBtn"
            const resetButton = document.createElement('button');
            resetButton.classList.add('resetBtn');
            resetButton.textContent = 'Reset Game';
            receiveRstBtn.appendChild(resetButton);

            // make reset button work -> WORKING ON IT
            // const cleanAll = document.querySelector('.resetBtn');
            // cleanAll.addEventListener('click', (e) => {
            //     rounds = 0;
            //     playerScore = 0;
            //     computerScore = 0;
            // })
        }
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
 
// final comparision to determinate the ultimate winner of he game
function determineUltimateWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return 'You won this game! Congratz!';
    } else {
        return 'You lose the game. Don\'t be sad, try again!';
    } 
}