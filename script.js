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

let  check = false
let computer = GetComputerChoice()

while (!check) {
    
let user = prompt("Rock, Paper, Scissors! Enter 1 for Rock, 2 for Paper and 3 for Scissors: ");

if (Number(user) == 1 && Number(user) == 2  && Number(user) == 3) {
   check = true;
}
else{
  console.log{"please enter Enter 1 for Rock, 2 for Paper and 3 for Scissors!"};
}
}