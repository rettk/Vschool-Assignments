newPage = () => {
    axios.get("https://api.vschool.io/rett/todo")
        .then(results => displayList(results.data))
        .catch(error => console.log(error))
}


displayList = (data) => {
    console.log(data) //TESTING AND UNECESSARY
    document.getElementById("list").textContent = ""
    for (let i = 0; i < data.length; i++) {
        // let styleInsert = ""
        const li = document.createElement('li')
        const box = document.createElement("p")
        li.innerHTML = `<input type="checkbox" id="button${i}" onclick="completeToggle(${i})"> ` + data[i].title + ` <button id="delete${i}" onclick="deleteItem(${i})">X</button>`
        li.setAttribute("id", `line${i}`)
        if (data[i].completed === true) {
            li.setAttribute("style", "text-decoration: line-through")
        }
        document.getElementById("list").appendChild(li)
        document.getElementById("list").appendChild(box)
        if (data[i].imgUrl) {
            const p = document.createElement('p')
            p.innerHTML = `<img src=${data[i].imgUrl} class="pics">`
            document.getElementById("list").appendChild(p)
        }
        if (data[i].completed === true) {
            document.getElementById(`button${i}`).checked = true
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



const completeToggle = (i) => {
    let id = 0
    axios.get("https://api.vschool.io/rett/todo")
        .then(results => completeToggle2(results.data[i]._id, i))
        .catch(error => console.log(error))
}


const completeToggle2 = (id, i) => {
    if (document.getElementById(`button${i}`).checked === true) {
        axios.put("https://api.vschool.io/rett/todo/" + id, { completed: true })
            .then(results => newPage())
            .catch(error => console.log(error))
    } else {
        axios.put("https://api.vschool.io/rett/todo/" + id, { completed: false })
            .then(results => newPage())
            .catch(error => console.log(error))
    }
}


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

