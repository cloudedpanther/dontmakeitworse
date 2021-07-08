const toDoInput = document.querySelector("main .todo-form input");
const toDoList = document.querySelector("main .todo-list");

function paintToDo(todo) {
    
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDo);
}

function init() {
    toDoInput.addEventListener("submit", handleToDoSubmit);
}

init();