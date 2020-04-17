// isGameDone

/* Outline

    STATUSES TO TRACK:
        Hit Points
            100
        Items
            Heavy Armor - prevents stunned, adds +15 to all defense
            Antidote - cures poison (can be used in battle)
            Health Potion - heals 20 HP (can be used in battle)
            Smoke Bomb instant escape - (can be used in battle)

        Status
            Poisoned
                Lose 5 HP each turn
            Stunned
                -10 to all attacks and defenses
        Attack Level
            Starts at 0
        Weapons - only 1 at a time
            stick - 10
            knife - 15
            rusty sword - 20
            iron sword - 30
            magic sword - 40

        Enemy kill count - 
            as this goes up once you get to 7 enemies killed, you can try to attack the beast lord


    ENEMIES:
        
        Balrog
            HP 100
            Treasure chance 100
            Attack 
            Defense



    BATTLE SEQUENCE
        check status
            monster dead?
                add 1 to kill count
                check for treasure drop
                if yes, add treasure to either item or weapon
                go back to walking
        decide action
            - check status
                returns console log info
                return to decide action
            - use item
                show list of items that can be used
                select item, apply effect, delete item from inventory
                return to decide action

            - attack
                Roll random number and add attack level. If 60 or higher, hit!
            - run
                Roll random number. If higher than enemy escape number, escape!
                
            

// Is game done?  




*/

// load readLine

var readLine = require("readline-sync")

//personal stats

var hp = 100;

var items = ["Potion","Cat","Dog"];

var weapons = [];

var status = [];

var enemyKills = [0];


// decide function for navigating world

function decide (){
    const pickAction = readLine.keyIn('(w) for walk, (i) for inventory/status')
    console.log(pickAction)
    if(pickAction === "w"){
        fight()
    }else  if (pickAction === "i"){
        inventory()
    }
}

// inventory function to show status and item list

function inventory (){
    console.log("Hit Points: " + hp)
    console.log("Items: " + items)
    console.log("Weapons: " + weapons)
    console.log("Status: " + status)
    console.log("Enemy Kills: " + enemyKills)
    var index = readLine.keyInSelect(items, 'Use item?');
    console.log (index)
}


// fight function

// function fight () {
//     if random 
// }

//game variables

var name = readLine.question(" What is your name?")

decide ()

var random = Math.floor(Math.random() * 100);



//enemies

// var enemies = [rat, goblin, ogre, chimeara, dragon]

// var rat = {
//     text: "A mangy 3 foot long rat with huge fangs approaches you...";
//     hp: 20;
//     treasureChance: 20;

// }



// INSERT WHILE LOOP  - while HP > 0, otherwise die.
while (hp<0){
    decide();
}





console.log(random)
console.log("Hit Points: " + hp)
console.log("Items: " + items)
console.log("Weapons: " + weapons)
console.log("Status: " + status)
console.log("Enemy Kills: " + enemyKills)


// // while (true){
//     if("w"==="w")
// }

