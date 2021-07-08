const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const container = document.querySelector(".todo-container");
const greeting = document.querySelector(".greeting");
const footer = document.querySelector("footer");

const HIDDEN = "hidden";
const USERNAME_KEY = "userName";

function paintGreetings(userName) {
    greeting.innerText = `Greetings, ${userName}!`;
    container.classList.remove(HIDDEN);
    footer.classList.remove(HIDDEN);
}

function handleLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

function init() {
    if(savedUserName === null) {
        loginForm.classList.remove(HIDDEN);
        loginForm.addEventListener("submit", handleLoginSubmit);
    } else {
        paintGreetings(savedUserName);
    }
}

init();