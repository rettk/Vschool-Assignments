var box = document.getElementById("box")

// option 1:
// document.getElementById("box").addEventListener("mousedown",function(event){
//     console.log(event);
//     event.target.style.backgroundColor="red"
// })
// option 2:
document.getElementById("box").addEventListener("mousedown", function (event) {
    box.style.backgroundColor = "red"
})

box.addEventListener("mouseup", function (event) {
    box.style.backgroundColor = "yellow"
})

box.addEventListener("mouseover", function (event) {
    box.style.backgroundColor = "blue"
})

box.addEventListener("dblclick", function (event) {
    box.style.backgroundColor = "green"
})

document.addEventListener("wheel", function (event) {
    box.style.backgroundColor = "orange"
})

var color = 0

document.addEventListener("keypress", function (event) {
    color = event.which;
    console.log(color);
    if (color === 114) {
        box.style.backgroundColor = "red";}
    if (color === 98) {
        box.style.backgroundColor = "blue";
    }
    if (color === 121) {
        box.style.backgroundColor = "yellow";
    }
    if (color === 103) {
        box.style.backgroundColor = "green";
    }
    if (color === 111) {
        box.style.backgroundColor = "orange";
    }
})
