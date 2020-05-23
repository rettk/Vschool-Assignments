// PROB 1
// Write a function that takes an array of numbers and returns the largest (without using Math.max())

// largest([3, 5, 2, 8, 1]) // => 8

const numberArray = [4, 5, 8, 4, 0, 1, 5, 4, 21, 2, 1, 65, 4, 2, 7, 2, 8]


const largest = (numberArray) => {
    let largestNumber = 0;
    for (i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > largestNumber) {
            largestNumber = numberArray[i]
            // largestNumber.splice(0, 1, numberArray[i])
        }
    }
    console.log(largestNumber)
}

largest(numberArray)


// PROB 2
// Write a function that takes an array of words and a character and returns each word 
// that has that character present. 

// lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]


const words = ["booger", "jesus", "yodeling", "anchor", "um", "zoo", "abstract", "goat", "jump"]
const character = "o"

const analyzeWords = (words, character) => {
    const answerList = []
    for (i = 0; i < words.length; i++) {
        for (j = 0; j < words[i].length; j++) {
            if (words[i][j] === character) {
                if (answerList.indexOf(words[i]) < 0) {
                    answerList.push(words[i])
                }
            }
        }
    }
    console.log(answerList)
}

analyzeWords(words, character)

analyzeWords(words, "j")

// PROB 3
// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

// isDivisible(4, 2) // => true
// isDivisible(9, 3) // => true
// isDivisible(15, 4) // => false

const divisible = (num1, num2) => {
    let answer = false
    if (num1 % num2 > 0) {
        answer = false
    } else {
        answer = true
    }
    console.log(answer)
}

divisible(25, 5)


