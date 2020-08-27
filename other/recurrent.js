
//run this in the console of any webbrowser and the page will change...
function sayHelloChildren(element) {
    if (element.children.length === 0) {
        element.textContent = "Rett says this is BS"
        return
    } else {
        for (let i = 0; i < element.children.length; i++) {
            sayHelloChildren(element.children[i])
        }
    }
}
sayHelloChildren(document.body)





//doesn't work

// function check(element) {
//     if (element.children) {
//         for (let i = 0; i < element.children.length; i++) {
//             check(element.children[i])
//         }
//     } else {
//         element.textContent = "huhhh"
//     }
// }


// check(document.body)


