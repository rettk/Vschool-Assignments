//Handle the form
//Submit new list item

    //List item container
        //h6 list the item
        //button that allows us to delete the item

//Access to the form and the list container
const form = document['shopping-form']
const listContainer = document.getElementById('list-container')

form.addEventListener('submit', function(event){
    //Prevent the refresh upon submit
    event.preventDefault()
    
    //Create a new list item for mom's shopping list
    //Add new list item to the shopping list container
    const item = form['shopping-item'].value
    addItem(item)

    return 'Finished'
})

////////////////////////////
//Helper functions
////////////////////////////


function addItem(whateverMammaWannaBuy) {
    console.log(whateverMammaWannaBuy)
    //Create new element

    const itemContainer = document.createElement('li')
    const title = document.createElement('h6')
    const deleteItem = document.createElement('button')

    //Editing

    title.textContent = whateverMammaWannaBuy
    deleteItem.textContent = 'delete'

    //Add an eventlistener to the deletebutton that deletes the current item
    deleteItem.addEventListener('click', function(event){
       //Not a form, therefore we don't need to prevent default refresh
       //We have access to the item we want to delete
       //We want to remove the itemContainer from the listContainer
        listContainer.removeChild(itemContainer)
       
    })

    //Appending
    //Append the title and deleteItem to the itemContainer
    itemContainer.appendChild(title)
    itemContainer.appendChild(deleteItem)
    //Append the itemContainer to the listContainer
    listContainer.appendChild(itemContainer)
}