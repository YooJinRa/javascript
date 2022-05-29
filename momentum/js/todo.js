const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

let toDos = []

const TODOS_KEY = "todos"

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event) {
    // target : event가 실행된 html element를 말함
    const li = event.target.parentElement // want to delete :typeof string
    li.remove()
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)) //filter 함수 , parseInt() 사용 string -> number type 변환
    saveToDos() //storage에 삭제한 데이터 반영
}

function paintToDo(newTodo) {
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.text

    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
    event.preventDefault()
    const newTodo = toDoInput.value
    toDoInput.value = ""

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj)
    paintToDo(newTodoObj)
    saveToDos()

}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY) // storage에 저장된 값 불러오기

if(savedToDos !== null) { //storage에 저장된 값이 비있다면,
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)
}