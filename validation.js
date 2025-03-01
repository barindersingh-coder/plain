const form=document.getElementById('form')
const firstname=document.getElementById('firstname')
const email_input=document.getElementById('email_input')
const password_input=document.getElementById('password_input')
const retype_password=document.getElementById('rtype_password')
const error_message=document.getElementById('error_message')

form.addEventListener('submit',(e)=>{
    //e.preventDefault()
   // checkInputs()
    let errors=[]
if(firstname){
    errors=getSignupFormErrors(firstname,email_input.value,password_input.value,retype_password.value)
}
else{
    errors=getSignupFormErrors(email_input.value,password_input.value)
}
if(errors.length>0){
    e.preventDefault()
    error_message.innerText=errors.join(".")
    //alert(errors)
    }
})
function getSignupFormErrors(firstname,email,password,retype_password){
    let errors=[]
    if(firstname===''|| firstname==null){
        errors.push('firstname is required')
        firstname.parentElement.classList.add('incorrect')
    }
    if(email==='' || email==null){
        errors.push('email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password===''|| password==null){
        errors.push('password is required')
        password_input.parentElement.classList.add('incorrect')

    }
    if(retype_password===''|| retype_password==null){
        errors.push('rtype_password is required')
        retype_password.parentElement.classList.add('incorrect')
    }
    if(password!==retype_password){
        errors.push('password do not match')
    }
    return errors
}

