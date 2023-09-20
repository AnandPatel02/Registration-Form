$(document).ready(function () {
    $('#myForm').submit(function (event) {
        var fullname = $('#fullname').val();
        var email = $('#email').val();
        var mobile = $('#mobile').val();
        var dob = new Date($('#dob').val());
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();

        var isValid = true;

        if (!fullname) {
            $('#fullname').after('<span class="error">Full Name is required</span>');
            isValid = false;
            event.preventDefault();
        }

        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email || !email.match(emailRegex)) {
            $('#email').after('<span class="error">Invalid Email Address</span>');
            isValid = false;
            event.preventDefault();
        }

        var mobileRegex = /^\d{10}$/;
        if (!mobile || !mobile.match(mobileRegex)) {
            $('#mobile').after('<span class="error">Mobile Number must be 10 digits</span>');
            isValid = false;
            event.preventDefault();
        }

        var eighteen = new Date();
        eighteen.setFullYear(eighteen.getFullYear() - 18);
        if (!dob || dob > eighteen) {
            $('#dob').after('<span class="error">Age must be greater than 18 years</span>');
            isValid = false;
            event.preventDefault();
        }

        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!password || !password.match(passwordRegex)) {
            $('#password').after('<span class="error">Password should be at least 8 characters long, including uppercase, lowercase, numeric, and special characters</span>');
            isValid = false;
            event.preventDefault();
        }

        if (password !== confirmPassword) {
            $('#confirmPassword').after('<span class="error">Passwords do not match</span>');
            isValid = false;
            event.preventDefault();
        }

        if (isValid) {
            $('#myForm').submit();
        }
    });
});
