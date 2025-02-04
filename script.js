const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');

function login() {
  const usernameValue = username.value;
  const passwordValue = password.value;

  let userObj = {
    uid: Math.floor(Math.random() * 12345678912341234),
    username: usernameValue,
    password: passwordValue,
  };

  const usernameError = document.getElementById('username-error');
  const passwordError = document.getElementById('password-error');

  usernameError.style.display = 'none';
  passwordError.style.display = 'none';

  isValid = true;

  if (usernameValue === '') {
    usernameError.style.display = 'block';
    isValid = false;
  } else if (passwordValue === '') {
    passwordError.style.display = 'block';
    isValid = false;
  } else if (usernameValue === '' && passwordValue === '') {
    usernameError.style.display = 'block';
    passwordError.style.display = 'block';
    isValid = false;
  }

  if (isValid) {
    window.location.href = './flight-search/index.html';
  }

  localStorage.setItem('user', JSON.stringify(userObj));
}

loginBtn.addEventListener('click', login);
