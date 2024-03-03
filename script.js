function GetComputerChoice() {
    //get a random number from 0 to 2
    let i = Math.floor(Math.random() * 3); 
    //get the choice of the computer based on the random number 
    if (i == 0){
        return("Rock");
    }
    else if (i == 1){
        return("Paper");
    }
    else {
        return("Scissors");
    }
}
// check checks wether the users input is correct (1, 2 or 3)
let  check = false
let computer = GetComputerChoice()
let user

do {
        
user = prompt("Rock, Paper, Scissors! Enter 1 for Rock, 2 for Paper and 3 for Scissors: ");

if (Number(user) == 1 || Number(user) == 2  || Number(user) == 3) {
   check = true;
   if (user == 1){
    user = "Rock";
}
else if (user == 2){
    user = "Paper";
}
else {
    user = "Scissors";
}
}

else{
  console.log("please enter Enter 1 for Rock, 2 for Paper and 3 for Scissors!");
}

} while (!check);

if (computer == user) {
    console.log("its a tie! both of you chose " + user + "!");
}
else if (computer == "Scissors" && user == "Rock"){
    console.log("You Win! Rock Beats Scissors!");
}
else if (computer == "Scissors" && user == "Paper"){
    console.log("You Lose! Scissors Beats Paper!");
}
else if (computer == "Paper" && user == "Rock"){
    console.log("You Lose! Paper Beats Rock!");
}
else if (computer == "Paper" && user == "Scissors"){
    console.log("You Win! Scissors Beats Paper!");
}
else if (computer == "Rock" && user == "Paper"){
    console.log("You Win! Paper Beats Rock!");
}
else if (computer == "Rock" && user == "Scissors"){
    console.log("You Lose! Rock Beats Scissors!");
}
