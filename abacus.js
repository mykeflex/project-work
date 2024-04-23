let show = document.getElementById("show")

function display(input) {
    show.value += input
}

let eraseValue = document.getElementById("erase") 
function clear() {
    eraseValue.value = "";
}