const form = document.form

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let dietRestrictions = []

    for (i = 0; i < form.restrictions.length; i++) {
        if (form.restrictions[i].checked) {
            dietRestrictions.push(form.restrictions[i].value)
        }
    }



    alert("First Name: " + form.firstName.value + "\nLast Name: " + form.lastName.value + "\nAge: " + form.age.value + "\nGender: " + form.gender.value +
        "\nDestination: " + form.destination.value + "\nDietary Restrictions: " + dietRestrictions)



})

