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

    if(usernameValue===''){
        setError(username,'Username cannot be blank');
    }else{
        setSuccess(username);
    }

    if(emailValue===''){
        setError(email,'Email cannot be blank');
    }else if(!isEmail(emailValue)){
        setError(email,'Email is not valid');
    }else{
        setSuccess(email);
    }

    if(passwordValue===''){
        setError(password,'Password cannot be blank');
    }else{
        setSuccess(password);
    }

    if(cpasswordValue===''){
        setError(cpassword,'Confirm Password cannot be blank');
    }else if(passwordValue!==cpasswordValue){
        setError(cpassword,'Password does not match');
    }else{
        setSuccess(cpassword);
    }
}