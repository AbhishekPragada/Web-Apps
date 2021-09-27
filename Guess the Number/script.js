'use strict';

let secretnumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener
('click', function(){
        let guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = 'Type the number 🎃';
    }
    else if(guess == secretnumber){
        document.querySelector('.message').textContent = 'You have guessed it right🎉🎊';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretnumber;
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess !== secretnumber && score > 1){
        document.querySelector('.message').textContent = guess > secretnumber ? 'Lower ...⏬' : 'Higher ...⏫';
        score --;
        document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = 'You Lose 👎';
    }
});

document.querySelector('.again').addEventListener
('click', function(){
    score = 20;
    secretnumber = Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
});