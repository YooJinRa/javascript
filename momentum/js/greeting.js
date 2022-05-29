const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

//반복적으로 string으로만 되어 있는 변수값은 변수명 만들때 대문자로만 만든다. 실수를 만들고 싶지 않은 string이라는 사실을 기억하고 상기시키기 좋다.
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"


function onLoginSubmit(event) {
    event.preventDefault() //브라우저의 기본행동을 막는 동작
    loginForm.classList.add(HIDDEN_CLASSNAME)

    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username)
    
    // localStorage.setItem("key", "value")
    // localStorage.removeItem()
    // localStorage.getItem()
}

function paintGreetings(username) {
    greeting.innerText = `Nice to meet you! ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}
// localStorage에 값 여부에 따라서 입력칸 또는 결과값 보여주기(새로고침시에도)
const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)

} else {
    // show the username
    paintGreetings(savedUsername)
}