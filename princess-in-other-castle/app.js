class Player {
    constructor(name, type, status, hasStar, gameActive) {
        // { name = "name", type = 0, status = ("Powered Up", "Big", "Small", "Dead"), hasStar = false, setName = ("Mario", "Luigi"), gotHit, gotPowerup, gameActive = true }  ????
        this.name = name
        this.type = type
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
    }

    // setName ()= ("Mario", "Luigi")
    // addCoin()
    // print()
    // gotHit()
    // gotPowerup()
}

const test = new Player()

console.log(test)


getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

const coinCount = 0

game = () =>{
    let roll = getRandomArbitrary(0,2)
    if (roll === 0) {
        gotHit()
    } else if (roll === 1){
        gotPowerup()
    } else if (roll === 2){
        addCoin()
    }
}


while (Player.status != "Dead"){
    game()
}

console.log(`Good game, you died though!  Try again!`)

// Create a random range function that returns either 0, 1, or 2.

// If the value is 0 call the gotHit() function on the object.
// If the value is 1 call the gotPowerup() function on the object
// If the value is 2 call the addCoin() function

// Then call the print method on the object.

// Now put the random range function inside a setInterval function that ends after gameActive === false
