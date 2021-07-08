const toDoForm = document.querySelector("main .todo-form");
const toDoInput = document.querySelector("main .todo-form input");
const toDoList = document.querySelector("main .todo-list");

let toDos = [];
const TODOS_KEY = 'toDos';

function loadToDo() {
    const loadedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));
    if(loadedToDos !== null) {
        toDos = loadedToDos;
        loadedToDos.forEach(paintToDo);
    }
}

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.currentTarget.parentElement;
    toDos = toDos.filter(e => e.id !== parseInt(li.id));
    saveToDo();
    li.remove(li);
}

function paintToDo(todo) {
    const li = document.createElement('li');
    li.id = todo.id;
    const span = document.createElement('span');
    span.innerText = todo.text;
    const btn = document.createElement('button');
    btn.addEventListener('click', deleteToDo);
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt');
    btn.appendChild(i);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = {
        id: Date.now(),
        text: toDoInput.value
    };
    toDoInput.value = "";
    toDos.push(newToDo);
    saveToDo();
    paintToDo(newToDo);
}

function init() {
    toDoForm.addEventListener("submit", handleToDoSubmit);
    loadToDo();
}

init();