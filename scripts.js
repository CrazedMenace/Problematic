document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    loginBtn.addEventListener('click', () => {
        loginForm.classList.toggle('hidden');
        signupForm.classList.add('hidden');
    });
    
    signupBtn.addEventListener('click', () => {
        signupForm.classList.toggle('hidden');
        loginForm.classList.add('hidden');
    });
});
