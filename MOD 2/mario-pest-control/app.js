const form = document.form

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let finalAnswer = (form.goombas.value * 5) + (form.bobombs.value * 7) + (form.cheepcheeps.value * 11)

    let h1 = document.createElement('h1')
    h1.textContent = finalAnswer + " Coins"
    document.getElementsByTagName("body")[0].append(h1)

})

// answer below footer???
// footer needs better coding for spacing
// how can I make the answer disappear when a new answer is submitted; or how can the answer instantly change depending on what is typed in live?