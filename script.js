const form=document.querySelector('form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#confirm_password');
const btn=document.querySelector('#btn');

form.addEventListener('submit',function(e){
    e.preventDefault();
    validateInputs();
})

const validateInputs=()=>{
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const cpasswordValue=cpassword.value.trim();

    }
