var user = document.getElementById('user');
var email = document.getElementById('email');
var senha = document.getElementById('senha');

user.addEventListener('focus', ()=>{
    user.style.borderColor = '#6912bb';
})

user.addEventListener('blur', ()=>{
    user.style.borderColor = '#000';
})

email.addEventListener('focus', ()=>{
    email.style.borderColor = '#6912bb';
})

email.addEventListener('blur', ()=>{
    email.style.borderColor = '#000';
})

senha.addEventListener('focus', ()=>{
    senha.style.borderColor = '#6912bb';
})

senha.addEventListener('blur', ()=>{
    senha.style.borderColor = '#000';
})