const form = document.querySelector(".form");
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
if (usernameValue === "") {
  setError(username, "Username needed !!");
} else {
  setSuccess(username);
}

if (emailValue === "") {
  setError(email, "Email needed !!");
} else if (!isValidEmail(emailValue)) {
  setError(email, "Provide a valid Email ID !!");
} else {
  setSuccess(email);
}

if (passwordValue === "") {
  setError(password, "Password needed !!");
} else if (passwordValue.length < 8) {
  setError(password, "Password should be atleast 8 characters !!");
} else {
  setSuccess(password);
}

if (cpasswordValue === "") {
  setError(cpassword, "please Confirm Password!!");
} else if (cpasswordValue !=passwordValue) {
  setError(cpassword, "Password not matched !!");
} else {
  setSuccess(cpassword);
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
  inputControl.classList.add("success");
};
function isValidEmail(e) {
  var reg = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
  return reg.test(e);
}
