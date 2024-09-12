const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').Value
    const password = document.querySelector('#password').Value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)
    if(!validUser){
        return alert('Usuario y/o constraseña incorrectos.')
    }
    alert(`Bienvenido ${validUser.name}`)
    localStorage.setItem('login_succers', JSON.stringify(validUser))
    window.location.href = 'index.html'
})