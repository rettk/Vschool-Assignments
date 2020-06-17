// GREEN CIRCLE ---------------------------------

// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...animals) {
    let newList = []
    newList.push(...animals)
    console.log(newList)
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");

// ["dog", "cat", "mouse", "jackolope", "platypus"]

console.log(Math.max(...[1,3,5,8,4,3,6,9,0]))


// Write a function that returns a food object with the array names as properties using Object Literals:  ?????

// function combineFruit(fruit, sweets, vegetables) {
//     return {}
// }

// combineFruit(["apple", "pear"],
//     ["cake", "pie"],
//     ["carrit"])
// // => 
// {
//     fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//             vegetables: ["carrit"]
// }




// Use destructuring to use the property names as variables. Desructure the object in the parameter:

const vacation = {
    location: "Burly Idaho",
    duration: "2 weeks"
};

function parseSentence({ location, duration }) {
    return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence(vacation))


// Use destructuring to make this code ES6:

function returnFirst(items) {
    const firstItem = items[0]; /*change this line to be es6*/
    return firstItem
}



// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

// original:
// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr) {
//     /*your code here*/
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
// }

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

returnFavorites = (arr) => {
    let [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`
}

console.log(returnFavorites(favoriteActivities))


// BLUE SQUARE ---------------------------------


// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals(arr1, arr2, arr3) {
    allAnimals = [...arr1, ...arr2, ...arr3]
    notWork = [arr1, arr2, arr3]
    console.log(allAnimals)
    console.log(notWork)
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

// ["dog", "cat", "mouse", "jackolope", "platypus"]




// BLACK DIAMOND ---------------------------------


// Try to make the following function more ES6xy:

// Original:
// function product(a, b, c, d, e) {
//     var numbers = [a, b, c, d, e];

//     return numbers.reduce(function (acc, number) {
//         return acc - number;
//     }, 1)
// }

function product(...a) {
    var numbers = [...a];

    return numbers.reduce((acc, number) => {
        return acc - number;
    }, 1)
}

console.log(product(100, 50, 20, 15, 10))


// Make the following function more ES6xy. Use at least both the rest and spread operators:

let array = ["go", "stay", "hello"]
let hello = ["what?", "sillybutt","energy"]


// Original:
// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
// }

function unshift(...array, ...e) {
    return [...e].concat(...array);
    }

console.log(unshift(array,hello))


// DOUBLE BLACK DIAMOND ---------------------------------



// Write some destructuring code to help this function out. Use object literals to simplify it:

function populatePeople(names) {
    return names.map(function (name) {
        name = name.split(" ");
        // your code
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])

//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
// ]

