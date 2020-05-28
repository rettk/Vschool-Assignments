const addForm = document.getElementById("addForm")

addForm.addEventListener("submit", function (event) {
    event.preventDefault()
    let addFirst = addForm.addFirstNum.value
    let addSecond = addForm.addSecondNum.value

    addForm.addFirstNum.value = ""
    addForm.addSecondNum.value = ""

    const addPaste = document.createElement("h1")

    let addedAnswer = addFirst + addSecond

    addPaste.textContent = "Added Numbers equal " + addedAnswer

    document.getElementsByTagName("body")[0].append(addPaste)


})

const subtractForm = document.getElementById("subtractForm")

subtractForm.addEventListener("submit", function (event) {
    event.preventDefault()
    let subtractFirst = subtractForm.subtractFirstNum.value
    let subtractSecond = subtractForm.subtractSecondNum.value

    subtractForm.subtractFirstNum.value = ""
    subtractForm.subtractSecondNum.value = ""

    const subtractPaste = document.createElement("h1")

    let subtractAnswer = subtractFirst - subtractSecond

    subtractPaste.textContent = "Subtracted Numbers equal " + subtractAnswer

    document.getElementsByTagName("body")[0].append(subtractPaste)


})

const multiplyForm = document.getElementById("multiplyForm")

multiplyForm.addEventListener("submit", function (event) {
    event.preventDefault()
    let multiplyFirst = multiplyForm.multiplyFirstNum.value
    let multiplySecond = multiplyForm.multiplySecondNum.value

    multiplyForm.multiplyFirstNum.value = ""
    multiplyForm.multiplySecondNum.value = ""

    const multiplyPaste = document.createElement("h1")

    let multiplyAnswer = multiplyFirst * multiplySecond

    multiplyPaste.textContent = "Multiplied Numbers equal " + multiplyAnswer

    document.getElementsByTagName("body")[0].append(multiplyPaste)


})
