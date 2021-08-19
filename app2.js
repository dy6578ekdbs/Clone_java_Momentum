const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = 'hidden';
const NAME_KEY = "name";

function onLoginSubmit(text){
    text.preventDefault();
    const name = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(name);
    localStorage.setItem(NAME_KEY, name);
    paintGreeting(name)
}

function paintGreeting(name){
    greeting.innerText = `Hello ${name}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const saveName = localStorage.getItem(NAME_KEY);

if(saveName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);


} else {
    paintGreeting(saveName);
}