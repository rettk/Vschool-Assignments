var form = document.addItem


form.addEventListener("submit", function (event) {
    event.preventDefault()

    var listItem = form.title.value

    // create element for what you need (li, or h1, or whatever)
    var listPush = document.createElement('li')
    var editButton = document.createElement('button')
    var xButton = document.createElement('button')
    editButton.textContent = "edit"
    xButton.textContent = "x"
    // make the variable equal to the input data 
    listPush.textContent = listItem
    // append the text content data to the document in the right place
    listPush.appendChild(editButton)
    listPush.appendChild(xButton)
    document.getElementById("list").appendChild(listPush)
    xButton.addEventListener("click", function(){
        document.getElementById("list").removeChild(listPush)
    })
    // option 2 for this would also work: 
    // document.getElementsByTagName("ul")[0].append(listPush)

    // listPush.innerHTML += '<p><button>edit</button><button>X</button>'

})


// ostup event listener for each button



