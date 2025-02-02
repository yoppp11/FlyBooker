const userName = document.getElementById('user-name')
const userData = JSON.parse(localStorage.getItem('user'))

userName.innerHTML = userData.username

console.log(typeof userData)