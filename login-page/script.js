const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');

function login(params) {
  const usernameValue = username.value;
  const passwordValue = password.value;
  localStorage.setItem('username', usernameValue);
  localStorage.setItem('password', passwordValue);
}

loginBtn.addEventListener('click', login);
