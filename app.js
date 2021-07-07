const loginInput = document.querySelector(".login-form input"),
      loginBtn = document.querySelector(".login-form button");

function handleLoginBtnClick() {
    console.log("hello", loginInput.value);
}

loginBtn.addEventListener("click", handleLoginBtnClick);