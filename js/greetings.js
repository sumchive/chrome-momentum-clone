const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); //새로고침 기본동작 막음.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    //greeting.innerText="Hello "+username;
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText=`Welcome Back, "${username}" ☆,｡･:*`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername=localStorage.getItem(USERNAME_KEY);

//localstroage 확인

//localstorage가 비어있다면
if(savedUsername===null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
//localstroage에 값이 있다면
else{
    //show the greetings
    paintGreetings(savedUsername);
}