class Player {
    constructor(name, status = "Small", hasStar = false, gameActive = true, coinCount = 0) {
        // { name = "name", type = 0, status = ("Powered Up", "Big", "Small", "Dead"), hasStar = false, setName = ("Mario", "Luigi"), gotHit, gotPowerup, gameActive = true }  ????
        this.name = name
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
        this.coinCount = coinCount
    }


    setName(name) {
        this.name = name
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

    starPower() {
        this.hasStar = true
        setTimeout(() => {
            this.hasStar = false
            console.log("Your star wore off!")
        }, 5000)
    }


    gotPowerup() {
        if (this.status === "Small") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Powered Up"
        } else if (this.status === "Powered Up" && this.hasStar === false) {
            console.log("You got a star!!!")
            this.starPower()
        } else if (this.status === "Powered Up" && this.hasStar === true) {
            console.log("You are already at max power!")
        }
    }

    print() {
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.coinCount}\n`)
    }


}



const test = new Player()
test.setName("Mario")


console.log(test)


const getRandomArbitrary = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}


// {
//     return Math.floor(Math.random() * (max - min) + min);  // math.floor rounds to whole number
// }



let intervalID

const turn = (play) => {
    if (!play.gameActive) {
        return clearInterval(intervalID)
    }
    let roll = getRandomArbitrary(3)
    if (roll === 0) {
        console.log(`Ouch you got hit!`)
        play.gotHit()
        play.print()
    } else if (roll === 1) {
        console.log(`You got a powerup!`)
        play.gotPowerup()
        play.print()
    } else if (roll === 2) {
        console.log(`Ding! A coin!`)
        play.addCoin()
        play.print()
    }
}



const game = (time) => {
    intervalID = setInterval(() => turn(time), 1500) //remember no parantheses on function similar to addEventListener
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
