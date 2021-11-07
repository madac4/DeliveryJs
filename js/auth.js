const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const loginForm = document.getElementById('logInForm');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');


const login = (user) => {
    modalAuth.classList.remove('is-open');
    buttonAuth.style.display = 'none';
    buttonOut.style.display = 'block';
    userName.style.display = 'block';
    userName.textContent = user.username;
}
const logout = () => {
    buttonAuth.style.display = 'flex';
    buttonOut.style.display = 'none';
    userName.style.display = 'none';
    userName.textContent = '';
    localStorage.removeItem('user');
}

buttonAuth.addEventListener('click', () => {
    modalAuth.classList.add('is-open');
});

closeAuth.addEventListener('click', () => {
    modalAuth.classList.remove('is-open');
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    loginInput.value == '' ? loginInput.nextElementSibling.textContent = 'Please enter your login' : loginInput.nextElementSibling.textContent = ''
    if (passwordInput.value == '') {
        passwordInput.nextElementSibling.textContent = 'Please enter your password'
    } else if (passwordInput.value.length < 6) {
        passwordInput.nextElementSibling.textContent = 'Your password is too small'
    } else {
        passwordInput.nextElementSibling.textContent = ''
        const user = {
            username: loginInput.value,
            password: passwordInput.value,
        }
        localStorage.setItem('user', JSON.stringify(user));
        login(user);
    }
});

if (localStorage.getItem('user')) {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    login(currentUser)
}

buttonOut.addEventListener('click', () => {
    logout();
})