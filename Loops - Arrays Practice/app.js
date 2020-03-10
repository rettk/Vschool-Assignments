// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// for(var i=0; i< officeItems.length; i++){
//     if (officeItems[i] === "computers"){
//     console.log(officeItems)
// }
// }



var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 


  for(i=0; i<peopleWhoWantToSeeMadMaxFuryRoad.length;i++){
      if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >=18){
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name && "old enough")
          
      }
  }

  for(i=0; i<peopleWhoWantToSeeMadMaxFuryRoad.length;i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name && "not old enough")
        
    }
}



var people = [
  {
    name: "James",
    age: 12,
    gender: "male"
  },{
    name: "Tina",
    age: 80,
    gender: "female"
  },{
    name: "Sue",
    age: 22,
    gender: "female"
  },{
    name: "Billy Bob",
    age: 30,
    gender: "male"
  },{
    name: "Jane",
    age: 4,
    gender: "female"
  }
] 

  for (i = 0; i < people.length; i++) {
    console.log(people[i].name)
  }



//   function clubVerifier() {
//     if (person.name[0] === 'B' && person.age < 26) {
//         console.log('welcoe to the club!')
//     } else if (person.age > 26) {
//         console.log()
//     } else {
//         console.log('you;re not allowed in')
//     }
// }


var color = "green"

switch(color){
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
