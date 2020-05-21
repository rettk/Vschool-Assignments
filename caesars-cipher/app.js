var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

const alphabet = "abcdefghijklmnopqrstuvwxyz"

const splitInput = input.split("")
const arrayLocation = []  //array containing index locations of all user input words
const shiftedArray = []   //array containing index locations being shifted by user choice
const finalEncryption = []

for (i = 0; i < splitInput.length; i++) {
    const letterLocation = alphabet.indexOf(splitInput[i])
    arrayLocation.push(letterLocation)

    if (letterLocation === -1) {
        finalEncryption.push(splitInput[i])
        shiftedArray.push("")
    } else {
        shiftedArray.push((arrayLocation[i] + shift)%26)
        finalEncryption.push(alphabet[shiftedArray[i]])
    }
}

const finalAnswer = finalEncryption.join("")

// console.log(input)
// console.log(shift)
// console.log(splitInput)
// console.log(arrayLocation)
// console.log(shiftedArray)
// console.log(finalEncryption)
console.log(finalAnswer)

