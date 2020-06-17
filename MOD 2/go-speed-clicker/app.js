// let number = document.getElementById("number").textContent

let currentCount = Number(localStorage.getItem("count"))

document.getElementById("number").textContent = currentCount

// if (localStorage.getItem("number") > 0) {
//     currentCount = localStorage.getItem("count")
//     } else {
//     currentCount = 0
// }

document.addEventListener("click", (event) => {
    currentCount += 1
    localStorage.setItem("count", currentCount)
    document.getElementById("number").textContent = localStorage.getItem("count")

})

console.log(currentCount)


