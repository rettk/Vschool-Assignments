var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


// write a function that:

// Returns a list of everyone older than 18, which is
// sorted alphabetically by last name, and where
// each name and age is embedded in a string that looks like an HTML <li> element.

function sortedOfAge(arr) {
    arr.sort(function (a, b) {
        if (a.lastName < b.lastName) {
            return -1
        } if (a.lastName > b.lastName) {
            return 1
        }
        return 0
    })

    return arr.reduce(function (final, vbl) {
        if (vbl.age >= 18) {
            final.push(JSON.stringify("<li>" + vbl.firstName + " " + vbl.lastName + " is " + vbl.age + "</li>"))
        }
        return final
    }, [])
}


// final.push(JSON.stringify(vbl))

// return final.firstName + " " + final.lastName + " is " + final.age

console.log(sortedOfAge(peopleArray));

/*
Output:
[
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>"
]
*/