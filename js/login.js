// Step 1:add event handler with submit button
document.getElementById('btn-submit').addEventListener('click',()=>{
    console.log('Click')
    const emailField=document.getElementById('user-email');
    const email=emailField.value
    console.log(email)
    const passwordField=document.getElementById('password-input');
    const password=passwordField.value
    console.log(password)
    if(email==='sontan@baap.com' && password==='secret'){
        window.location.href="bank.html";
    }
    else{
        alert('Invalid User')
    }
})