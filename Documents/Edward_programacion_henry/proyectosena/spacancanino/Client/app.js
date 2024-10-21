//crear usuario 
const users = [{
    email:'user@spacan.com', password:"1234", name:'usuario'
}] 
document.getElementById('login-form').addEventListener('submit', function(event){
    event.preventDefault() 
    const email = document.getElementById('email').value 
    const password = document.getElementById('password').value 

    //buscar usuario en la lista de usuario 
    const user= users.find(u => u.email === email && u.password === password)

    if(user){
        //redirigir a la pagina de inicio despues de iniciar sesion 
        localStorage.setItem('loggedInuser', JSON.stringify(user))
        window.location.href = 'home.html'
    }else{
        alert('correo electronico o contraseña incorrectos')
    }
}) 

// mostrar el nombre del usuario en la pagina de inicio 
window.addEventListener('load', function(){
    const user = JSON.parse(localStorage.getItem('loggedinuser')) 
    if(user){
        document.getElementById('user-name').textContent = user.name
    }
}) 


