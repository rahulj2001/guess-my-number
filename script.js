'use strict';

let real_number = Math.ceil((20 * Math.random()));
console.log(real_number);

document.querySelector('.check').addEventListener('click', function () {
    const input_number = Number(document.querySelector('.guess').value);
    let score = Number(document.querySelector('.score').textContent);
    console.log(score, typeof(score));

    if (!input_number) {
        document.querySelector('.message').textContent = 'Not a valid guess!';
    } else if (input_number == real_number) {
        document.querySelector('.message').textContent = 'Correct guess!';
        if (Number(document.querySelector('.score').textContent) > Number(document.querySelector('.highscore').textContent)){
            document.querySelector('.highscore').textContent = document.querySelector('.score').textContent;
        }
        document.querySelector('.score').textContent = 20;
        real_number = Math.ceil((20 * Math.random()));
    } else if (input_number < real_number) {
        document.querySelector('.score').textContent = score - 1;
        document.querySelector('.message').textContent = 'Too low!';
    } else {
        document.querySelector('.score').textContent = score - 1;
        document.querySelector('.message').textContent = 'Too high!';
    }

    if (Number(document.querySelector('.score').textContent) == 0) {
        document.querySelector('.message').textContent = 'You lost. Try again!';
        document.querySelector('.score').textContent = 20;
        real_number = Math.ceil((20 * Math.random()));
    }
});