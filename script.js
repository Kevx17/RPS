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
const container = document.querySelector("#container");


function playgame(user) {

computer = GetComputerChoice();

//after we got the users input we compere it to the computers choice and increment the counter variables based on the results
if (computer == user) {
    message = "its a tie!";
}
else if (computer == 3 && user == 1){
    message = "You Win! Rock Beats Scissors!";
    count2++;
}
else if (computer == 3 && user == 2){
    message = "You Lose! Scissors Beats Paper!";
    count1++;
}
else if (computer == 2 && user == 1){
        message = "You Lose! Paper Beats Rock!";
        count1++;
    }
else if (computer == 2 && user == 3){
        message = "You Win! Scissors Beats Paper!";
        count2++;
    }
else if (computer == 1 && user == 2){
        message ="You Win! Paper Beats Rock!";
        count2++;
    }
else if (computer == 1 && user == 3){
        message = "You Lose! Rock Beats Scissors!";
        count1++;
    }
    // Append the message to the container div
    const newText1 = document.createTextNode(message + " ");
    const newText2 = document.createTextNode('score: ' + count2.toString() + '/' + count1.toString());
    const br = document.createElement("br");

    container.appendChild(newText1);
    container.appendChild(newText2);
    container.appendChild(br);

    // Scroll to the bottom of the container to keep new content visible
    container.scrollTop = container.scrollHeight;
    //console.log('score: ' + count2.toString() +'/'+ count1.toString()); 
}
    




btnRock.addEventListener("click", function() {
    if (count1 == 0 && count2 == 0) {
        container.innerHTML = "";
    }
    playgame(1);
    if (count1 == 5) {
        container.innerHTML = "You Lost!";
        count1 = 0;
        count2 = 0;
    }
    else if (count2 == 5) {
        container.innerHTML = "You Won!";
        count1 = 0;
        count2 = 0;
    }
});

btnPaper.addEventListener("click", function() {
    if (count1 == 0 && count2 == 0) {
        container.innerHTML = "";
    }
    playgame(2);
    if (count1 == 5) {
        container.innerHTML = "You Lost!";
        count1 = 0;
        count2 = 0;
    }
    else if (count2 == 5) {
        container.innerHTML = "You Won!";
        count1 = 0;
        count2 = 0;
    }
});

btnScissors.addEventListener("click", function() {
    if (count1 == 0 && count2 == 0) {
        container.innerHTML = "";
    }
    playgame(3);
    if (count1 == 5) {
        container.innerHTML = "You Lost!";
        count1 = 0;
        count2 = 0;
    }
    else if (count2 == 5) {
        container.innerHTML = "You Won!";
        count1 = 0;
        count2 = 0;
    }
});

