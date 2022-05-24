const h1 = document.getElementById("title")

function handleTitleClick() {
    console.log("title was clicked!")
    h1.style.color = "red"
}
function handleTitleMouseEnter() {
    h1.innerText = "mouse is here"
}
function handleTitleMouseLeave() {
    h1.innerText = "mouse is gone"
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato"
}
function handleWindowCopy() {
    alert("copier!!!")
}
function handleWindowOffline() {
    alert("No WIFI!")
}
function handleWindowOnline() {
    alert("Online!")
}

h1.addEventListener("click", handleTitleClick)
h1.addEventListener("mouseenter", handleTitleMouseEnter)
h1.addEventListener("mouseleave", handleTitleMouseLeave)

window.addEventListener("resize", handleWindowResize)
window.addEventListener("copy", handleWindowCopy)
window.addEventListener("offline", handleWindowOffline)
window.addEventListener("online", handleWindowOnline)


const h2 = document.getElementById("title")

function handleTitleClick() {
    // const clickedClass = "clicked"
    // if(h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass)
    // } else {
    //     h1.classList.add(clickedClass)
    // }

    h2.classList.toggle("clicked")
}

h2.addEventListener("click", handleTitleClick)