const loginInput = document.querySelector("#login-form input")
const loginButton = document.querySelector("#login-form button")

function onLoginButtonClick() {
    const username = loginInput.value
    console.log(username)
    // if(username === "") {
    //     alert("Please write your name")
    // } else if(username.length > 15) {
    //     alert("Your name is too long.")
    // }
}
loginButton.addEventListener("click", onLoginButtonClick)