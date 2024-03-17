function GetComputerChoice() {
    //get a random number from 0 to 2
    let i = Math.floor(Math.random() * 3); 
    //get the choice of the computer based on the random number 
    if (i == 0){
        return(1);
    }
    else if (i == 1){
        return(2);
    }
    else {
        return(3);
    }
}
let computer;
let count1 = 0;
let count2 = 0; 
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");


function playgame(user) {

computer = GetComputerChoice();

//after we got the users input we compere it to the computers choice and increment the counter variables based on the results
if (computer == user) {
    console.log("its a tie!");
}
else if (computer == 3 && user == 1){
    console.log("You Win! Rock Beats Scissors!");
    count2++;
}
else if (computer == 3 && user == 2){
    console.log("You Lose! Scissors Beats Paper!");
    count1++;
}
else if (computer == 2 && user == 1){
        console.log("You Lose! Paper Beats Rock!");
        count1++;
    }
else if (computer == 2 && user == 3){
        console.log("You Win! Scissors Beats Paper!");
        count2++;
    }
else if (computer == 1 && user == 2){
        console.log("You Win! Paper Beats Rock!");
        count2++;
    }
else if (computer == 1 && user == 3){
        console.log("You Lose! Rock Beats Scissors!");
        count1++;
    }
    //score is being displayed
    console.log('score: ' + count2.toString() +'/'+ count1.toString()); 
}
    

//plays a game of 5 rounds
/*for (let i = 1; i <= 5; i++) {
        playgame(prompt("Rock, Paper, Scissors! Enter 1 for Rock, 2 for Paper and 3 for Scissors: "));
    }
if (count2 > count1) {
    console.log("You Win!");
}
else if (count2 == count1){
    console.log("Tie!");
}
else{
    console.log("You Lose!");
}**/




btnRock.addEventListener("click", function() {
    playgame(1);
});

btnPaper.addEventListener("click", function() {
    playgame(2);
});

btnScissors.addEventListener("click", function() {
    playgame(3);
});
