const readline = require ("readline-sync");
const name = readline.question("What is your name? ");
const options = ["Put hand in hole","Find the key","Open the door"];
var haveKey = false
const choice = readline.keyInSelect(options, "Hello " + name + ", you are stuck in a room with only 3 options. What do you choose?");
if(options[choice] === "Find the key"){
    haveKey = true;
    console.log("You found the key!");
    else if(choice === 0){
        console.log("You stick your hand in the hole and get electrocuted. You're dead. Good choice.")
    }
    else (){
        console.log("hmmm")
    }
}

// while(haveKey === false){

// }