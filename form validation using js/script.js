document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        let valid = true;

        // Clear previous error messages
        clearErrors();

        // Name validation
        const name = document.getElementById('name').value;
        if (!name) {
            showError('nameError', 'Name is required.');
            valid = false;
        }

        // Email validation
        const email = document.getElementById('email').value;
        if (!email) {
            showError('emailError', 'Email is required.');
            valid = false;
        } else if (!validateEmail(email)) {
            showError('emailError', 'Email is not valid.');
            valid = false;
        }

        // Password validation
        const password = document.getElementById('password').value;
        if (!password) {
            showError('passwordError', 'Password is required.');
            valid = false;
        } else if (password.length < 6) {
            showError('passwordError', 'Password must be at least 6 characters long.');
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    function clearErrors() {
        const errorElements = document.getElementsByClassName('error');
        for (let i = 0; i < errorElements.length; i++) {
            errorElements[i].innerText = '';
        }
    }

    function showError(elementId, message) {
        document.getElementById(elementId).innerText = message;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
