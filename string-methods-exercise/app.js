// FUNCTION 1
var string = "hello tHERe BudDY"

function bigSmall() {
    var upper = string.toUpperCase();
    var lower = string.toLowerCase();
    var both = upper + lower;
    console.log(both)
}

bigSmall()




// FUNCTION 2
var string = "hello tHERe BudDY"

function halfDown() {

    var halfString = string.length / 2
    var finalAnswer = Math.floor(halfString)
    console.log(finalAnswer)
}

halfDown()


// FUNCTION 3
var string = "hello siwlwkdj;adsflaksdjf"

function firstHalf() {
    var splitFront = string.slice(0, string.length / 2)
    var splitEnd = string.slice(string.length / 2, string.length)
    console.log(splitFront)
}

firstHalf()

// FUNCTION 4
var string = "hello tHERe BudDY"

function MixUp() {
    var splitFront = string.slice(0, string.length / 2).toUpperCase()
    var splitEnd = string.slice(string.length / 2, string.length).toLowerCase()
    var finalCombine = splitFront.concat(splitEnd)
    // also would work:   finalCombine = splitFront + SplitEnd
    console.log(finalCombine)
}

MixUp()





