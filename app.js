const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
// const loginBtn = document.querySelector(".login-form button");
const greeting = document.querySelector(".greeting");

const HIDDEN = "hidden";

function handleLoginSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;

    greeting.innerText = `Hello, ${userName}!`;   
    loginForm.classList.add(HIDDEN);
    greeting.classList.remove(HIDDEN);
}

loginForm.addEventListener("submit", handleLoginSubmit);