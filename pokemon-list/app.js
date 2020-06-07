const xhr = new XMLHttpRequest()

const postNames = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i].name)
        let h1 = document.createElement('h1')
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
    }
}

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function () {

    if (xhr.readyState === 4 && xhr.status !== 404) {
        const JSONdata = xhr.responseText
        data = JSON.parse(JSONdata)
        postNames(data.objects[0].pokemon)
    }
}




// console.log(data)
// console.log(data.objects[0].pokemon)


// const postNames = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i].name)
//     }
// }

// gets "national"