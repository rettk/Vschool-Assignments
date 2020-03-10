//Strings "double" 'single'
//Numbers
//Arrays 
var letters = ['a', 'b', 'c']
console.log(letters[0])

//objects
var address = {
  number: 465,
  street: 'elm'
}
console.log(address.street)

var person = {
  name: 'Bob',
  age: 25,
  height: 60
}
var people = [
  {
    name: 'Bob',
    age: 25,
    height: 60
  },
  {
    name: 'pil',
    age: 25,
    height: 60
  },
  {
    name: 'fil',
    age: 25,
    height: 60
  }
]

function clubVerifier() {
  if (person.name[0] === 'B' && person.age < 26) {
    console.log('welcoe to the club!')
  } else if (person.age > 26) {
    console.log()
  } else {
    console.log('you;re not allowed in')
  }
}

// for (starting point; ending point; how to get from start to end){
//    execute this code for the loop
//}
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']


for (i = 0; i < people.length; i++) {
  console.log(people[i].name)
}



var people2 = [
  {
    name: "James",
    age: 12,
    gender: "male"
  }, {
    name: "Tina",
    age: 80,
    gender: "female"
  }, {
    name: "Sue",
    age: 22,
    gender: "female"
  }, {
    name: "Billy Bob",
    age: 30,
    gender: "male"
  }, {
    name: "Jane",
    age: 4,
    gender: "female"
  }
]

for (i = 0; i < people2.length; i++) {
  console.log(people2[i].name)
}


for ( let i = 7; i < 20; i++) {
  console.log(i)
}

var color = "green"

switch (color) {
  case "red":
    console.log("The color is red")
    break
  case "blue":
    console.log("The color is blue")
    break
  case "yellow":
    console.log("The color is yellow")
    break
  case "green":
    console.log("The color is green")
    break
}


console.log(people2[0]["name"])

clubVerifier(people2[2])

clubVerifier(people[3])




function clubVerify2() {
  for (i = 0; i < people2.length; i++) {
    if (person.name[i] === 'B' && person.age < 26) {
      console.log(people2[i].name + ' welcome to the club!')
    } else if (person.age > 26) {
      console.log('not sure')
    } else {
      console.log('you;re not allowed in')
    }
  }
}


clubVerify2(people2[i])
console.log(letters[2])


