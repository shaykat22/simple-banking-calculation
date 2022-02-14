document.getElementById('submit-button').addEventListener('click', function () {

    const emalField = document.getElementById('user-email');
    const userEmail = emalField.value;
    const passwordField = document.getElementById('user-pass');
    const userPass = passwordField.value;

    if (userEmail == 'sr@gmail.com' && userPass == 'srk') {
        window.location.href = 'banking.html'
    }

})
