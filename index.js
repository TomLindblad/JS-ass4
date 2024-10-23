let numb;
let lowestnumb = 1;
let highestnumb = 100;
let guess;
let wrongguess = false;
let message = "";
let timesWon = 0;
let again;

guessTheNumber();

function guessTheNumber(){
    numb = Math.floor(Math.random() * 100 + 1);

while (!wrongguess){
    guess = prompt(`${message}Guess a number between ${lowestnumb} and ${highestnumb}.`)
    
    if (guess == numb){
        alert(`You are correct! You win!`)
        timesWon++;
        wrongguess = !wrongguess;      
        again = prompt("try again? y/n");
    
        if(again == "y"){
            wrongguess = !wrongguess;
            lowestnumb = 1;
            highestnumb = 100;
            message = "";
            guessTheNumber();
        }
        
        else{
            alert(`Thank you for playing. You won ${timesWon} times. Good job!`);
        }
    }

    else if (guess < numb) {
        lowestnumb = guess;
        message = ("Guess is to low. Try again. ");
    }

    else if (guess > numb){
        highestnumb = guess;
        message = ("Guess is to high. Try again. ");
    }
}
}