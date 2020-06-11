newPage = () => {
    axios.get("https://api.vschool.io/rett/todo")
        .then(results => displayList(results.data))
        .catch(error => console.log(error))
}


displayList = (data) => {
    console.log(data) //TESTING AND UNECESSARY
    document.getElementById("list").textContent = ""
    for (let i = 0; i < data.length; i++) {
        const li = document.createElement('li')
        const box = document.createElement("p")
        li.innerHTML = `<input type="checkbox" name="button${i}"> ` + data[i].title + ` <button id="delete${i}" onclick="deleteItem(${i})">X</button>`
        li.setAttribute("id", `line${i}`)
        document.getElementById("list").appendChild(li)
        document.getElementById("list").appendChild(box)
        if (data[i].imgUrl) {
            const p = document.createElement('p')
            p.innerHTML = `<img src=${data[i].imgUrl} class="pics">`
            document.getElementById("list").appendChild(p)
        }
    }
}

const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()   //???????????????????????  why e???
    const newItem = { title: form.input.value, description: form.description.value, price: form.price.value, imgUrl: form.img.value }
    axios.post("https://api.vschool.io/rett/todo", newItem)
        .then(results => newPage())
        .catch(error => console.log(error))

})



const deleteItem = (i) => {
    let id = 0
    axios.get("https://api.vschool.io/rett/todo")
        .then(results => secondDelete(results.data[i]._id))
        .catch(error => console.log(error))
}


const secondDelete = (id) => {
    axios.delete("https://api.vschool.io/rett/todo/" + id)
        .then(results => newPage())
        .catch(error => console.log(error))

}



newPage()

