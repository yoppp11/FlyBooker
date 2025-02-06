const username = document.getElementById('username');
const email = document.getElementById('email');
const loginBtn = document.getElementById('login-btn');

localStorage.clear()

function login() {
  const usernameValue = username.value;
  const emailValue = email.value;

  let userObj = {
    uid: Math.floor(Math.random() * 12345678912341234),
    username: usernameValue,
    email: emailValue,
  };

  const usernameError = document.getElementById('username-error');
  const emailError = document.getElementById('email-error');

  usernameError.style.display = 'none';
  emailError.style.display = 'none';

  isValid = true;

  if (usernameValue === '') {
    usernameError.style.display = 'block';
    isValid = false;
  } else if (emailValue === '') {
    emailError.style.display = 'block';
    isValid = false;
  } else if (usernameValue === '' && emailValue === '') {
    usernameError.style.display = 'block';
    emailError.style.display = 'block';
    isValid = false;
  }

  if (isValid) {
    window.location.href = './flight-search/index.html';
  }

  localStorage.setItem('user', JSON.stringify(userObj));
}

loginBtn.addEventListener('click', login);
