// step-1: add event handler to the update button
document.getElementById('btn-update').addEventListener('click', function () {
    // step-2: get the email input field value
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step-3: get the password field value
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // step-4: connect the bank inside page to the login page
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bankInside.html';
    }
    else {
        alert('Tui password bhule gesos. Tore ami tejjo sontan kore dilam!');
    }

    // step-5: clear the input field
    emailField.value = '';
    passwordField.value = '';
})