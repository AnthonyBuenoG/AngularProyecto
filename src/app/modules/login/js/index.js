const user = JSON.parse(localStorage.getItem('login_succes')) || false
if(!user){
    window.location.href = 'login.component.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = 'login.component.html'
})