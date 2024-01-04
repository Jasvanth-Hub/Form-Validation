
const form = document.getElementById("container")

const uname = document.getElementById("text")

const email = document.getElementById("email")

const password = document.getElementById("password")

const cpassword = document.getElementById("password1")

const tc = document.getElementById("checkbox")

var isvalidname = false
var isvalidemail = false
var isvalidpassword = false
var isvalidcpassword = false
var isvalidtandc = false

uname.addEventListener("keyup",Usernamecheck)

email.addEventListener("keyup",Emailcheck)

password.addEventListener("keyup",Passwordcheck)

cpassword.addEventListener("keyup",cpasswordcheck)


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validate()
})

function validate()
{


    isvalidname = false
    isvalidemail = false
    isvalidpassword = false
    isvalidcpassword = false
    isvalidtandc = false


Usernamecheck()


Emailcheck()



Passwordcheck()



cpasswordcheck()

if(!tc.checked)
{
    setError(tc,"please click on the terms and conditions")
}
else
{
    setSuccess(tc)
    isvalidtandc = true

}

if(isvalidname && isvalidemail && isvalidpassword && isvalidcpassword && isvalidtandc)
{
    form.submit()
}


}



function setError(input,message)
{
    let parent = input.parentElement
    let small = parent.querySelector("small")
    small.innerText=message
    parent.classList.add("error")
    parent.classList.remove("success")
}

function setSuccess(input)
{
    let parent = input.parentElement
    parent.classList.add("success")
    parent.classList.remove("error")
}

function emailcheck(input)
{
    let emailreg = /^[^@]{1,64}@[^@]{4,253}$/
    let valid  = emailreg.test(input)
    return valid
}






function Usernamecheck()
{
    let namevalue = uname.value.trim() 

    if(namevalue==='')
    {
        setError(uname,"user name cannot be empty")
    }
    else if(namevalue.length<3)
    {
        setError(uname,"user name should be min 3 characters")
    }
    else
    {
        setSuccess(uname)
        isvalidname = true

    }
}

function Emailcheck()
{
    let emailvalue = email.value.trim()

    if(emailvalue==='')
    {
        setError(email,"email cannot be empty")
    }
    else if(emailvalue.length<3)
    {
        setError(email,"The email is less than 3 characters")
    }
    else if(!emailcheck(emailvalue))
    {
        setError(email,"Invalid email Id")
    }
    else
    {
        setSuccess(email)
        isvalidemail = true

    }
}

function Passwordcheck()
{
    let passwordValue = password.value.trim()

    let valid1 = /[A-Z]/g

    let valid2 = /[a-z]/g

    let valid3 = /[0-9]/g

    if(passwordValue==='')
    {
        setError(password,"password cannot be empty")
    }
    else if(passwordValue.length<8)
    {
        setError(password,"password should be min 8 characters")
    }
    else if(!(valid1.test(passwordValue)) || !(valid2.test(passwordValue)) || !(valid3.test(passwordValue)))
    {
        setError(password,"Must contain one number, one uppercase,lowercase letter")
    }
    else
    {
        setSuccess(password)
        isvalidpassword = true
    }
}

function cpasswordcheck()
{
    let cpasswordvalue = cpassword.value.trim()
    let passwordValue = password.value.trim()

    if(cpasswordvalue==='')
    {
        setError(cpassword,"password cannot be empty")
    }
    else if(cpasswordvalue!==passwordValue)
    {
        setError(cpassword,"the password does't match")
    }
    else
    {
        setSuccess(cpassword)
        isvalidcpassword = true
    }
}