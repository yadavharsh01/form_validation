const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#confirm_password");
const btn = document.querySelector("#btn");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateInputs();
});

const validateInputs = () => {
  const usernameValue = username.value.trim();
 const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const cpasswordValue = cpassword.value.trim();
};
if(usernameValue === ""){
    setError(username, "Username needed !!");
}
else{
    setSucc(username);
}

if(emailValue === ""){
    setError(email, "Email needed !!");
}
else{
    setSuccess(email);
}
if(passwordValue === ""){
    setError(email, "Password needed !!");
}
else{
    setSuccess(password)
}
if(cpasswordValue === ""){
    setError(cpassword, "Same Passeord needed !!");
}
else{
    setSuccess(cpassword);
}
if(passwordValue !== cpasswordValue){
    setError(cpassword, "Password not matched !!");
}   
else{
    setSuccess(cpassword);
}
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay= inputControl.querySelector(".error");
  errorDisplay.innerText=message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");

}
const setSuccess = (element) => {
const inputControl = element.parentElement;
const errorDisplay= inputControl.querySelector(".error");
}
errorDisplay.innerText="";
inputControl.classList.remove("error");
inputControl.classList.add("success");

function isValidEmail(e){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1-3}\.[0-9]{1-3}\.[0-9]{1-3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e);
}