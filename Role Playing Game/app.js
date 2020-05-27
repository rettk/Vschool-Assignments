// isGameDone

/* Outline

    STATUSES TO TRACK:
        Hit Points
            100
        

        Status
            Poisoned
                Lose 5 HP each turn
            Stunned
                -10 to all attacks and defenses
        Attack Level
            Starts at 0
       

        Enemy kill count - 
            as this goes up once you get to 7 enemies killed, you can try to attack the beast lord



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

let winGame = false

let hp = 100;

let items = ["Backpack"];  //potential items: heal potion, status potion, 

let armor = "none"

let weapon = "none"

let treasureBonus = 0

let status = [];

let enemyKills = 0;

let attackPower = 50

let attackModifier = 0

let attackDamage = 10

let weaponDamage = 0

let defensePower = 50

let defenseModifier = 0

let damageModifier = 0

var name = readLine.question(" What is your name?")
console.log("Greetings " + name + ", you are about to embark on a perilous journey. If you can kill 20 of the Demon Lord's minions, you may attack the Demon Lord himself.")


//enemies

// var enemies = [rat, goblin, ogre, chimeara, dragon]

let enemyList = ["Giant Rat", "Goblin", "Ogre", "Chimaera", "Dragon"]

let enemies = [{
    name: "Giant Rat",
    text: "A mangy 3-foot-long rat with huge fangs approaches you...",
    hp: 20,
    treasureChance: 70,
    tBonus: 0,
    damage: 10,

},
{
    name: "Goblin",
    text: "A little goblin with a club approaches you...",
    hp: 30,
    treasureChance: 75,
    tBonus: 10,
    damage: 15,
},
{
    name: "Ogre",
    text: "A medium-size ogre with a rusty machete approaches you...",
    hp: 65,
    treasureChance: 80,
    tBonus: 15,
    damage: 26,
},
{
    name: "Chimaera",
    text: "A strange, large creature with two heads approaches you...",
    hp: 95,
    treasureChance: 85,
    tBonus: 25,
    damage: 30,
},
{
    name: "Dragon",
    text: "A giant fire-breathing dragon approaches you...",
    hp: 110,
    treasureChance: 100,
    tBonus: 35,
    damage: 40,
}
]

// Fight function

function fight() {
    let monsterRoll = Math.floor(Math.random() * 100)
    // dragon 7, chimaera 10, ogre 20, goblin 30, rat 33
    let monsterIndex = 0
    let runStatus = false
    let treasureStatus = false
    if (monsterRoll <= 7) {
        monsterIndex = enemyList.indexOf("Dragon")
    } else if (monsterRoll > 7 && monsterRoll <= 17) {
        monsterIndex = enemyList.indexOf("Chimaera")
    } else if (monsterRoll > 17 && monsterRoll <= 37) {
        monsterIndex = enemyList.indexOf("Ogre")
    } else if (monsterRoll > 37 && monsterRoll <= 67) {
        monsterIndex = enemyList.indexOf("Goblin")
    } else if (monsterRoll > 67 && monsterRoll <= 100) {
        monsterIndex = enemyList.indexOf("Giant Rat")
    }
    let currentEnemy = { ...enemies[monsterIndex] }
    // let currentEnemy = {
    //     name: enemies[monsterIndex].name,
    //     text: enemies[monsterIndex].text,
    //     hp: enemies[monsterIndex].hp,
    //     treasureChance: enemies[monsterIndex].treasureChance
    // }
    console.log(currentEnemy.text)

    while (currentEnemy.hp > 0 && runStatus === false && treasureStatus === false) {
        const pickAction = readLine.keyIn('(i) for inventory/status,(e) for enemy status, (f) to fight, (r) to attempt to run')
        console.log(pickAction)
        if (pickAction === "r") {
            console.log("You attempt to run away.....")
            let runAttempt = Math.floor(Math.random() * 100)
            if (runAttempt < 40) {
                console.log('.....and you escape!')
                runStatus = true
            } else if (runAttempt >= 40) {
                console.log("....you are blocked and take a hit from the enemy!")
                console.log("You lose " + .5 * currentEnemy.damage + " hit points.")
                hp = hp -= .5 * currentEnemy.damage
                if (hp < 1) {
                    console.log("ouuuch!!!")
                    break
                }
            }
        } else if (pickAction === "e") {
            console.log(currentEnemy.name)
            console.log("Current Hit Points " + currentEnemy.hp)
        } else if (pickAction === "i") {
            inventory()
        } else if (pickAction === "f") {
            console.log("You attack and....")
            let attackRoll = Math.floor(Math.random() * 100)
            if (attackRoll < (attackPower + attackModifier)) {
                console.log("You hit it and deal " + (attackDamage + weaponDamage) + " damage!!!")
                currentEnemy.hp = currentEnemy.hp -= (attackDamage + weaponDamage)
                if (currentEnemy.hp < 1) {
                    enemyKills = enemyKills += 1
                    console.log("You killed the beast!!!")
                    console.log("You search around the dead creature's body and find.....")
                    treasureRoll = Math.floor(Math.random() * 100)
                    if (treasureRoll <= currentEnemy.treasureChance) {
                        console.log("a treasure!!")
                        treasureBonus = currentEnemy.tBonus
                        find()
                    } else {
                        console.log("....nothing!  :(")
                    }
                    break
                }
                let defenseRoll = Math.floor(Math.random() * 100)
                if (defenseRoll > (defensePower + defenseModifier)) {
                    console.log("It attacks back and hits you for " + (currentEnemy.damage - damageModifier) + " damage!!")
                    if (currentEnemy.damage - damageModifier < 1) {
                        console.log("Your armor prevents any damage!")
                    } else {
                        hp = hp -= (currentEnemy.damage - damageModifier)
                    }
                    if (hp < 1) {
                        console.log("ouuuch!!!")
                        break
                    }
                } else {
                    console.log("It swings at you and misses you!")
                }
            } else {
                console.log("You missed!!")
                let defenseRoll = Math.floor(Math.random() * 100)
                if (defenseRoll > (defensePower + defenseModifier)) {
                    console.log("It attacks back and hits you for " + (currentEnemy.damage - damageModifier) + " damage!!")
                    if (currentEnemy.damage - damageModifier < 1) {
                        console.log("Your armor prevents any damage!")
                    } else {
                        hp = hp -= (currentEnemy.damage - damageModifier)
                    }
                    if (hp < 1) {
                        console.log("ouuuch!!!")
                        break
                    }
                } else {
                    console.log("It swings at you and misses you!")
                }
            }
        }
    }
}


// Demon Lord fight

function demonLord() {
    console.log("Okay " + name + ", you enter the Demon Lord's chamber!")
    runStatus = false
    theBoss = {
        name: "Demon Lord",
        text: "You approach the Demon Lord...",
        hp: 180,
        treasureChance: 80,
        tBonus: 25,
        damage: 60,
    }
    while (theBoss.hp > 0 && runStatus === false) {
        const pickAction = readLine.keyIn('(i) for inventory/status,(e) for enemy status, (f) to fight, (r) to attempt to run')
        console.log(pickAction)
        if (pickAction === "r") {
            console.log("You attempt to run away.....")
            let runAttempt = Math.floor(Math.random() * 100)
            if (runAttempt < 40) {
                console.log('.....and you escape!')
                runStatus = true
            } else if (runAttempt >= 40) {
                console.log("....you are blocked and take a hit from the Demon Lord!")
                console.log("You lose " + .5 * theBoss.damage + " hit points.")
                hp = hp -= .5 * theBoss.damage
                if (hp < 1) {
                    console.log("ouuuch!!!")
                    break
                }
            }
        } else if (pickAction === "e") {
            console.log(theBoss.name)
            console.log("Current Hit Points " + theBoss.hp)
        } else if (pickAction === "i") {
            inventory()
        } else if (pickAction === "f") {
            console.log("You attack and....")
            let attackRoll = Math.floor(Math.random() * 100)
            if (attackRoll < (attackPower + attackModifier)) {
                console.log("You hit it and deal " + (attackDamage + weaponDamage) + " damage!!!")
                theBoss.hp = theBoss.hp -= (attackDamage + weaponDamage)
                if (theBoss.hp < 1) {
                    enemyKills = enemyKills += 1
                    console.log("You killed the Demon Lord!!!")
                    console.log("You have freed the earth from his evil presence forever")
                    console.log("You, " + name + ", are the hero of the world.")
                    console.log("THE END")
                    winGame = true
                    break
                }
                let defenseRoll = Math.floor(Math.random() * 100)
                if (defenseRoll > (defensePower + defenseModifier)) {
                    console.log("He attacks back and hits you for " + (theBoss.damage - damageModifier) + " damage!!")
                    hp = hp -= (theBoss.damage - damageModifier)
                    if (hp < 1) {
                        console.log("ouuuch!!!")
                        break
                    }
                } else {
                    console.log("He swings at you and misses you!")
                }
            } else {
                console.log("You missed!!")
                let defenseRoll = Math.floor(Math.random() * 100)
                if (defenseRoll > (defensePower + defenseModifier)) {
                    console.log("It attacks back and hits you for " + (theBoss.damage - damageModifier) + " damage!!")
                    hp = hp -= (theBoss.damage - damageModifier)
                    if (hp < 1) {
                        console.log("ouuuch!!!")
                        break
                    }
                } else {
                    console.log("He swings at you and misses you!")
                }
            }
        }
    }
}



// INSERT WHILE LOOP  - while HP > 0, otherwise die.
while (hp > 1 && winGame === false) {
    decide()
}
if (hp < 1) {
    console.log(name + ", you have dieeeeeed foooool!!!!")
    console.log("GAME OVER")
}





// decide function for navigating world

function decide() {
    if (enemyKills < 20) {
        const pickAction = readLine.keyIn('You are at a road. Pick an action: (w) for walk, (i) for inventory/status')
        console.log(pickAction)
        if (pickAction === "w") {
            walk()
        } else if (pickAction === "i") {
            inventory()
        }
    } else {
        const pickAction = readLine.keyIn(name + ', you have killed enough minions that you can attack the Demon Lord if you choose to. Pick an action: (w) for walk, (i) for inventory/status, (d) to attack the Demon Lord')
        console.log(pickAction)
        if (pickAction === "w") {
            walk()
        } else if (pickAction === "i") {
            inventory()
        } else if (pickAction === "d") {
            demonLord()
        }
    }
}

// walk function

function walk() {
    let walkRoll = Math.floor(Math.random() * 100)
    if (walkRoll < 15) {
        console.log("You found something!")
        find()
    } else if (walkRoll >= 14 && walkRoll < 49) {
        console.log("You walk and.....nothing happens")
    } else if (walkRoll >= 50) {
        fight()
    }
}


// find item function


// Items

//             Light Armor - adds + 15 to all defense, -5 dam
//             Medium Armor - adds +25 to all defense, -10 dam
//             Heavy Armor - prevents stunned, adds +32 to all defense, -15 dam
//             Antidote - cures poison (can be used in battle)
//             Health Potion - heals 20 HP (can be used in battle)
//             Smoke Bomb instant escape - (can be used in battle)

// Weapons - only 1 at a time
// stick - av5 - + 5 dam
// club - 10 + 10 dam
// rusty sword - 15 + 15 dam
// iron sword - 20 + 20 dam
// magic sword - 25 + 25 dam


function find() {
    console.log("You found a....")
    let treasureRoll = (Math.floor(Math.random() * 100) - treasureBonus)
    if (treasureRoll <= -10) {
        console.log("You found the Legendary Magic Sword of the Ancients!!!")
        weapon = "Magic Sword"
        attackModifier = 25
        weaponDamage = 35
    } else if (treasureRoll > -10 && treasureRoll <= 0) {
        console.log("...set of Magic Armor!")
        armor = "Magic Armor"
        defenseModifier = 25
        damageModifier = 20
    } else if (treasureRoll > 0 && treasureRoll <= 10) {
        console.log("...set of Heavy Armor!")
        if (armor === "Magic Armor") {
            console.log("But you already have better armor so you throw it away.")
        } else {
            armor = "Heavy Armor"
            defenseModifier = 15
            damageModifier = 15
        }
    } else if (treasureRoll > 10 && treasureRoll <= 20) {
        console.log("...majestic Broadsword!")
        if (weapon === "Magic Sword") {
            console.log("But you already have a better weapon so you throw it away.")
        } else {
            weapon = "Broadsword"
            attackModifier = 20
            weaponDamage = 20
        }
    } else if (treasureRoll > 20 && treasureRoll <= 35) {
        console.log("...set of Light Armor!")
        if (armor === "Heavy Armor" || armor === "Magic Armor") {
            console.log("But you already have better armor so you throw it away.")
        } else {
            armor = "Light Armor"
            defenseModifier = 10
            damageModifier = 10
        }
    } else if (treasureRoll > 35 && treasureRoll <= 50) {
        console.log("...rusty sword!")
        if (weapon === "Magic Sword" || weapon === "Broadsword") {
            console.log("But you already have a better weapon so you throw it away.")
        } else {
            weapon = "Rusty Sword"
            attackModifier = 15
            weaponDamage = 10
        }
    } else if (treasureRoll > 50 && treasureRoll <= 100) {
        console.log("...healing potion!")
        items.push("Healing Potion")
    }
    treasureBonus = 0
}


// inventory function to show status and item list

function inventory() {
    console.log("Hit Points: " + hp)
    console.log("Items: " + items)
    console.log("Weapon: " + weapon)
    console.log("Armor: " + armor)
    console.log("Status: " + status)
    console.log("Enemy Kills: " + enemyKills)
    var index = readLine.keyInSelect(items, 'Use item?');
    if (items[index] === "Healing Potion") {
        if (hp >= 76) {
            console.log("You don't need it yet! Your hit points are too high.")
        } else {
            console.log("You drink the potion and gain 25 health back!")
            hp = hp += 25
            items.splice(items.indexOf("Healing Potion"), 1)
        }
    }
}

