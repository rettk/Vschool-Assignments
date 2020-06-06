class Player {
    constructor(name, status, hasStar, gameActive) {
        // { name = "name", type = 0, status = ("Powered Up", "Big", "Small", "Dead"), hasStar = false, setName = ("Mario", "Luigi"), gotHit, gotPowerup, gameActive = true }  ????
        this.name = name
        this.status = "Small"
        this.hasStar = false
        this.gameActive = true
        this.coinCount = 0
    }


    setName() {
        this.name = "Luigi"
    }

    addCoin() {
        this.coinCount++
    }

    gotHit() {
        if (this.hasStar === true) {
            console.log(`The star has protected you!`)
        } else if (this.status === "Powered Up") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Small"
        } else if (this.status === "Small") {
            this.status = "Dead"
            this.gameActive = false
            console.log(`Good game, you died though!  Try again!`)
        }
    }

    gotPowerup() {
        if (this.status === "Small") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Powered Up"
        } else if (this.status === "Powered Up") {
            this.hasStar = true
        }
    }

    print() {
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.coinCount}\n`)
    }


}



const test = new Player()



console.log(test)


const getRandomArbitrary = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}


// {
//     return Math.floor(Math.random() * (max - min) + min);  // math.floor rounds to whole number
// }



let intervalID

const turn = (Player) => {
    if (!Player.gameActive) {
        clearInterval(intervalID)
    }
    let roll = getRandomArbitrary(3)
    if (roll === 0) {
        console.log(`Ouch you got hit!`)
        Player.gotHit()
        Player.print()
    } else if (roll === 1) {
        console.log(`You got a powerup!`)
        Player.gotPowerup()
        Player.print()
    } else if (roll === 2) {
        console.log(`Ding! A coin!`)
        Player.addCoin()
        Player.print()
    }
}



const game = (Player) => {
    intervalID = setInterval(() => turn(Player), 1500) //remember no parantheses on function similar to addEventListener
}

// btn.addEventListener("click", () =>  myFunction(data))

// function myFunction(data){

// }    SIMILAR SYNTAX

game(test)





// Create a random range function that returns either 0, 1, or 2.

// If the value is 0 call the gotHit() function on the object.
// If the value is 1 call the gotPowerup() function on the object
// If the value is 2 call the addCoin() function

// Then call the print method on the object.

// Now put the random range function inside a setInterval function that ends after gameActive === false
