
// function to handle stacking of boxes on click.

const handleClick = (e) => {
    let item = e.target

    if (item.innerHTML == "5") {
        // clicking on box five is unhandled case.
    }
    else if (item.style.zIndex == "0") {
        item.style.zIndex = "1"
    }
    else {
        item.style.zIndex = "0"
    }
}

const start = () => {
    let grid = document.getElementById("grid")
    grid.addEventListener("click", handleClick)
}

window.addEventListener("load", start)