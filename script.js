'use strict';

// generate number to be guessed
let real_number = Math.ceil((20 * Math.random()));

// Function to handle logic when restarting game
function again_handler() {
    real_number = Math.ceil((20 * Math.random()));
    document.querySelector('.message').textContent = 'Start guessing ...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.check').textContent = 'Check!!'
}

function check_handler() {
    const input_number = Number(document.querySelector('.guess').value);
    let score = Number(document.querySelector('.score').textContent);

    // when there is no input
    if (!input_number) {
        document.querySelector('.message').textContent = 'Not a valid guess!';

        // when the guess is correct
    } else if (input_number == real_number) {
        // case when play again button has been pressed
        if (document.querySelector('.message').textContent == 'Correct guess!'){
            again_handler();

            // case when correct number has been guessed correctly
        } else {
            document.querySelector('.message').textContent = 'Correct guess!';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = real_number;
            document.querySelector('.number').style.width = '30rem';
            if (Number(document.querySelector('.score').textContent) > Number(document.querySelector('.highscore').textContent)){
                document.querySelector('.highscore').textContent = document.querySelector('.score').textContent;
            }
            document.querySelector('.check').textContent = 'Play Again!'
        }

        // when the guess is too low
    } else if (input_number < real_number) {
        document.querySelector('.score').textContent = score - 1;
        document.querySelector('.message').textContent = 'Too low!';

        // when the guess is too high
    } else {
        document.querySelector('.score').textContent = score - 1;
        document.querySelector('.message').textContent = 'Too high!';
    }

    // when the player has used up all his guesses
    if (Number(document.querySelector('.score').textContent) == 0) {
        document.querySelector('.message').textContent = 'You lost. Try again!';
        document.querySelector('.score').textContent = 20;
        real_number = Math.ceil((20 * Math.random()));
    }
}

// when the check button is clicked
document.querySelector('.check').addEventListener('click', check_handler);

// when the again button is clicked
document.querySelector('.again').addEventListener('click', again_handler);